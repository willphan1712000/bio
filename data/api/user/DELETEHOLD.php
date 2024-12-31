<?php

namespace api\user;

use api\APIAbstract;
use business\user\DELETEHOLD as UserDELETEHOLD;

require_once __DIR__ . "/../../../vendor/autoload.php";

class DELETEHOLD extends APIAbstract
{
    public function handleRequest($body)
    {
        return (new UserDELETEHOLD($body->username))->execute();
    }
}

echo json_encode((new DELETEHOLD())->execute());
