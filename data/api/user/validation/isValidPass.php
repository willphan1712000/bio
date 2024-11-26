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
        return (new Password(null))->doHandle(new Input(null, null, $body->password)) ? [
            'success' => true
        ] : [
            'success' => false,
            'error' => 'Password is not valid'
        ];
    }
}

echo json_encode((new IsPassValid())->execute());
