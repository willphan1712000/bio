<?php

namespace business\auth;

use business\auth\JWTAuth;
use business\auth\Session;
use config\SystemConfig;

enum STRATEGY
{
    case SESSION;
    case JWT;
}

/**
 * Dealing with chosen auth strategy
 */
class Auth implements AuthInterface
{
    protected AuthInterface $auth;

    public function __construct(...$arg)
    {
        $strategy = SystemConfig::globalVariables()["auth"]["auth_strategy"];
        switch ($strategy) {
            case STRATEGY::SESSION:
                $this->auth = new Session(...$arg);
                break;
            case STRATEGY::JWT:
                $this->auth = new JWTAuth(...$arg);
                break;
            default:
                break;
        }
    }

    public function auth(): bool
    {
        return $this->auth->auth();
    }

    public function generateAuth(): bool|string
    {
        return $this->auth->generateAuth();
    }
}
