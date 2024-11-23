<?php
namespace business\user\template;

use business\IAPI;
use persistence\Entity\User;
use persistence\EntityManager;

class GET implements IAPI {
    private string $username;

    function __construct(string $username)
    {
        $this->username = $username; 
    }
    
    private function updateTemplate() {
        try {
            $entityManager = EntityManager::getEntityManager();
            $user = $entityManager->find(User::class, $this->username);

            return $user->get('defaultTemplate');
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute()
    {
        return $this->updateTemplate();
    }
}