<?php

namespace controllers\admin;

use config\SystemConfig;
use business\user\DELETE;
use persistence\Database;
use persistence\Entity\User;
use controllers\user\UserController;
use business\template\TemplateManagement;
use business\user\UserManagement;

class AdminController extends UserController
{
    protected function getPreData()
    {
        $this->g = SystemConfig::globalVariables(); // get global variables
        $this->username = SystemConfig::URLExtraction(2); // get username
        $this->themeid = TemplateManagement::shareTemplate($this->username, (int) SystemConfig::URLExtraction(queryStr: "tem")); // get template id
    }

    private function themeRedirect()
    {
        if ($this->themeid === 0) {
            require __DIR__ . '/../../dist/adminDefault.php';
            die();
        }
        require __DIR__ . '/../../dist/adminTemplate.php';
        die();
    }

    private function restoreProcess()
    {
        // get deleteToken
        $deleteToken = Database::GET(User::class, "deleteToken", ['username' => $this->username]);
        // Check if user is signed in
        $isSignedIn = UserManagement::isSignedIn($_SESSION, $this->username);
        if ($isSignedIn) {
            // Check if there is a deleteToken. If so, redirect to restore page
            if ($deleteToken !== NULL && $deleteToken !== "") {
                if (time() - $deleteToken < $this->g["accountHoldPeriod"]) {
                    header("Location: /@restore?username=" . $this->username);
                } else {
                    if (((new DELETE($this->username))->execute())['success']) {
                        header("Location: /@signin");
                    }
                }
            }
        } else {
            header("Location: /@signin");
        }
    }

    public function redirect()
    {
        $this->getPreData(); // get pre data to check some conditions before proceeding to anything
        $this->themeRedirect(); // if template id is 0, redirect to default admin page. Otherwise, proceed the next
    }

    public function execute()
    {
        try {
            $this->getPreData(); // get pre data to check some conditions before proceeding to anything
            if (UserManagement::isSignedIn($_SESSION, $this->username)) {
                $this->restoreProcess(); // perform restore process before proceeding anything

                $this->getPostData(); // get all needed data

                return [
                    'success' => true
                ];
            } else {
                header("Location: /@signin");
            }
            return [
                'success' => false
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }
}
