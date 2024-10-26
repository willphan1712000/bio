<?php
namespace business\api\user;

require_once __DIR__."/../IAPI.php";
use business\api\IAPI;
require_once __DIR__."/../../../persistence/API.php";
use persistence\API;

class GET implements IAPI {
    private ?string $username;

    function __construct(?string $username = null) {
        $this->username = $username;
    }

    private function getUser() {
        if($this->username == null) {
            return API::GET("user");
        }
        return API::GET("user", null, "username='$this->username'");
    }

    public function execute() {
        return $this->getUser();
    }
}