<?php

namespace api\purchase;

use api\APIAbstract;
use business\purchase\POST as TemplatePOST;

require_once __DIR__ . "/../../../vendor/autoload.php";

class POST extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new TemplatePOST($body->username, $body->templates))->execute();
    }
}

echo json_encode((new POST())->execute());
