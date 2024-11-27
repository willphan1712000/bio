<?php

namespace persistence;

use config\ProductionConfig;
use Doctrine\ORM\ORMSetup;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager as ORMEntityManager;
use Doctrine\ORM\Configuration;
use Doctrine\ORM\Mapping\Driver\AttributeDriver;
use Symfony\Component\Cache\Adapter\ArrayAdapter;
use Symfony\Component\Cache\Adapter\PhpFilesAdapter;

class EntityManager
{
    private static ORMEntityManager $entityManager;
    private static $connection;
    private function __construct() {}

    public static function getEntityManager(): ORMEntityManager
    {
        if (!isset(self::$entityManager)) {
            // $ORMConfig  = ORMSetup::createAttributeMetadataConfiguration([__DIR__ . '/Entity']);
            // $connection = self::getConnection();
            // self::$entityManager = new ORMEntityManager($connection, $ORMConfig);
            $applicationMode = "development";
            if ($applicationMode == "development") {
                $queryCache = new ArrayAdapter();
                $metadataCache = new ArrayAdapter();
            } else {
                $queryCache = new PhpFilesAdapter('doctrine_queries');
                $metadataCache = new PhpFilesAdapter('doctrine_metadata');
            }

            $config = new Configuration;
            $config->setMetadataCache($metadataCache);
            $driverImpl = new AttributeDriver([__DIR__ . '/Entity'], true);
            $config->setMetadataDriverImpl($driverImpl);
            $config->setQueryCache($queryCache);
            $config->setProxyDir(__DIR__ . '/Proxies');
            $config->setProxyNamespace('Proxies');

            if ($applicationMode == "development") {
                $config->setAutoGenerateProxyClasses(true);
            } else {
                $config->setAutoGenerateProxyClasses(false);
            }

            $connection = DriverManager::getConnection([
                'dbname' => ProductionConfig::database()['dbName'],
                'user' => ProductionConfig::database()['username'],
                'password' => ProductionConfig::database()['password'],
                'host' => ProductionConfig::database()['servername'],
                'driver' => 'pdo_mysql',
            ], $config);

            self::$entityManager = new ORMEntityManager($connection, $config);
        }
        return self::$entityManager;
    }

    public static function getConnection()
    {
        if (!isset(self::$connection)) {
            $ORMConfig  = ORMSetup::createAttributeMetadataConfiguration([__DIR__ . '/Entity']);
            self::$connection = DriverManager::getConnection([
                'dbname' => ProductionConfig::database()['dbName'],
                'user' => ProductionConfig::database()['username'],
                'password' => ProductionConfig::database()['password'],
                'host' => ProductionConfig::database()['servername'],
                'driver' => 'pdo_mysql',
            ], $ORMConfig);
        }
        return self::$connection;
    }
}
