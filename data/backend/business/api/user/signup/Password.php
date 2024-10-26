<?php
    namespace business\api\user;
    require_once __DIR__.'/SignupHandler.php';
    require_once __DIR__.'/Input.php';
    use business\api\user\SignupHandler;
    use business\api\user\Input;

    class Password extends SignupHandler {
        function __construct(?SignupHandler $next) {
            parent::__construct($next);
        }

        public function doHandle(Input $input) : bool {
            $password = $input->getPassword();
            $hasDigit = false;
            $hasUpperCase = false;
            $hasSpecialChar = true; // Bypass special characters
            $isLengthValid = (strlen($password) >= 12) ? true : false;
            for($i = 0; $i < strlen($password); $i++) {
                $position = ord($password[$i]); // Get ASCII Value
                if($position >= 65 && $position <= 90) {
                    $hasUpperCase = true;
                }
                if($position >= 48 && $position <= 57) {
                    $hasDigit = true;
                }
                // if($position >= 33 && $position <= 47) {
                //     $hasSpecialChar = true;
                // }
                if($hasUpperCase && $hasDigit && $hasSpecialChar) {
                    break;
                }
            }
            return $isLengthValid && $hasUpperCase && $hasDigit && $hasSpecialChar;
        }
    }