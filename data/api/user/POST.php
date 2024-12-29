<?php

namespace api\user;

use api\APISecret;
use business\user\POST as userPOST;

require_once __DIR__ . "/../../../vendor/autoload.php";

class POST extends APISecret
{
    public function handleRequest($body)
    {
        return (new userPOST($body->username, $body->email, $body->password))->execute();
    }
}

echo json_encode((new POST())->execute());
