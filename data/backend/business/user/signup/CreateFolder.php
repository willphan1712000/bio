<?php

namespace business\user\signup;

use business\user\signup\SignupHandler;
use business\user\signup\Input;
use config\SystemConfig;

class CreateFolder extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        $path = SystemConfig::globalVariables()['user_folder'] . $input->getUsername(); // get path to folder
        if (!is_dir($path)) {
            if (mkdir($path, 0755, true)) {
                return true;
            }
        }
        throw new \Exception("Failed to create user folder");
    }
}
