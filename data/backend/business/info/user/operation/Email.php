<?php

namespace business\info\user\operation;

require_once __DIR__ . "/../../../../../../vendor/autoload.php";

use business\info\Operation;

class Email implements Operation
{
    public function validate($info): bool
    {
        if (empty($info)) {
            return true;
        }
        if (!filter_var($info, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception("Email is not valid");
        }
        return true;
    }

    public function format($info): string
    {
        return $info;
    }
}
