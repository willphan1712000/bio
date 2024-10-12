<?php
    namespace business\signup;
    require_once __DIR__.'/CheckUsername.php';
    use business\signup\CheckUsername;
    require_once __DIR__.'/CheckEmail.php';
    use business\signup\CheckEmail;
    require_once __DIR__.'/Password.php';
    use business\signup\Password;
    require_once __DIR__.'/CreateFolder.php';
    use business\signup\CreateFolder;
    require_once __DIR__.'/CreateQR.php';
    use business\signup\CreateQR;
    require_once __DIR__.'/Push.php';
    use business\signup\Push;
    require_once __DIR__.'/Input.php';
    use business\signup\Input;

    class Signup {
        public static function signup(String $username, String $email, String $password) {
            $input = new Input($username, $email, $password); // input object from user
            // Check username -> check email -> check password -> create user folder -> create user QR code -> push data to database
            $signupHandler = new CheckUsername(new CheckEmail(new Password(new CreateFolder(new CreateQR(new Push(null))))));
            $process = $signupHandler->handle($input); // return true if the process is successful
            return $process;
        }
    }
?>