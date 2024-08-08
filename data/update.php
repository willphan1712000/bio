<?php
    require "core.php";
    require "./vendor/autoload.php";
    use Endroid\QrCode\QrCode;
    use Endroid\QrCode\Writer\PngWriter;
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    $json = file_get_contents("php://input");
    $body = json_decode($json);
    // There are 'create', 'info', 'getInfo', 'delete', 'avaDelete', 'getUserInfo', 'mainPage', 'deleteToken', 'restoreAccount'
    if($body->type === 'create') {
        // Already fetched variables
        $username = $body->username;
        $path = "../user/".$username;
        $url = UserManagement::URLGenerator($username, "share");
        // Check if a folder for a user is created yet
        if(!is_dir($path)) {
            if(mkdir($path, 0755, true)) {
                $createFolderSuccess = true;
            }
        } else {
            $createFolderSuccess = false;
        }
        // If so, create QR Code
        if($createFolderSuccess) {
            // QR Code Generation Process
            $qr_code = QrCode::create($url)->setSize(600)
            ->setMargin(10);
            $writer = new PngWriter;
            $result = $writer->write($qr_code);
            header("Content-Type: " . $result->getMimeType());
            $result->saveToFile($path."/qr-code.png");
            echo true;
        }
    }
    elseif($body->type === 'info') {
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
    elseif ($body->type === 'getInfo') {
        $getColumnQuery = mysqli_query($conn, "DESCRIBE info");
        $columns = []; // This is the array for all column name of the table
        while($row = mysqli_fetch_assoc($getColumnQuery)) {
            $columns[] = $row["Field"];
        }
        $alls = array_merge(SystemConfig::infoArr(), SystemConfig::socialNameArr());

        foreach($alls as $all) {
            if(!in_array($all, $columns)) {
                mysqli_query($conn, "ALTER TABLE info ADD COLUMN ".$all." varchar(200) NOT NULL");
            }
        }
        foreach($columns as $column) {
            if(!in_array($column, $alls)) {
                mysqli_query($conn, "ALTER TABLE info DROP COLUMN ".$column);
            }
        }

        $username = $body->username;
        $infoQuery = mysqli_query($conn, "SELECT *FROM info WHERE username = '$username'");
        $infoArray = [];
        while($row = mysqli_fetch_assoc($infoQuery)) {
            $infoArray[] = $row;
        }
        echo json_encode($infoArray);
    }
    elseif ($body->type === 'delete') {
        echo SystemConfig::deleteAccount($body->username);
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
    elseif ($body->type === 'mainPage') {
        $userColumnQuery = mysqli_query($conn, "DESCRIBE user");
        $columns = [];
        while($col = mysqli_fetch_assoc($userColumnQuery)) {
            $columns[] = $col['Field'];
        }
        foreach(SystemConfig::account() as $ele) {
            if(!in_array($ele, $columns)) {
                mysqli_query($conn, "ALTER TABLE user ADD COLUMN ".$ele." varchar(200) NOT NULL");
            }
        }
        foreach($columns as $column) {
            if(!in_array($column, SystemConfig::account())) {
                mysqli_query($conn, "ALTER TABLE user DROP COLUMN ".$column);
            }
        }
        echo(true);
    }
    elseif ($body->type === 'deleteToken') {
        $token = $body->token;
        $username = $body->username;
        mysqli_query($conn, "UPDATE user SET deleteToken = '$token' WHERE username = '$username'");
        echo(true);
    }
    elseif($body->type === 'restoreAccount') {
        $username = $body->username;
        if(mysqli_query($conn, "UPDATE user SET deleteToken = '' WHERE username ='$username'")) {
            echo(true);
        }
    }
?>