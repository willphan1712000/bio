<?php

namespace api\user\template;

use api\APIAbstract;
use business\user\template\GET as TemplateGET;

require_once __DIR__ . "/../../../../vendor/autoload.php";

class GET extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new TemplateGET($body->username, $body->template_id))->execute();
    }
}

echo json_encode((new GET())->execute());
