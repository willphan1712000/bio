<?php
require 'core.php';
$conn = Database::connection();

if(isset($_POST['type']) && isset($_POST['username'])) {
    $type = $_POST['type'];
    $username = $_POST['username'];

    if($type === "fetch") {
        $query = mysqli_query($conn, "SELECT * FROM template WHERE username = '$username'");
        $result = mysqli_fetch_assoc($query);
        echo json_encode($result);
    }
    elseif($type === "favorite") {
        if(isset($_POST['favorite'])) {
            $favorite = $_POST['favorite'];
            $query = mysqli_query($conn, "UPDATE template SET favorite = '$favorite' WHERE username = '$username'");
            echo true;
        }
    }
    elseif($type === "select") {
        if(isset($_POST['themeid'])) {
            $themeid = $_POST['themeid'];
            echo Database::PUT("template", "themeid", $themeid, "username = '$username'");
        }
    }
}