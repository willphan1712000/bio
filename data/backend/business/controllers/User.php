<?php
namespace business\controllers;
require_once __DIR__."/../../../core.php";
use config\SystemConfig;
require_once __DIR__."/../TemplateManagement.php";
use business\TemplateManagement;
require_once __DIR__."/../UserManagement.php";
use business\UserManagement;
require_once __DIR__."/../../persistence/API.php";
use persistence\API;

class User {
    private string $username;
    private $themeid;
    private $info;
    private $css;
    private $imgPath;
    private $url;

    function __construct() {
        $this->username = SystemConfig::URLExtraction();

        $this->themeid = TemplateManagement::shareTemplate($this->username, (int) SystemConfig::URLExtraction("tem"));

        $this->info = API::GET("info", null, "username='$this->username'");

        $this->css = API::GET("style", null, "username = '$this->username' AND template_id = '$this->themeid'");

        $g = SystemConfig::globalVariables();
        $infoArray = $this->info;
        $this->imgPath = !empty($infoArray['image']) ? "/user/".$this->username."/".$infoArray['image']."?v=".time() : $g['img']['unknown'];

        $this->url = UserManagement::URLGenerator($this->username, "share");
    }

    public function getUsername() {
        return $this->username;
    }

    public function getInfo() {
        return $this->info;
    }

    public function getImgPath() {
        return $this->imgPath;
    }

    public function getThemeid() {
        return $this->themeid;
    }
    public function getCSS() {
        return $this->css;
    }
    public function getURL() {
        return $this->url;
    }
    public function themeRedirect() {
        if($this->themeid == 0) {
            require __DIR__."/../../../../controllers/default/user.php";
            die();
        }
    }
}

function user() {
    return new User();
}