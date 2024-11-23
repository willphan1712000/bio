<?php
require_once __DIR__."/../../../backend/business/user/signup/Password.php";
use business\api\user\Password;
require_once __DIR__."/../../../backend/business/user/signup/Input.php";
use business\api\user\Input;

$json = file_get_contents("php://input");
$body = json_decode($json);

$input = new Input("", "", $body->password);
$password = new Password(null);
$result = $password->doHandle($input);

echo json_encode($result);