<?php

namespace business\user;

// require_once __DIR__."/../../../../vendor/autoload.php";
use business\IAPI;
use business\user\signup\CheckUsername;
use business\user\signup\CheckEmail;
use business\user\signup\Password;
use business\user\signup\CreateFolder;
use business\user\signup\CreateQR;
use business\user\signup\Push;
use business\user\signup\Input;

class POST implements IAPI
{
    private string $username;
    private string $email;
    private string $password;

    function __construct($username, $email, $password)
    {
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
    }

    private function singup(String $username, String $email, String $password)
    {
        try {
            $input = new Input($username, $email, $password); // input object from user
            // Check username -> check email -> check password -> create user folder -> create user QR code -> push data to database
            $signupHandler = new CheckUsername(new CheckEmail(new Password(new CreateFolder(new CreateQR(new Push(null))))));
            $process = $signupHandler->handle($input); // return true if the process is successful
            return [
                'success' => $process
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    function execute()
    {
        return $this->singup($this->username, $this->email, $this->password);
    }
}
