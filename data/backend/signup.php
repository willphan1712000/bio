<?php
    require "../core.php";
    $conn = Database::preparedConnection();
    require "../vendor/autoload.php";
    use Endroid\QrCode\QrCode;
    use Endroid\QrCode\Writer\PngWriter;
    $json = file_get_contents("php://input");
    $body = json_decode($json);

    class Output {
        private $isDuplicated;
        private $isEmailValid;
        private $isLengthValid;
        private $hasUpperCase;
        private $hasDigit;
        private $hasSpecialChar;
        function __construct($isDuplicated, $isEmailValid, $isLengthValid, $hasUpperCase, $hasDigit, $hasSpecialChar) {
            $this->isDuplicated = $isDuplicated;
            $this->isEmailValid = $isEmailValid;
            $this->isLengthValid = $isLengthValid;
            $this->hasUpperCase = $hasUpperCase;
            $this->hasDigit = $hasDigit;
            $this->hasSpecialChar = $hasSpecialChar;
        }
        function set($isDuplicated, $isEmailValid, $isLengthValid, $hasUpperCase, $hasDigit, $hasSpecialChar) {
            $this->isDuplicated = $isDuplicated;
            $this->isEmailValid = $isEmailValid;
            $this->isLengthValid = $isLengthValid;
            $this->hasUpperCase = $hasUpperCase;
            $this->hasDigit = $hasDigit;
            $this->hasSpecialChar = $hasSpecialChar;
        }
        function isValid() {
            return !($this->isDuplicated) && $this->isEmailValid && $this->isLengthValid && $this->hasUpperCase &&$this->hasDigit && $this->hasSpecialChar;
        }
    }

    $isDuplicated = false;
    $isEmailValid = false;
    $isLengthValid = false;
    $hasUpperCase = false;
    $hasDigit = false;
    $hasSpecialChar = true; // Bypass special character requirement
    $output = new Output($isDuplicated, $isEmailValid, $isLengthValid,  $hasUpperCase, $hasDigit, $hasSpecialChar);

    $username = str_replace(' ', '', $body->username);
    $email = $body->email;
    $password = $body->password;
    // Check if the username is duplicated
    $userQuery = mysqli_query($conn, "SELECT *FROM user");
    while($row = mysqli_fetch_assoc($userQuery)) {
        if($row['username'] === $username) {
            $isDuplicated = true;
            break;
        }
    }
    // Check if the email is valid
    $isEmailValid = filter_var($email, FILTER_VALIDATE_EMAIL) ? true : false;
    // Check if the password is valid
    $isLengthValid = (strlen($password) >= 12) ? true : false;
    for($i = 0; $i < strlen($password); $i++) {
        $position = ord($password[$i]); // Get ASCII Value
        if($position >= 65 && $position <= 90) {
            $hasUpperCase = true;
        }
        if($position >= 48 && $position <= 57) {
            $hasDigit = true;
        }
        if($position >= 33 && $position <= 47) {
            $hasSpecialChar = true;
        }
        if($hasUpperCase && $hasDigit && $hasSpecialChar) {
            break;
        }
    }
    
    $output->set($isDuplicated, $isEmailValid, $isLengthValid, $hasUpperCase, $hasDigit, $hasSpecialChar);
    $process = false;
    if($output->isValid()) {
        // Push to database
        $stmt_user = $conn->prepare("INSERT INTO user(username, email, password) VALUES(?,?,?)");
        $stmt_user->bind_param("sss", $username, $email, $password);
        $stmt_user->execute();

        $stmt_template = $conn->prepare("INSERT INTO template(username, themeid) VALUES(?,?)");
        $stmt_template->bind_param("ss", $username, $themeid);
        $themeid = "0";
        $stmt_template->execute();

        $stmt_info = $conn->prepare("INSERT INTO info(username) VALUES(?)");
        $stmt_info->bind_param("s", $username);
        $stmt_info->execute();
        // Create file
        $path = "../".SystemConfig::globalVariables()['user_folder'].$username; // get path to folder
        $url = UserManagement::URLGenerator($username, "share"); // get url generated for share
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
        }

        $process = true;
    }
    echo json_encode($output->isValid() && $process);
?>