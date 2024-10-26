<?php
namespace business\api\user;

require_once __DIR__."/../IAPI.php";
use business\api\IAPI;
require_once __DIR__."/delete/DeleteHandler.php";
use business\api\user\DeleteHandler;
require_once __DIR__."/delete/IsUserExist.php";
use business\api\user\IsUserExist;
require_once __DIR__."/delete/DeleteFolder.php";
use business\api\user\DeleteFolder;
require_once __DIR__."/delete/DeleteData.php";
use business\api\user\DeleteData;

class DELETE implements IAPI {
    private ?string $username;

    function __construct(?string $username) {
        $this->username = $username;
    }

    private function deleteUser() {
        // Check if the user exists, then delete user folder, then delete data in database
        $deleteHandler = new IsUserExist(new DeleteFolder(new DeleteData(null)));
        $process = $deleteHandler->handle($this->username); // If process is successful
        return $process;
    }

    public function execute() {
        return $this->deleteUser();
    }
}