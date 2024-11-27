<?php

namespace business\user;

use business\IAPI;
use business\user\delete\IsUserExist;
use business\user\delete\DeleteFolder;
use business\user\delete\DeleteData;

class DELETE implements IAPI
{
    private ?string $username;

    function __construct(?string $username)
    {
        $this->username = $username;
    }

    private function deleteUser()
    {
        try {
            // Check if the user exists, then delete user folder, then delete data in database
            $deleteHandler = new IsUserExist(new DeleteFolder(new DeleteData(null)));
            $process = $deleteHandler->handle($this->username); // If process is successful
            return [
                'success' => $process
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function execute()
    {
        return $this->deleteUser();
    }
}
