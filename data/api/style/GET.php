<?php

namespace api\style;

use api\APIAbstract;
use business\style\GET as TemplateGET;

require_once __DIR__ . "/../../../vendor/autoload.php";

class GET extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new TemplateGET($body->username, $body->template))->execute();
    }
}

echo json_encode((new GET())->execute());
