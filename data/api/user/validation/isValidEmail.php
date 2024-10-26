<?php
require_once __DIR__."/../../../backend/business/api/user/signup/Checkemail.php";
use business\api\user\CheckEmail;
require_once __DIR__."/../../../backend/business/api/user/signup/Input.php";
use business\api\user\Input;

$json = file_get_contents("php://input");
$body = json_decode($json);

$input = new Input("", $body->email, "");
$checkEmail = new CheckEmail(null);
$result = $checkEmail->doHandle($input);

echo json_encode($result);