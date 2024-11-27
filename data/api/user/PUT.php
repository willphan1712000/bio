<?php

namespace api\user;

use api\APIAbstract;
use business\user\PUT as userPUT;

require_once __DIR__ . "/../../../vendor/autoload.php";

class PUT extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new userPUT($body->username, $body->password))->execute();
    }
}

echo json_encode((new PUT())->execute());
