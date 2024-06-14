<?php
    require "core.php";
    $conn = Database::preparedConnection();
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
        function getData() {
            return [$this->isDuplicated, $this->isEmailValid, $this->isLengthValid, $this->hasUpperCase ,$this->hasDigit, $this->hasSpecialChar];
        }
    }

    $isDuplicated = false;
    $isEmailValid = false;
    $isLengthValid = false;
    $hasUpperCase = false;
    $hasDigit = false;
    $hasSpecialChar = true; // Bypass special character requirement
    $output = new Output($isDuplicated, $isEmailValid, $isLengthValid,  $hasUpperCase, $hasDigit, $hasSpecialChar);

    if(isset($_POST['username']) || isset($_POST['email']) || isset($_POST['password'])) {
        $username = str_replace(' ', '', $_POST['username']);
        $email = $_POST['email'];
        $password = $_POST['password'];
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
        if(!$isDuplicated && $isEmailValid && $isLengthValid && $hasUpperCase && $hasDigit && $hasSpecialChar) {
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
        }

        echo json_encode($output->getData());
    }
?>