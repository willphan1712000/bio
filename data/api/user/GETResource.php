<?php

namespace api\user;

use api\APIAbstract;
use business\user\GETResource as UserGETResource;

require_once __DIR__ . "/../../../vendor/autoload.php";

class GETResource extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new UserGETResource())->execute();
    }
}

echo json_encode((new GETResource())->execute());
