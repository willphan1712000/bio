<?php

namespace business\user;

use config\SystemConfig;
use persistence\Database;
use persistence\Entity\User;

interface IUserManagement
{
    public static function isSignedIn($SESSION, string $username): bool;
    public static function URLGenerator(string $username, string $c): string|null;
    public static function isUserExist($username): bool;
}

class UserManagement implements IUserManagement
{
    public static function isSignedIn($SESSION, string $username): bool
    {
        if (isset($SESSION[$username])) {
            if (time() - $SESSION['last_time_' . $username] > SystemConfig::globalVariables()['timeSession']) {
                unset($SESSION[$username]);
                return false;
            } else {
                $SESSION['last_time_' . $username] = time();
                return true;
            }
        } else {
            return false;
        }
    }
    // This function is to create url for user
    public static function URLGenerator(string $username, string $c = "main" | "share"): string|null
    {
        if ($c === "main") {
            return "https://" . SystemConfig::globalVariables()["domain"] . "/" . $username;
        } elseif ($c === "share") {
            return "https://" . SystemConfig::globalVariables()["domain"] . "/" . $username . "?share=true";
        }
        return NULL;
    }
    // Check if username exists, return true if exists. Otherwise, return false
    public static function isUserExist($username): bool
    {
        try {
            $result = Database::GET(User::class, null, ['username' => $username]);
            if ($result) {
                return true;
            }
        } catch (\Exception $e) {
            return false;
        }
    }
}
