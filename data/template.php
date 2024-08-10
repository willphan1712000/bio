<?php
require 'core.php';
$conn = Database::connection();

if(isset($_POST['type']) && isset($_POST['username'])) {
    $type = $_POST['type'];
    $username = $_POST['username'];

    if($type === "fetch") {
        $result = API::GET("template", null, "username = '$username'");
        echo json_encode($result);
    }
    elseif($type === "favorite") {
        if(isset($_POST['favorite'])) {
            echo API::PUT("template", "favorite", $_POST['favorite'], "username = '$username'");
        }
    }
    elseif($type === "select") {
        if(isset($_POST['themeid'])) {
            echo API::PUT("template", "themeid", $_POST['themeid'], "username = '$username'");
        }
    }
}