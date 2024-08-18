<?php
require_once '../core.php';
$json = file_get_contents("php://input");
$body = json_decode($json);

echo json_encode(Database::isUserExist($body->username));