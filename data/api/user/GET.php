<?php

namespace api\user;

use api\APIAbstract;
use business\user\GET as userGET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class GET extends APIAbstract
{
    public function handleRequest($body)
    {
        $result = (new userGET($body->username))->execute();
        return $result ? [
            'success' => true,
            'data' => $result
        ] : [
            'success' => false,
            'error' => 'User does not exist or failed to fetch users'
        ];
    }
}

echo json_encode((new GET())->execute());
