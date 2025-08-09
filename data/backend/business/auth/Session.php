<?php

namespace business\auth;

use config\SystemConfig;
use Exception;

/**
 * Session-based Authorization
 */
class Session implements AuthInterface
{
    protected ?string $username;

    public function __construct(?string $username)
    {
        $this->username = $username;
    }

    public function auth(): bool
    {
        if (!isset($this->username) || $this->username === NULL) throw new Exception("Username is not given");

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
