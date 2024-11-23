<?php
namespace persistence;

use config\ProductionConfig;
use Doctrine\ORM\ORMSetup;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager as ORMEntityManager;

class EntityManager {
    private static ORMEntityManager $entityManager;
    private static $connection;
    private function __construct() {}

    public static function getEntityManager(): ORMEntityManager {
        if(!isset(self::$entityManager)) {
            $ORMConfig  = ORMSetup::createAttributeMetadataConfiguration([__DIR__.'/Entity'], true);
            $connection = self::getConnection();
            self::$entityManager = new ORMEntityManager($connection, $ORMConfig);
        }
        return self::$entityManager;
    }

    public static function getConnection() {
        if(!isset(self::$connection)) {
            $ORMConfig  = ORMSetup::createAttributeMetadataConfiguration([__DIR__.'/Entity'], true);
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