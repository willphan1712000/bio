<?php
    namespace business\controllers;
    require_once __DIR__."/../UserManagement.php";
    use business\UserManagement;
    require_once __DIR__."/../../persistence/API.php";
    use persistence\API;
    require_once __DIR__."/../TemplateManagement.php";
    use business\TemplateManagement;
    require_once __DIR__."/../../../core.php";
    use config\SystemConfig;

    // This business operation is used to handle template controller logic
    class Template {
        private $username;
        private bool $isSignedIn;
        private $purchased;
        private $chosenTemplate;
        private $imgPath;
        private $total;

        function __construct($username) {
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

        private function signedIn() {
            if($this->username !== NULL) {
                SESSION_START();
                $this->isSignedIn = UserManagement::isSignedIn($_SESSION, $username);
                // if signed in, get avatar image
                if($this->isSignedIn) {
                    $ava = API::GET("info", "image", "username = '$username'");
                    if($ava) {
                        $imgPath = "/user/".$username."/".$ava."?v=".time();
                    }
                } else {
                    header("Location: /@signin?template=true");
                }
            }
        }

        private function purchase() {
            if($this->isSignedIn) {
                $purchased = API::GET("purchase", "template_id", "username = '$username'"); // Get all templates purchased
                if(gettype($purchased) === "integer") {
                    $this->purchased = [$purchased];
                }
                $this->chosenTemplate = API::GET("template", "themeid", "username = '$username'"); // Get chosen template
            }
        }

        public function getData() {
            return [
                'isSignedIn' => $this->isSignedIn,
                'purchased' => $this->purchased,
                'chosenTemplate' => $this->chosenTemplate,
                'imgPath' => $this->imgPath,
                'total' => $this->total
            ];
        }
    }

    function template($username) {
        return new Template($username);
    }