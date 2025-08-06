<?php

namespace business\auth;

use config\SystemConfig;

/**
 * Session-based Authorization
 */
class Session implements AuthInterface
{
    protected string $username;

    public function __construct(string $username, ?string $token = null)
    {
        $this->username = $username;
    }

    public function auth(): bool
    {
        if (isset($_SESSION[$this->username])) {
            if (time() - $_SESSION['last_time_' . $this->username] > SystemConfig::globalVariables()['timeSession']) {
                unset($_SESSION[$this->username]);
                return false;
            } else {
                $_SESSION['last_time_' . $this->username] = time();
                return true;
            }
        } else {
            return false;
        }
    }

    /**
     * This function helps creating a session stored on cookies including signin information
     */
    public function generateAuth(): bool
    {
        $_SESSION[$this->username] = $this->username;
        $_SESSION['last_time_' . $this->username] = time();

        return true;
    }
}
