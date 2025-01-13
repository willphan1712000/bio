<?php

namespace api\style;

use api\APIAbstract;
use business\style\PUT as TemplatePUT;

require_once __DIR__ . "/../../../vendor/autoload.php";

class PUT extends APIAbstract
{
    public function handleRequest($body)
    {
        $props = json_decode(json_encode($body->props), true);
        return (new TemplatePUT($body->username, $props))->execute();
    }
}

echo json_encode((new PUT())->execute());
