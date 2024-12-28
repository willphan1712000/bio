<?php

namespace api\purchase;

use api\APIAbstract;
use business\purchase\GET as TemplateGET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class GET extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new TemplateGET($body->username))->execute();
    }
}

echo json_encode((new GET())->execute());
