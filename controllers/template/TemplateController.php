<?php

namespace controllers\template;

use config\SystemConfig;
use persistence\Database;
use persistence\Entity\User;
use persistence\Entity\UserInfo;
use business\user\UserManagement;
use controllers\admin\AdminController;
use business\template\TemplateManagement;

// This business operation is used to handle template controller logic
class TemplateController extends AdminController
{
    protected ?string $username;
    protected $purchased;
    protected $chosenTemplate;
    protected $imgPath;
    protected $total;
    protected $g;

    function __construct()
    {
        $this->g = SystemConfig::globalVariables();
        $this->username = SystemConfig::URLExtraction(queryStr: "username");
        $this->isSignedIn = false;
        $this->purchased = [];
        $this->chosenTemplate = null;
        $this->imgPath = $this->g['img']['unknown'];
        $this->total = TemplateManagement::getTotal();

        $this->execute();
    }

    // Check if user is signed in. If so, get user avatar. Otherwise, redirect user to sign in page
    protected function signedIn()
    {
        if ($this->username !== NULL) {
            $this->isSignedIn = UserManagement::isSignedIn($_SESSION, $this->username);
            // if signed in, get avatar image
            if ($this->isSignedIn) {
                $ava = Database::GET(UserInfo::class, "image", ['username' => $this->username]);
                if ($ava) {
                    $this->imgPath = "/user/" . $this->username . "/" . $ava . "?v=" . time();
                }
            } else {
                header("Location: /@signin?template=true");
            }
        }
    }

    // get all purchased templates and default template
    protected function purchase()
    {
        if ($this->isSignedIn) {
            $purchases = Database::SQL("select template_id from Style where username ='$this->username'"); // Get all templates purchased
            foreach ($purchases as $purchase) {
                $this->purchased[] = $purchase['template_id'];
            }
            $this->chosenTemplate = Database::GET(User::class, 'defaultTemplate', ['username' => $this->username]); // Get chosen template
        }
    }

    public function getData()
    {
        return [
            'username' => $this->username,
            'g' => $this->g,
            'isSignedIn' => $this->isSignedIn,
            'purchased' => $this->purchased,
            'chosenTemplate' => $this->chosenTemplate,
            'imgPath' => $this->imgPath,
            'total' => $this->total
        ];
    }

    public function execute()
    {
        $this->signedIn();
        $this->purchase();
        $this->restoreProcess();
    }
}
