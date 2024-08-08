<?php

class UserManagement {
    public static function isSignedIn($SESSION, $username) {
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
    public static function URLGenerator($username, $c) {
        if ($c === "main") {
            return "https://".SystemConfig::globalVariables()["domain"]."/".$username;
        }
        elseif ($c === "share") {
            return "https://".SystemConfig::globalVariables()["domain"]."/".$username."?share=true";
        }
        return null;
    }
}