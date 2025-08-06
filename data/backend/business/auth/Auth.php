<?php

namespace business\auth;

use business\auth\JWTAuth;
use business\auth\Session;

enum STRAGETRY
{
    case SESSION;
    case JWT;
}

/**
 * Dealing with chosen auth strategy
 */
class Auth implements AuthInterface
{
    const strategy = STRAGETRY::JWT;
    protected AuthInterface $auth;

    public function __construct(...$arg)
    {
        switch (self::strategy) {
            case STRAGETRY::SESSION:
                $this->auth = new Session(...$arg);
                break;
            case STRAGETRY::JWT:
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
