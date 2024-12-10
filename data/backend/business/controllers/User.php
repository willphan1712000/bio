<?php

namespace business\controllers;

use config\SystemConfig;
use persistence\Database;
use persistence\Entity\UserInfo;
use business\user\UserManagement;
use persistence\Entity\UserPhone;
use persistence\Entity\UserSocial;
use business\template\TemplateManagement;

class User implements Controller
{
    private string $username;
    private $themeid;
    private $info;
    private $css;
    private $url;
    private $status;

    function __construct()
    {
        $this->status = $this->execute();
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getInfo()
    {
        return $this->info;
    }

    public function getThemeid()
    {
        return $this->themeid;
    }
    public function getCSS()
    {
        return $this->css;
    }
    public function getURL()
    {
        return $this->url;
    }
    public function getStatus()
    {
        return $this->status;
    }
    public function themeRedirect()
    {
        if ($this->themeid == 0) {
            require __DIR__ . "/../../../../controllers/default/user.php";
            die();
        }
    }
    public function execute()
    {
        try {
            $g = SystemConfig::globalVariables();
            $this->username = SystemConfig::URLExtraction(); // get username

            $this->themeid = TemplateManagement::shareTemplate($this->username, (int) SystemConfig::URLExtraction(queryStr: "tem")); // get template id

            $this->themeRedirect(); // if template id is 0, redirect to default template. Otherwise, proceed the next

            $this->info = [];
            /** @var UserInfo|NULL*/
            $userInfo = Database::GET(UserInfo::class, null, ['username' => $this->username]);
            /** @var UserPhone|NULL */
            $userPhone = Database::GET(UserPhone::class, null, ['username' => $this->username]);
            /** @var UserSocial|NULL */
            $userSocial = Database::GET(UserSocial::class, null, ['username' => $this->username]);

            foreach (UserInfo::getProperty() as $prop) {
                if (!in_array($prop, ['User', 'image'])) {
                    $this->info[$prop] = $userInfo->get($prop);
                }
                if ($prop === 'image') {
                    $this->info[$prop] = $userInfo->get($prop) === NULL ? $g['img']['unknown'] : $g['user_folder'] . $this->username . "/" . $userInfo->get($prop) . "?v=" . time();
                }
            }

            foreach (UserPhone::getProperty() as $prop) {
                if (!in_array($prop, ['User'])) {
                    $this->info[$prop] = $userPhone->get($prop);
                }
            }

            foreach (UserSocial::getProperty() as $prop) {
                if (!in_array($prop, ['User']))
                    $this->info[$prop] = $userSocial->get($prop);
            }

            // $this->css = API::GET("style", null, "username = '$this->username' AND template_id = '$this->themeid'");

            $this->url = UserManagement::URLGenerator($this->username, "share");

            return [
                'success' => true
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }
}
