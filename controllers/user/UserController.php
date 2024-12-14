<?php

namespace controllers\user;

use config\SystemConfig;
use persistence\Database;
use controllers\Controller;
use persistence\Entity\Style;
use persistence\Entity\UserInfo;
use business\user\UserManagement;
use persistence\Entity\UserPhone;
use persistence\Entity\UserSocial;
use business\template\TemplateManagement;

class UserController extends Controller
{
    protected string $username;
    protected $themeid;
    protected $info;
    protected $css;
    protected $url;
    protected $status;
    protected $socialIconArr;
    protected $g;

    private function themeRedirect()
    {
        if ($this->themeid === 0) {
            require __DIR__ . "/../../dist/userDefault.php";
            die();
        }
        require __DIR__ . "/../../dist/userTemplate.php";
        die();
    }

    protected function getPreData()
    {
        $this->g = SystemConfig::globalVariables(); // get global variables
        $this->username = SystemConfig::URLExtraction(); // get username
        $this->themeid = TemplateManagement::shareTemplate($this->username, (int) SystemConfig::URLExtraction(queryStr: "tem")); // get template id
    }

    protected function getPostData()
    {
        $this->socialIconArr = SystemConfig::socialIconArr(); // get icon array
        $this->url = UserManagement::URLGenerator($this->username, "share"); // get url based on username

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
                $this->info[$prop] = $userInfo->get($prop) === NULL ? $this->g['img']['unknown'] : $this->g['absolute_user_folder'] . $this->username . "/" . $userInfo->get($prop) . "?v=" . time();
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

        $this->css = [];
        if ($this->themeid !== 0) {
            /** @var Style|NULL */
            $style = Database::GET(Style::class, null, ['username' => $this->username, 'template_id' => $this->themeid]);

            foreach (Style::getProperty() as $prop) {
                if (!in_array($prop, ['Purchase', 'StyleDefault'])) {
                    $this->css[$prop] = $style->get($prop);
                }
            }
        }
    }

    public function redirect()
    {
        $this->getPreData();
        $this->themeRedirect(); // if template id is 0, redirect to default template. Otherwise, proceed the next
    }

    public function execute()
    {
        try {
            $this->getPreData(); // get pre data to check some conditions before proceeding to anything

            $this->getPostData(); // get user information and style if themeid is not 0

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
