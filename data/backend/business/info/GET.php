<?php

namespace business\info;

use business\IAPI;
use persistence\Entity\UserInfo;
use persistence\Entity\UserPhone;
use persistence\Entity\UserSocial;
use persistence\EntityManager;

class GET implements IAPI {
    private string $username;

    public function __construct(string $username)
    {
        $this->username = $username;
    }

    private function get() {
        try {
            $entityManager = EntityManager::getEntityManager();

            $userInfo = $entityManager->find(UserInfo::class, $this->username);
            $userPhone = $entityManager->find(UserPhone::class, $this->username);
            $userSocial = $entityManager->find(UserSocial::class, $this->username);

            $infoArr = []; // create an empty array to hold every user information

            // put each peace of userInfo to the array
            foreach(UserInfo::getProperty() as $property) {
                if(!in_array($property, ['User', 'username'])) {
                    $infoArr[$property] = $userInfo->get($property);
                }
            }
            // put each peace of userPhone to the array
            foreach(UserPhone::getProperty() as $property) {
                if(!in_array($property, ['User', 'username'])) {
                    $infoArr[$property] = $userPhone->get($property);
                }
            }
            // put each peace of userSocial to the array
            foreach(UserSocial::getProperty() as $property) {
                if(!in_array($property, ['User', 'username'])) {
                    $infoArr[$property] = $userSocial->get($property);
                }
            }

            return new Info($infoArr);
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute()
    {
        return $this->get();
    }
}