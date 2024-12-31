<?php

namespace business\user\signup;

use business\user\signup\SignupHandler;
use business\user\UserManagement;

class Auth extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        SESSION_START();
        return UserManagement::auth($_SESSION, $input->getUsername());
    }
}
