<?php
// In root directory, create file cli-config.php

require 'vendor/autoload.php';

use Doctrine\ORM\ORMSetup;
use Doctrine\ORM\EntityManager;
use Doctrine\DBAL\DriverManager;
use Doctrine\Migrations\DependencyFactory;
use Doctrine\Migrations\Configuration\Migration\PhpFile;
use Doctrine\Migrations\Configuration\EntityManager\ExistingEntityManager;

Dotenv\Dotenv::createImmutable("./")->load(); // Load environment file

$config = new PhpFile('migrations.php'); // Or use one of the Doctrine\Migrations\Configuration\Configuration\* loaders

$paths = [__DIR__.'/data/backend/persistence/Entity']; // Directory to entity folder (folder containing all defined entity
$isDevMode = true;

$ORMConfig = ORMSetup::createAttributeMetadataConfiguration($paths, $isDevMode);

// $dsnParser = new DsnParser();
// $connectionParams = $dsnParser->parse($_ENV['DATABASE_URL']); // pdo_mysql://username:password@localhost/dbname

$connectionParams = [
    'dbname' => $_ENV['DATABASE_NAME_DEV'],
    'user' => $_ENV['DATABASE_USERNAME_DEV'],
    'password' => $_ENV['DATABASE_PASSWORD_DEV'],
    'host' => $_ENV['DATABASE_SERVER_NAME_DEV'],
    'driver' => 'pdo_mysql',
];

$connection = DriverManager::getConnection($connectionParams);

$entityManager = new EntityManager($connection, $ORMConfig);

return DependencyFactory::fromEntityManager($config, new ExistingEntityManager($entityManager));