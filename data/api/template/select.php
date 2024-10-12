<?php
    require_once __DIR__."/../backend/persistence/API.php";
    use persistence\API;

    $json = file_get_contents("php://input");
    $body = json_decode($json);

    if(isset($body->username) && isset($body->themeid)) {
        $username = $body->username;
        $themeid = $body->themeid;
    
        echo API::PUT("template", "themeid", $themeid, "username = '$username'");
    }