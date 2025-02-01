<?php

namespace api\style;

use api\APIAbstract;
use business\style\RESET as TemplateRESET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class RESET extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new TemplateRESET($body->username))->execute();
    }
}

echo json_encode((new RESET())->execute());
