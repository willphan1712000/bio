<?php

namespace api\user\validation;

use api\APISecret;
use business\user\signup\CheckUsername;
use business\user\signup\Input;

require_once __DIR__ . "/../../../../vendor/autoload.php";

class Username extends APISecret
{
    public function handleRequest($body)
    {
        try {
            if ((new CheckUsername(null))->doHandle(new Input($body->username, null, null))) {
                return [
                    'success' => true
                ];
            }
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }
}

echo json_encode((new Username())->execute());
