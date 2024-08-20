<?php
require_once '../core.php';
$json = file_get_contents("php://input");
$body = json_decode($json);

$limit = isset($body->limit) ? "LIMIT $body->limit" : "";
$offset = isset($body->offset) ? "OFFSET $body->offset" : "";
$like = isset($body->like)? "WHERE username LIKE '%$body->like%' OR email LIKE '%$body->like%'" : "";

$r = Database::executeQuery("SELECT *FROM user $like $limit $offset");
if($r["success"]) {
    echo json_encode($r["data"]);
}