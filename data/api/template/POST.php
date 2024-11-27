<?php

namespace api\template;

use api\APIAbstract;
use business\template\POST as TemplatePOST;

require_once __DIR__ . "/../../../vendor/autoload.php";

class POST extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new TemplatePOST($body->username, $body->template_id))->execute();
    }
}

echo json_encode((new POST())->execute());
