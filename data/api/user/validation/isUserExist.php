<?php

namespace api\user\validation;

use api\APIAbstract;
use business\UserManagement;

require_once __DIR__ . "/../../../../vendor/autoload.php";

class IsUserValid extends APIAbstract
{
    public function handleRequest($body)
    {
        return UserManagement::isUserExist($body->username) ? [
            'success' => true,
            'error' => 'User already exists'
        ] : [
            'success' => false,
        ];
    }
}

echo json_encode((new IsUserValid())->execute());
