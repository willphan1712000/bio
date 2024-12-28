<?php

namespace api\user\validation;

require_once __DIR__ . "/../../../../vendor/autoload.php";

use api\APIAbstract;
use business\user\signup\CheckEmail;
use business\user\signup\Input;

class Email extends APIAbstract
{
    public function handleRequest($body)
    {
        try {
            if ((new CheckEmail(null))->doHandle(new Input(null, $body->email, null))) {
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

echo json_encode((new Email())->execute());
