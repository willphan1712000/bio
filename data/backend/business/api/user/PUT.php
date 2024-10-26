<?php
namespace business\api\user;

require_once __DIR__."/../IAPI.php";
use business\api\IAPI;

class PUT implements IAPI {
    private ?string $username;

    function __construct(?string $username) {
        $this->username = $username;
    }

    // When user wants to edit email and password or forget password
    private function updateUser() {

    }

    public function execute() {

    }
}