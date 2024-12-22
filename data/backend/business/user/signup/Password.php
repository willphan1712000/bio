<?php

namespace business\user\signup;

use business\user\signup\SignupHandler;
use business\user\signup\Input;
use config\SystemConfig;

class Password extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        $password = $input->getPassword();
        $hasDigit = false;
        $hasUpperCase = false;
        $hasSpecialChar = true; // Bypass special characters
        $isLengthValid = (strlen($password) >= SystemConfig::globalVariables()['passwordRequirement']['limit']) ? true : false;
        for ($i = 0; $i < strlen($password); $i++) {
            $position = ord($password[$i]); // Get ASCII Value
            if ($position >= 65 && $position <= 90) {
                $hasUpperCase = true;
            }
            if ($position >= 48 && $position <= 57) {
                $hasDigit = true;
            }
            if ($hasUpperCase && $hasDigit && $hasSpecialChar) {
                break;
            }
        }
        if ($isLengthValid && $hasUpperCase && $hasDigit && $hasSpecialChar) {
            return true;
        }
        throw new \Exception("Password is not valid");
    }
}
