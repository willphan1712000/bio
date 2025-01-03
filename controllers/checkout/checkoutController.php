<?php

namespace controllers\checkout;

use config\SystemConfig;
use controllers\Controller;
use business\user\UserManagement;
use business\template\TemplateManagement;

class checkoutController extends Controller
{

    protected ?string $username;
    protected ?string $itemid;
    protected array $g;

    function __construct()
    {
        $this->username = SystemConfig::URLExtraction(queryStr: "username");
        $this->itemid = SystemConfig::URLExtraction(queryStr: "itemid");
        $this->g = SystemConfig::globalVariables();
    }
    public function execute()
    {

        if ($this->username === null) {
            $this->redirect();
        }

        $isSignedIn = UserManagement::isSignedIn($_SESSION, $this->username);

        if (!$isSignedIn) {
            $this->redirect();
        }

        // if (!TemplateManagement::isAbleToPurchase($isSignedIn, $username, $itemid)) {
        //     header("Location: /@template?username=" . $username);
        // }
    }

    private function redirect()
    {
        header("Location: /@template");
    }
}
