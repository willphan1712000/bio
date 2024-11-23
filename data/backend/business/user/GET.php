<?php
namespace business\user;

use business\IAPI;
use business\info\Info;
use persistence\Entity\User;
use persistence\EntityManager;

class GET implements IAPI {
    private ?string $username;

    function __construct(?string $username) {
        $this->username = $username;
    }

    private function getUser() {
        try {
            $entityManager = EntityManager::getEntityManager();
    
            $user = $entityManager->find(User::class, $this->username);
    
            $infoArr = [];
            
            foreach(User::getProperty() as $property) {
                if(!in_array($property, ['UserInfo', 'UserPhone', 'UserSocial', 'Template', 'Purchase'])) {
                    $infoArr[$property] = $user->get($property);
                }
            }
    
            return new Info($infoArr);
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute() {
        return $this->getUser();
    }
}