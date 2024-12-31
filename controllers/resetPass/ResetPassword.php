<?php

namespace controllers\resetPass;

use business\user\PUT;
use business\user\signup\Input;
use business\user\signup\Password;
use config\SystemConfig;
use controllers\Controller;
use persistence\Database;
use persistence\Entity\User;

class ResetPassword extends Controller
{
    protected ?string $inactive;
    protected ?string $active;
    protected ?string $password;
    protected ?string $verifyPassword;
    protected ?string $error;
    protected ?string $username;

    function __construct()
    {
        $this->inactive = null;
        $this->active = null;
        $this->password = '';
        $this->verifyPassword = '';
        $this->error = '';

        $g = SystemConfig::globalVariables();

        $this->username = SystemConfig::URLExtraction(queryStr: 'username');
        $token = SystemConfig::URLExtraction(queryStr: 'token');

        if ($this->username !== NULL || $token !== NULL) {
            $time = Database::GET(User::class, 'token', ['username' => $this->username]);
            if ($time === NULL || $time !== $token) {
                $this->expire();
            } else {
                if (time() - $time > $g['resetExpire']) {
                    Database::PUT(User::class, 'token', null, ['username' => $this->username]);
                    $this->expire();
                }
            }
        } else {
            $this->expire();
        }
    }

    private function expire()
    {
        header("Location: /@expire");
    }

    private function resetPassword()
    {
        if ($this->password !== $this->verifyPassword) {
            $this->error = "The verified password does not match";
        } else {
            $r = (new PUT($this->username, $this->password))->execute();

            if ($r['success']) {
                Database::PUT(User::class, 'token', null, ['username' => $this->username]);
                $this->inactive = "inactive";
                $this->active = "active";
            } else {
                $this->error = $r['error'];
            }
        }
    }
    public function execute()
    {
        $this->resetPassword();
    }
}
