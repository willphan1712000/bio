<?php

namespace api\user\validation;

use api\APISecret;
use business\user\UserManagement;

require_once __DIR__ . "/../../../../vendor/autoload.php";

class Username extends APISecret
{
    public function handleRequest($body)
    {
        return UserManagement::isUserExist($body->username) ? [
            'success' => false,
            'error' => 'User already exists'
        ] : [
            'success' => true
        ];
    }
}

echo json_encode((new Username())->execute());
