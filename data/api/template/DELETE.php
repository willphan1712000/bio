<?php

namespace api\template;

use api\APIAbstract;
use business\template\DELETE as TemplateDELETE;

require_once __DIR__ . "/../../../vendor/autoload.php";

class DELETE extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new TemplateDELETE($body->username, $body->template_id))->execute();
    }
}

echo json_encode((new DELETE())->execute());
