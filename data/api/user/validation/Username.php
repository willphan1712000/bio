<?php

namespace api\user\validation;

use api\APIAbstract;
use business\UserManagement;

require_once __DIR__ . "/../../../../vendor/autoload.php";

class Username extends APIAbstract
{
    public function handleRequest($body)
    {
        return UserManagement::isUserExist($body->username) ? [
            'success' => false,
            'error' => 'user already exists'
        ] : [
            'success' => true
        ];
    }
}

echo json_encode((new Username())->execute());
