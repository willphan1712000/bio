<?php

namespace business\user;

use business\IAPI;
use persistence\Database;
use persistence\Entity\User;

class DELETEHOLD implements IAPI
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
            $r = Database::PUT(User::class, 'deleteToken', time(), ['username' => $this->username]);
            return [
                'success' => $r
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
