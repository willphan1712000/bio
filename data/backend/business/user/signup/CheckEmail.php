<?php

namespace business\user\signup;

use config\SystemConfig;
use business\user\signup\SignupHandler;

class CheckEmail extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        if (!preg_match(SystemConfig::regexMap()['Email'], $input->getEmail())) {
            throw new \Exception("Email is not valid");
        }
        return true;
    }
}
