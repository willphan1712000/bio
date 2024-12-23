<?php
    require_once __DIR__."/../../../core.php";
    use config\SystemConfig;
    $g = SystemConfig::globalVariables();
    require "./vendor/autoload.php";
    use Endroid\QrCode\QrCode;
    use Endroid\QrCode\Writer\PngWriter;
    $conn = Database::connection();
    $json = file_get_contents("php://input");
    $body = json_decode($json);
    // There are 'create', 'info', 'getInfo', 'delete', 'avaDelete', 'getUserInfo', 'mainPage', 'deleteToken', 'restoreAccount'
    if($body->type === 'create') {
        // Already fetched variables
        $username = $body->username;
        $path = "../user/".$username;
        $url = $g['domain']."/".$username;
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
        $countryCodeArr = json_decode(file_get_contents("../src/module/countryCodes.json"), true);
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
        // Check if there is a username in the database
        $infoUsernameQuery = mysqli_query($conn, "SELECT username FROM info");
        $isUsernameExist = false;
        while($row = mysqli_fetch_assoc($infoUsernameQuery)) {
            if($row['username'] === $username) {
                $isUsernameExist = true;
                break;
            }
        }
        // Initialize if the variable for if the process is successful
        $isSuccess = false;
        // VCard content initialization
        if(!empty($filename)) {
            $imageData = base64_encode(file_get_contents("../user/".$username."/".$filename));
        } else {
            $imageData = "";
        }
        $vCardContentPhp = '<?php $vCardContent="BEGIN:VCARD\nVERSION:3.0\nREV:2023-12-08T06:00:48Z\n';
        $vCardContentPhp .= 'PHOTO;ENCODING=b;TYPE=JPEG:'.$imageData.'\n';
        
        // Check if there is a username in the database
        if(!$isUsernameExist) {
            mysqli_query($conn, "INSERT INTO info (username) VALUES('$username')");
        }
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
                // VCard creation here
                if($socialName !== 'image') {
                    if($socialName === 'name') {
                        $vCardContentPhp .= 'N;CHARSET=utf-8:'.$value.';;;;\nFN;CHARSET=utf-8:'.$value.'\n';
                    }
                    else if ($socialName === 'description') {
                        $vCardContentPhp .= 'NOTE;CHARSET=utf-8:'.$value.'\n';
                    }
                    else if($socialName === 'Mobile') {
                        $explode = explode(" ", $value);
                        $index = $explode[0];
                        $number = $explode[1];
                        if($index === '235') {
                            $number = substr($number, 1);
                        }
                        $vCardContentPhp .= 'TEL;TYPE=Mobile;PREF:'.$countryCodeArr[$index]['dial_code'].' '.$number.'\n';
                    }
                    else if($socialName === 'Work') {
                        $explode = explode(" ", $value);
                        $index = $explode[0];
                        $number = $explode[1];
                        if($index === '235') {
                            $number = substr($number, 1);
                        }
                        $vCardContentPhp .= 'TEL;TYPE=Work;PREF:'.$countryCodeArr[$index]['dial_code'].' '.$number.'\n';
                    }
                    else if($socialName === 'Email') {
                        $vCardContentPhp .= 'EMAIL;TYPE=Email:'.$value.'\n';
                    }
                    else if($socialName === 'Website') {
                        $vCardContentPhp .= 'URL:'.$Website.'\n';
                    }
                    else if($socialName === 'Address') {
                        $vCardContentPhp .= 'URL;TYPE=Address:https://google.com/maps/?q='.$value.'\n';
                    }
                    else if($socialName === 'organization') {
                        $vCardContentPhp .= 'ORG:'.$value.'\n';
                    }
                    else {
                        $vCardContentPhp .= 'URL;TYPE='.$socialName.':'.$value.'\n';
                    }
                }
            }
        }
        
        $vCardContentPhp .= 'END:VCARD";header("Content-type: text/vcard");header("Content-Disposition: attachment; filename=\"contact.vcf\"");echo $vCardContent;';
        $vcard = fopen("../user/".$username."/vcard.php", "w");
        fwrite($vcard, $vCardContentPhp);

        if($isSuccess) {
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
        $username = $body->username;
        echo SystemConfig::deleteAccount($username);
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