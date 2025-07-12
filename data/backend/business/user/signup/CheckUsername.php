<?php

namespace business\user\signup;

use business\user\signup\SignupHandler;
use business\user\signup\Input;
use business\user\UserManagement;

class CheckUsername extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        $username = $input->getUsername();

        if (str_contains($username, " ")) {
            throw new \Exception("Username should not contain spaces!");
        }

        if (preg_match('/[A-Z]/', $username)) {
            throw new \Exception("Username should not uppercase letters");
        }

        if (UserManagement::isUserExist($username)) {
            throw new \Exception("User already exists");
        }

        return true;
    }
}
