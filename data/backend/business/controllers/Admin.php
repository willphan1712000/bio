<?php

namespace business\controllers;

require_once __DIR__ . "/../../persistence/API.php";

use persistence\API;

require_once __DIR__ . "/../UserManagement.php";

use business\UserManagement;

require_once __DIR__ . "/../DeleteAccount.php";

use business\DeleteAccount;

require_once __DIR__ . "/../../../core.php";

use config\SystemConfig;

$g = SystemConfig::globalVariables();

class Admin implements Controller
{
    private $username;
    private $themeid;

    function __construct($username, $themeid)
    {
        $this->username = $username;
        $this->themeid = $themeid;

        // get deleteToken
        $deleteToken = API::GET("user", "deleteToken", "username='$username'");
        SESSION_START();
        // Check if user is signed in
        $isSignedIn = UserManagement::isSignedIn($_SESSION, $username);
        if ($isSignedIn) {
            // Check if there is a deleteToken. If so, redirect to restore page
            if ($deleteToken !== NULL && $deleteToken !== "") {
                if (time() - $deleteToken < $g["accountHoldPeriod"]) {
                    header("Location: /@restore?username=" . $username);
                } else {
                    if (DeleteAccount::delete($username)) {
                        header("Location: /@signin");
                    }
                }
            }
        } else {
            header("Location: /@signin");
        }
    }

    public function themeRedirect()
    {
        if ($this->themeid == 0) {
            require __DIR__ . '/../../../../controllers/default/admin.php';
            die();
        }
    }
}

function admin($username, $themeid)
{
    return new Admin($username, $themeid);
}
