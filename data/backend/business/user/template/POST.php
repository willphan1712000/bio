<?php
namespace business\user\template;

use business\IAPI;
use persistence\Entity\User;
use persistence\EntityManager;

class PUT implements IAPI {
    private string $username;
    private int $template;

    function __construct(string $username, int $template)
    {
        $this->username = $username;
        $this->template = $template;    
    }
    
    private function updateTemplate() {
        try {
            $entityManager = EntityManager::getEntityManager();
            $user = $entityManager->find(User::class, $this->username);
            $user->set('defaultTemplate', $this->template);
            $entityManager->flush();

            return true;
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