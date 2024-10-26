<?php
    namespace business\api\user;

    require_once __DIR__.'/../IAPI.php';
    use business\api\IAPI;
    require_once __DIR__.'/signup/CheckUsername.php';
    use business\api\user\CheckUsername;
    require_once __DIR__.'/signup/CheckEmail.php';
    use business\api\user\CheckEmail;
    require_once __DIR__.'/signup/Password.php';
    use business\api\user\Password;
    require_once __DIR__.'/signup/CreateFolder.php';
    use business\api\user\CreateFolder;
    require_once __DIR__.'/signup/CreateQR.php';
    use business\api\user\CreateQR;
    require_once __DIR__.'/signup/Push.php';
    use business\api\user\Push;
    require_once __DIR__.'/signup/Input.php';
    use business\api\user\Input;

    class POST implements IAPI {
        private string $username;
        private string $email;
        private string $password;

        function __construct($username, $email, $password) {
            $this->username = $username;
            $this->email = $email;
            $this->password = $password;
        }

        private function singup(String $username, String $email, String $password) {
            $input = new Input($username, $email, $password); // input object from user
            // Check username -> check email -> check password -> create user folder -> create user QR code -> push data to database
            $signupHandler = new CheckUsername(new CheckEmail(new Password(new CreateFolder(new CreateQR(new Push(null))))));
            $process = $signupHandler->handle($input); // return true if the process is successful
            return $process;
        }

        function execute() {
            return $this->singup($this->username, $this->email, $this->password);
        }
    }
?>