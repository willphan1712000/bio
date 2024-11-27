<?php

namespace api\info;

use api\APIAbstract;
use business\info\Info;
use business\info\PUT as InfoPUT;

require_once __DIR__ . "/../../../vendor/autoload.php";

class PUT extends APIAbstract
{
    public function handleRequest($body)
    {
        $infoArr = json_decode(json_encode($body), true);
        return (new InfoPUT(new Info($infoArr)))->execute();
    }
}

echo json_encode((new PUT())->execute());
