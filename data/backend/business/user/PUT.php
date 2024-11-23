<?php
namespace business\user;

require_once __DIR__."/../IAPI.php";
use business\IAPI;
use business\info\Info;
use persistence\Entity\User;
use persistence\EntityManager;

class PUT implements IAPI {
    private ?string $username;
    private string $password;

    function __construct(?string $username, $password) {
        $this->username = $username;
        $this->password = $password;
    }

    // When user wants to edit password
    private function updateUser() {
        try {
            $entityManager = EntityManager::getEntityManager();
            $user = $entityManager->find(User::class, $this->username);
            $user->setPassword($this->password);
            $entityManager->flush();

            return true;
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute() {
        return $this->updateUser();
    }
}