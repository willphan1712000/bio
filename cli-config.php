<?php
// In root directory, create file cli-config.php

require 'vendor/autoload.php';

use config\ProductionConfig;
use Doctrine\ORM\ORMSetup;
use Doctrine\ORM\EntityManager;
use Doctrine\DBAL\DriverManager;
use Doctrine\Migrations\DependencyFactory;
use Doctrine\Migrations\Configuration\Migration\PhpFile;
use Doctrine\Migrations\Configuration\EntityManager\ExistingEntityManager;

Dotenv\Dotenv::createImmutable("./")->load(); // Load environment file

$config = new PhpFile('migrations.php'); // Or use one of the Doctrine\Migrations\Configuration\Configuration\* loaders

$paths = [__DIR__ . '/data/backend/persistence/Entity']; // Directory to entity folder (folder containing all defined entity
$isDevMode = true;

$ORMConfig = ORMSetup::createAttributeMetadataConfiguration($paths, $isDevMode);

// $dsnParser = new DsnParser();
// $connectionParams = $dsnParser->parse($_ENV['DATABASE_URL']); // pdo_mysql://username:password@localhost/dbname

$connectionParams = [
    'dbname' => ProductionConfig::database()['dbName'],
    'user' => ProductionConfig::database()['username'],
    'password' => ProductionConfig::database()['password'],
    'host' => ProductionConfig::database()['servername'],
    'driver' => 'pdo_mysql',
];

$connection = DriverManager::getConnection($connectionParams);

$entityManager = new EntityManager($connection, $ORMConfig);

return DependencyFactory::fromEntityManager($config, new ExistingEntityManager($entityManager));
