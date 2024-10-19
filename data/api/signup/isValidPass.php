<?php
require_once __DIR__."/../../backend/business/signup/Password.php";
use business\signup\Password;
require_once __DIR__."/../../backend/business/signup/Input.php";
use business\signup\Input;

$json = file_get_contents("php://input");
$body = json_decode($json);

$input = new Input("", "", $body->password);
$password = new Password(null);
$result = $password->doHandle($input);

echo json_encode($result);