<?php

namespace migrations;

require_once __DIR__ . '/../data/backend/Error.php';
require_once __DIR__ . "/../vendor/autoload.php";

use persistence\EntityManager;
use Doctrine\ORM\Tools\SchemaTool;

$entityManager = EntityManager::getEntityManager();

// Get the metadata of your entities
$metadata = $entityManager->getMetadataFactory()->getAllMetadata();

// Create SchemaTool
$schemaTool = new SchemaTool($entityManager);

// Generate the SQL
$sql = $schemaTool->getCreateSchemaSql($metadata);

// Output the SQL to a file
file_put_contents('exported_schema.sql', implode(";\n", $sql) . ";");
