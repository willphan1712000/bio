<?php

namespace business\controllers;

use config\SystemConfig;
use persistence\Database;
use persistence\Entity\Style;
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
    private bool $isDefault;
    private $socialIconArr;

    function __construct(bool $isDefault = false)
    {
        $this->isDefault = $isDefault;
        $this->socialIconArr = SystemConfig::socialIconArr();
        $this->status = $this->execute();
    }

    public function getSocialIconArr()
    {
        return $this->socialIconArr;
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
    public function themeRedirect(bool $isDefault = false)
    {
        if (!$isDefault) {
            if ($this->themeid === 0) {
                require __DIR__ . "/../../../../controllers/default/user.php";
                die();
            } else {
                $this->css = [];
                /** @var Style|NULL */
                $style = Database::GET(Style::class, null, ['username' => $this->username, 'template_id' => $this->themeid]);

                foreach (Style::getProperty() as $prop) {
                    if (!in_array($prop, ['Purchase', 'StyleDefault'])) {
                        $this->css[$prop] = $style->get($prop);
                    }
                }
            }
        }
    }
    public function execute()
    {
        try {
            $g = SystemConfig::globalVariables();
            $this->username = SystemConfig::URLExtraction(); // get username

            $this->themeid = TemplateManagement::shareTemplate($this->username, (int) SystemConfig::URLExtraction(queryStr: "tem")); // get template id

            $this->themeRedirect($this->isDefault); // if template id is 0, redirect to default template. Otherwise, proceed the next

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
                    $this->info[$prop] = $userInfo->get($prop) === NULL ? $g['img']['unknown'] : "/user/" . $this->username . "/" . $userInfo->get($prop) . "?v=" . time();
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
