<?php
    require "../core.php";
    $json = file_get_contents("php://input");
    $body = json_decode($json);

    $username = isset($body->username) ? $body->username : null;
    $img = isset($body->img) ? $body->img : null;

    $fileRemoved = unlink("../../user/".$username."/".$img) ? true : false;
    $dbRemoved = API::PUT("info", "image", "", "username = '$username'");
    echo ($fileRemoved && $dbRemoved) ? true : false;