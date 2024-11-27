<?php

namespace business\user\signup;

use business\user\signup\SignupHandler;
use business\user\signup\Input;
use persistence\Entity\User;
use persistence\Entity\UserInfo;
use persistence\Entity\UserPhone;
use persistence\Entity\UserSocial;
use persistence\EntityManager;

class Push extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        $username = $input->getUsername();
        $password = $input->getPassword();
        $email = $input->getEmail();

        $user = new User();
        $userInfo = new UserInfo();
        $userPhone = new UserPhone();
        $userSocial = new UserSocial();

        $user->setUsername($username);
        $user->setPassword($password);
        $user->setEmail($email);
        $user->set('defaultTemplate', 0);

        $userInfo->setUsername($username);
        $userPhone->setUsername($username);
        $userSocial->setUsername($username);

        $user->setUserInfo($userInfo);
        $user->setUserPhone($userPhone);
        $user->setUserSocial($userSocial);

        $entityManager = EntityManager::getEntityManager();
        $entityManager->persist($user);
        $entityManager->flush();

        return true;
    }
}
