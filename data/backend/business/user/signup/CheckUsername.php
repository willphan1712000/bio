<?php

namespace business\user\signup;

use business\user\signup\SignupHandler;
use business\user\signup\Input;
use business\UserManagement;

class CheckUsername extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        $username = str_replace(' ', '', $input->getUsername());
        if (!UserManagement::isUserExist($username)) {
            return true;
        }
        throw new \Exception("User already exists");
    }
}
