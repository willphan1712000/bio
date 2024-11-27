<?php

namespace business\info\social\operation;

require_once __DIR__ . "/../../../../../../vendor/autoload.php";

use business\info\Operation;

class Validate implements Operation
{
    public function validate($info): bool
    {
        if (empty($info)) {
            return true;
        }
        if (!preg_match('/^(https:\/\/.*)?$/', $info)) {
            throw new \Exception("Some of website urls are not valid");
        }
        return true;
    }

    public function format($info): string
    {
        return $info;
    }
}
