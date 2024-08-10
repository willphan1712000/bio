<?php

require_once '../core.php';
$json = file_get_contents("php://input");
$body = json_decode($json);

$username = $body->username;
$r = API::PUT("user", "deleteToken", NULL, "username = '$username'");
echo json_encode($r);