<?php
require_once __DIR__."/../../../backend/business/UserManagement.php";
use business\UserManagement;
$json = file_get_contents("php://input");
$body = json_decode($json);

echo json_encode(UserManagement::isUserExist($body->username));