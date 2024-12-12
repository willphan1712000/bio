<?php

namespace business\controllers;

use business\user\UserManagement;
use config\SystemConfig;
use persistence\Database;
use persistence\Entity\User;

class Signin extends Controller
{
    protected string $username;
    protected string $password;
    protected $g;
    protected $title;
    protected string $error;
    protected $template;

    function __construct()
    {
        $this->g = SystemConfig::globalVariables();
        $this->title = "Sign In";
        $this->error = "";
        $this->username = "";
        $this->password = "";

        if (SystemConfig::URLExtraction(queryStr: "restore") === 'true') {
            $this->title = "Restore Account";
        }
        SESSION_START();
        $this->template = SystemConfig::URLExtraction(queryStr: "template");
    }

    public function execute()
    {
        // check if user exists
        if (UserManagement::isUserExist($this->username)) {
            // check if password is correct
            if ($this->password === Database::GET(User::class, "password", ['username' => $this->username])) {
                if ($this->template === 'true') {
                    header("Location: /@template?username=" . $this->username);
                } else {
                    header("Location: /" . $this->username . "/admin");
                }
                $_SESSION[$this->username] = $this->username;
                $_SESSION['last_time_' . $this->username] = time();
            } else {
                $this->error = "The password is not correct";
            }
        } else if ($this->username === $this->g['aicAccount']['username'] && $this->password === $this->g['aicAccount']['password']) {
            header("Location: /@aic");
            $_SESSION[$this->username] = $this->username;
            $_SESSION['last_time_' . $this->username] = time();
        } else {
            $this->error = "The username does not exist";
        }
    }

    public function signin(string $username, string $password)
    {
        $this->username = $username;
        $this->password = $password;

        $this->execute();
    }
}
