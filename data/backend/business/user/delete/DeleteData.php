<?php
namespace business\user\delete;

use business\user\delete\DeleteHandler;
use persistence\Entity\Purchase;
use persistence\Entity\User;
use persistence\EntityManager;

class DeleteData extends DeleteHandler {
    function __construct(?DeleteHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(string $username) : bool {
        try {
            $entityManager = EntityManager::getEntityManager();

            $user = $entityManager->find(User::class, $username);
            $purchase = $entityManager->find(Purchase::class, $username);

            $entityManager->remove($user);
            $entityManager->flush();

            return true;
        } catch(\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }
}