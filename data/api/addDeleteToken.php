<?php
    require "../core.php";
    $json = file_get_contents("php://input");
    $body = json_decode($json);

    $token = isset($body->token) ? $body->token : null;
    $username = isset($body->username) ? $body->username : null;
    
    // mysqli_query($conn, "UPDATE user SET deleteToken = '$token' WHERE username = '$username'");
    $r = API::PUT("user", "deleteToken", $token, "username = '$username'");
    echo($r);