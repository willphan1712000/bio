<?php

namespace business\controllers;

require_once __DIR__ . "/../../../../vendor/autoload.php";

use business\UserManagement;
use persistence\API;
use business\TemplateManagement;

use config\SystemConfig;

// This business operation is used to handle template controller logic
class Template implements Controller
{
    private $username;
    private bool $isSignedIn;
    private $purchased;
    private $chosenTemplate;
    private $imgPath;
    private $total;

    function __construct($username)
    {
        $g = SystemConfig::globalVariables();
        $this->username = $username;
        $this->isSignedIn = false;
        $this->purchased = [];
        $this->chosenTemplate = null;
        $this->imgPath = $g['img']['unknown'];
        $this->total = TemplateManagement::getTotal();

        $this->signedIn();
        $this->purchase();
    }

    private function signedIn()
    {
        if ($this->username !== NULL) {
            SESSION_START();
            $this->isSignedIn = UserManagement::isSignedIn($_SESSION, $this->username);
            // if signed in, get avatar image
            if ($this->isSignedIn) {
                $ava = API::GET("info", "image", "username = '$this->username'");
                if ($ava) {
                    $imgPath = "/user/" . $this->username . "/" . $ava . "?v=" . time();
                }
            } else {
                header("Location: /@signin?template=true");
            }
        }
    }

    private function purchase()
    {
        if ($this->isSignedIn) {
            $purchased = API::GET("purchase", "template_id", "username = '$this->username'"); // Get all templates purchased
            if (gettype($purchased) === "integer") {
                $this->purchased = [$purchased];
            }
            $this->chosenTemplate = API::GET("template", "themeid", "username = '$this->username'"); // Get chosen template
        }
    }

    public function getData()
    {
        return [
            'isSignedIn' => $this->isSignedIn,
            'purchased' => $this->purchased,
            'chosenTemplate' => $this->chosenTemplate,
            'imgPath' => $this->imgPath,
            'total' => $this->total
        ];
    }

    public function execute() {}
}
