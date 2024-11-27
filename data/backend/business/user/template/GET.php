<?php

namespace business\user\template;

use business\IAPI;
use persistence\Database;
use persistence\Entity\User;

class GET implements IAPI
{
    private string $username;

    function __construct(string $username)
    {
        $this->username = $username;
    }

    private function updateTemplate()
    {
        try {
            return [
                'success' => true,
                'data' => Database::GET(User::class, 'defaultTemplate', ['username' => $this->username])
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
        return $this->updateTemplate();
    }
}
