<?php
namespace business;
require_once __DIR__.'/../persistence/API.php';
use persistence\API;
require_once __DIR__."/../../core.php";
use config\SystemConfig;

interface IUserManagement {
    public static function isSignedIn($SESSION, $username): bool;
    public static function URLGenerator($username, $c): string;
    public static function isUserExist($username): bool;
}

class UserManagement implements IUserManagement {
    public static function isSignedIn($SESSION, $username): bool {
        if(isset($SESSION[$username])) {
            if(time() - $SESSION['last_time_'.$username] > SystemConfig::globalVariables()['timeSession']) {
                unset($SESSION[$username]);
                return false;
            } else {
                $SESSION['last_time_'.$username] = time();
                return true;
            }
        } else {
            return false;
        }
    }
    // This function is to create url for user
    public static function URLGenerator($username, $c) : string {
        if ($c === "main") {
            return "https://".SystemConfig::globalVariables()["domain"]."/".$username;
        }
        elseif ($c === "share") {
            return "https://".SystemConfig::globalVariables()["domain"]."/".$username."?share=true";
        }
        return null;
    }
    // Check if username exists 
    public static function isUserExist($username): bool {
        $result = API::GET("user", "username", "username='$username'");
        if(empty($result)) {
            return false;
        }
        return true;
    }
}