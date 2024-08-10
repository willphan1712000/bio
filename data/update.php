<?php
    require "core.php";
    $json = file_get_contents("php://input");
    $body = json_decode($json);
    // QR
    require "./vendor/autoload.php";
    use Endroid\QrCode\QrCode;
    use Endroid\QrCode\Writer\PngWriter;
    // Database
    $conn = Database::connection();
    // There are 'info', 'avaDelete', 'getUserInfo', 'deleteToken'
    if($body->type === 'info') {
        // Already fetched variables
        $username = $body->username;
        $filename = $body->image;
        $src = $body->src;
        // Check if there is an image uploaded
        if($src !== null) {
            // If so, check if there is an already uploaded image
            if(!empty($filename)) {
                // If so, delete that image because it's old
                unlink("../user/".$username."/".$filename);
            }
            // Then create image name and save it to database and folder
            $filename = time().".png";
            $body->image = $filename;
            file_put_contents("../user/".$username."/".$filename, base64_decode($body->src));
        }
        // Initialize if the variable for if the process is successful
        $isSuccess = false;
        $isVCardSuccess = false;
        
        // Loop over the body object -> Important task
        foreach($body as $socialName => $value) {
            if(!($socialName === "type" || $socialName === "src" || $socialName === "username")) {
                if($socialName === "des") {
                    $value = filter_var($value, FILTER_SANITIZE_STRING);
                }
                $query = "UPDATE info SET $socialName = '$value' WHERE username = '$username'";
                if(!mysqli_query($conn, $query)) {
                    $isSuccess = false;
                    break;
                } else {
                    $isSuccess = true;
                }
            }
        }
        
        $isVCardSuccess = SystemConfig::vCardGeneration($username, $filename, $body);

        if($isSuccess && $isVCardSuccess) {
            echo $filename;
        }
    }
    elseif ($body->type === 'avaDelete') {
        $username = $body->username;
        $filename = $body->img;
        $fileRemoved = unlink("../user/".$username."/".$filename) ? true : false;
        $dbRemoved = mysqli_query($conn, "UPDATE info SET image = '' WHERE username = '$username'") ? true : false;
        echo ($fileRemoved && $dbRemoved) ? true : false;
    }
    elseif ($body->type === 'getUserInfo') {
        $userQuery = mysqli_query($conn, "SELECT *FROM user");
        $userArray = [];
        while($row = mysqli_fetch_assoc($userQuery)) {
            $userArray[] = $row;
        }
        echo json_encode($userArray);
    }
    elseif ($body->type === 'deleteToken') {
        $token = $body->token;
        $username = $body->username;
        mysqli_query($conn, "UPDATE user SET deleteToken = '$token' WHERE username = '$username'");
        echo(true);
    }
?>