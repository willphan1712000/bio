<?php
require "../core.php";
$json = file_get_contents("php://input");
$body = json_decode($json);

$username = isset($body->username) ? $body->username : null;
$r = API::GET("info", null, "username = '$username'");

echo json_encode($r);