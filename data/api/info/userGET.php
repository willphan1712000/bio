<?php

namespace api\info;

use api\APIAbstract;
use business\info\userGET as InfoUserGET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class userGET extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new InfoUserGET($body->username))->execute();
    }
}

echo json_encode((new userGET())->execute());
