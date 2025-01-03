<?php

namespace business\purchase;

use business\IAPI;
use persistence\Database;

class GET implements IAPI
{
    private string $username;

    function __construct(string $username)
    {
        $this->username = $username;
    }

    private function getPurchase()
    {
        try {
            return Database::SQL("SELECT *FROM Purchase WHERE username = '$this->username'");
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function execute()
    {
        return $this->getPurchase();
    }
}
