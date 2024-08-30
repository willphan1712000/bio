<?php
require_once '../core.php';
echo json_encode(DataMigration::add() && DataMigration::addIData());