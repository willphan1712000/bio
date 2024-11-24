<?php
namespace business\purchase;

use business\IAPI;
use persistence\Entity\User;
use persistence\EntityManager;

class POST implements IAPI {
    private string $username;

    function __construct(string $username)
    {
        $this->username = $username; 
    }
    
    private function getLikedTemplate() {
        try {
            
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute()
    {
        return $this->getLikedTemplate();
    }
}