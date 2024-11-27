<?php

namespace business\user\signup;

use business\user\signup\SignupHandler;
use Exception;

class CheckEmail extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        if (filter_var($input->getEmail(), FILTER_VALIDATE_EMAIL)) {
            return true;
        }
        throw new \Exception("Email is not valid");
    }
}
