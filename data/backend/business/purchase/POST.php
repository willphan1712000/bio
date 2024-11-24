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
            $entityManager = EntityManager::getEntityManager();

            /** @var User|NULL */
            $user = $entityManager->find(User::class, $this->username);

            $out = [];

            foreach ($user->getTemplate() as $template) {
                array_push($out, $template->get('template_id'));
            }

            return $out;
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