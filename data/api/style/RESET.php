<?php

namespace api\style;

use api\APIAbstract;
use business\style\RESET as TemplateRESET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class RESET extends APIAbstract
{
    public function handleRequest($body)
    {
        $props = json_decode(json_encode($body->props), true);
        return (new TemplateRESET($body->username, $props))->execute();
    }
}

echo json_encode((new RESET())->execute());
