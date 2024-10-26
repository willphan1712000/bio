<?php
    require_once __DIR__.'/../../backend/business/api/user/POST.php';
    use business\api\user\POST;

    $json = file_get_contents("php://input");
    $body = json_decode($json);
    
    $signup = new POST($body->username, $body->email, $body->password);
    $result = $signup->execute();
    echo $result;