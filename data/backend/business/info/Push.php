<?php
namespace business\info;

use business\info\Info;
use business\info\InfoHandler;
use persistence\Database;
use persistence\Entity\UserInfo;
use persistence\Entity\UserPhone;
use persistence\Entity\UserSocial;

class Push extends InfoHandler {
    function __construct(?InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        try {
            // Push to UserInfo table
            foreach(UserInfo::getProperty() as $property) {
                if(!in_array($property, ['User', 'username'])) {
                    Database::PUT(UserInfo::class, $property, $info->getInfo($property), ['username' => $info->getInfo('username')]);
                }
            }

            // Push to UserPhone table
            foreach(UserPhone::getProperty() as $property) {
                if(!in_array($property, ['User', 'username'])) {
                    Database::PUT(UserPhone::class, $property, $info->getInfo($property), ['username' => $info->getInfo('username')]);
                }
            }

            // Push to UserSocial table
            foreach(UserSocial::getProperty() as $property) {
                if(!in_array($property, ['User', 'username'])) {
                    Database::PUT(UserSocial::class, $property, $info->getInfo($property), ['username' => $info->getInfo('username')]);
                }
            }
            return true;
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }
}