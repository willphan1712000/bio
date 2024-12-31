<?php

namespace controllers\restore;

use business\user\DELETE;
use config\SystemConfig;
use controllers\Controller;
use business\user\UserManagement;
use persistence\Database;
use persistence\Entity\User;

class RestoreAccount extends Controller
{
    protected ?string $dayLeft;
    protected ?string $username;
    protected ?string $error;

    function __construct()
    {
        $this->error = "";
    }

    public function execute()
    {
        $g = SystemConfig::globalVariables();
        //===========================
        $this->username = SystemConfig::URLExtraction(queryStr: "username");
        if ($this->username === NULL) {
            $this->redirectSignin();
        }

        $isSignedIn = UserManagement::isSignedIn($_SESSION, $this->username);
        if (!$isSignedIn) {
            $this->redirectSignin();
        }

        $deleteToken = Database::GET(User::class, 'deleteToken', ['username' => $this->username]);
        if ($deleteToken !== NULL) {
            // ......=.........max days.........-.......time passed........................
            $this->dayLeft = round(($g['accountHoldPeriod'] - (time() - $deleteToken)) / (24 * 60 * 60));
        } else {
            $this->redirectHome();
        }
    }

    public function restore()
    {
        $isSignedIn = UserManagement::isSignedIn($_SESSION, $this->username);
        if (!$isSignedIn) {
            $this->redirectSignin();
        } else {
            $r = Database::PUT(User::class, 'deleteToken', null, ['username' => $this->username]);
            if ($r) {
                $this->redirectAdmin();
            } else {
                $this->error = "Restore failed";
            }
        }
    }

    public function delete()
    {
        $isSignedIn = UserManagement::isSignedIn($_SESSION, $this->username);
        if (!$isSignedIn) {
            $this->redirectSignin();
        } else {
            $r = (new DELETE($this->username))->execute();
            if ($r['success']) {
                $this->redirectHome();
            } else {
                $this->error = "Delete failed";
            }
        }
    }

    private function redirectSignin()
    {
        header("Location: /@signin");
    }

    private function redirectHome()
    {
        header("Location: /");
    }

    private function redirectAdmin()
    {
        header("Location: /" . $this->username . "/admin");
    }
}
