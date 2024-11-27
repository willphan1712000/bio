<?php

namespace business\user\signup;

class Input
{
    private ?String $username;
    private ?String $password;
    private ?String $email;

    function __construct($username, $email, $password)
    {
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
    }

    public function getUsername(): string
    {
        return $this->username;
    }
    public function getPassword(): string
    {
        return $this->password;
    }
    public function getEmail(): string
    {
        return $this->email;
    }
}
