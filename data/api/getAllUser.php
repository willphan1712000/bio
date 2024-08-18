<?php
require_once '../core.php';
$json = file_get_contents("php://input");
$body = json_decode($json);

$limit = isset($body->limit) ? $body->limit : null;
$r = API::GET("user", null, null, $limit);
echo json_encode($r);