<?php

namespace api\user\validation;

require_once __DIR__ . "/../../../../vendor/autoload.php";

use api\APIAbstract;
use business\user\signup\Input;
use business\user\signup\Password;

class IsPassValid extends APIAbstract
{
    public function handleRequest($body)
    {
        try {
            if ((new Password(null))->doHandle(new Input(null, null, $body->password))) {
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

echo json_encode((new IsPassValid())->execute());
