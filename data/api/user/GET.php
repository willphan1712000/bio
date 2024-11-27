<?php

namespace api\user;

use api\APIAbstract;
use business\user\GET as userGET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class GET extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new userGET($body->username))->execute();
    }
}

echo json_encode((new GET())->execute());
