<?php

namespace api\user\template;

use api\APIAbstract;
use business\user\template\PUT as TemplatePUT;

require_once __DIR__ . "/../../../../vendor/autoload.php";

class PUT extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new TemplatePUT($body->username, $body->template_id))->execute();
    }
}

echo json_encode((new PUT())->execute());
