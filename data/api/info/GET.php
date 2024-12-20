<?php

namespace api\info;

use api\APIAbstract;
use business\info\GET as infoGET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class GET extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new infoGET($body->username))->execute();
    }
}

echo json_encode((new GET())->execute());
