<?php

namespace api\user;

use api\APISecret;
use business\user\PUT as userPUT;

require_once __DIR__ . "/../../../vendor/autoload.php";

class PUT extends APISecret
{
    public function handleRequest($body)
    {
        return (new userPUT($body->username, $body->password))->execute();
    }
}

echo json_encode((new PUT())->execute());
