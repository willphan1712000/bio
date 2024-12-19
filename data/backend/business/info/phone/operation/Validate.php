<?php

namespace business\info\phone\operation;

require_once __DIR__ . "/../../../../../../vendor/autoload.php";

use business\info\Operation;

class Validate implements Operation
{
    public function validate($info): bool
    {
        if (empty($info)) {
            return true;
        }
        if (!preg_match('/^\d{10}$/', $info)) {
            throw new \Exception("Mobile or Work number is not valid");
        }
        return true;
    }

    public function format($info): string
    {
        return $info;
    }
}
