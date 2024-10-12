<?php
    require_once __DIR__.'/../backend/business/signup/Signup.php';
    use business\signup\Signup;

    $json = file_get_contents("php://input");
    $body = json_decode($json);
    
    echo Signup::signup($body->username, $body->email, $body->password);