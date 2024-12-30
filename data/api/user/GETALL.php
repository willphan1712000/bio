<?php

namespace api\user;

use api\APIAbstract;
use business\user\GET as userGET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class GETALL extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new userGET($body->username, isset($body->offset) ? $body->offset : 0, $body->limit, isset($body->like) ? $body->like : ''))->execute();
    }
}

echo json_encode((new GETALL())->execute());
