<?php

namespace business\user\template;

use business\IAPI;
use persistence\Database;
use persistence\Entity\User;

class PUT implements IAPI
{
    private ?string $username;
    private int $template_id;

    function __construct(?string $username, int $template_id)
    {
        $this->username = $username;
        $this->template_id = $template_id;
    }

    private function updateUser()
    {
        try {
            return [
                'success' => Database::PUT(User::class, 'defaultTemplate', $this->template_id, [
                    'username' => $this->username
                ])
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
        return $this->updateUser();
    }
}
