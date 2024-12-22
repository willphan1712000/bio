<?php

namespace controllers\user;

use business\info\userGET;
use business\style\GET;
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

        $infoProcess = (new userGET($this->username))->execute();
        $this->info = $infoProcess['success'] ? $infoProcess['data'] : null; // get info map

        $this->css = (new GET($this->username, $this->themeid)); // get template style array
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
