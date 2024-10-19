<?php
require_once __DIR__."/../../backend/business/signup/Checkemail.php";
use business\signup\CheckEmail;
require_once __DIR__."/../../backend/business/signup/Input.php";
use business\signup\Input;

$json = file_get_contents("php://input");
$body = json_decode($json);

$input = new Input("", $body->email, "");
$checkEmail = new CheckEmail(null);
$result = $checkEmail->doHandle($input);

echo json_encode($result);