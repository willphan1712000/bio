<?php
namespace business\info;

require_once __DIR__ ."/../../../../vendor/autoload.php";
use business\info\Info;
use persistence\Entity\User;
use business\info\InfoHandler;
use persistence\EntityManager;
use persistence\Entity\UserInfo;
use persistence\Entity\UserPhone;
use persistence\Entity\UserSocial;

class Push extends InfoHandler {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        $entityManager = EntityManager::getEntityManager();

        $user = $entityManager->find(User::class, $info->getInfo('username'));
        $userInfo = $entityManager->find(UserInfo::class, $info->getInfo('username'));
        $userPhone = $entityManager->find(UserPhone::class, $info->getInfo('username'));
        $userSocial = $entityManager->find(UserSocial::class, $info->getInfo('username'));

        $userInfo->setName($info->getInfo('name'));
        $userInfo->setImage($info->getInfo('image'));
        $userInfo->setOrganization($info->getInfo('organization'));
        $userInfo->setDescription($info->getInfo('description'));
        $userInfo->setEmail($info->getInfo('Email'));
        $userInfo->setAddress($info->getInfo('Address'));

        $userPhone->setMobile($info->getInfo('Mobile'));
        $userPhone->setWork($info->getInfo('Work'));

        $userSocial->setBooking($info->getInfo('Booking'));
        $userSocial->setFacebook($info->getInfo('Facebook'));
        $userSocial->setHotSale($info->getInfo('HotSale'));
        $userSocial->setInstagram($info->getInfo('Instagram'));
        $userSocial->setLinkedin($info->getInfo('Linkedin'));
        $userSocial->setMessenger($info->getInfo('Messenger'));
        $userSocial->setOrderOnline($info->getInfo('OrderOnline'));
        $userSocial->setPinterest($info->getInfo('Pinterest'));
        $userSocial->setThreads($info->getInfo('Threads'));
        $userSocial->setTiktok($info->getInfo('Tiktok'));
        $userSocial->setWebsite($info->getInfo('Website'));
        $userSocial->setX($info->getInfo('X'));
        $userSocial->setYoutube($info->getInfo('Youtube'));
        $userSocial->setZalo($info->getInfo('Zalo'));

        $user->setUserInfo($userInfo);
        $user->setUserPhone($userPhone);
        $user->setUserSocial($userSocial);

        $entityManager->persist($user);
        return true;
    }
}