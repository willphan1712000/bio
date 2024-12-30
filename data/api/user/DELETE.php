<?php

namespace api\user;

use api\APISecret;
use business\user\DELETE as userDELETE;

require_once __DIR__ . "/../../../vendor/autoload.php";

class DELETE extends APISecret
{
    public function handleRequest($body)
    {
        return (new userDELETE($body->username))->execute();
    }
}

echo json_encode((new DELETE())->execute());
