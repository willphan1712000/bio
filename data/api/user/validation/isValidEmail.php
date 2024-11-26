<?php

namespace api\user\validation;

require_once __DIR__ . "/../../../../vendor/autoload.php";

use api\APIAbstract;
use business\user\signup\CheckEmail;
use business\user\signup\Input;

class IsValidEmail extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new CheckEmail(null))->doHandle(new Input(null, $body->email, null)) ? [
            'success' => true
        ] : [
            'success' => false,
            'error' => 'Email is not valid'
        ];
    }
}

echo json_encode((new IsValidEmail())->execute());
