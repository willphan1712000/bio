<?php

namespace business\info\social\operation;

require_once __DIR__ . "/../../../../../../vendor/autoload.php";

use business\info\Operation;

class Zalo implements Operation
{
    public function validate($info): bool
    {
        if (empty($info)) {
            return true;
        }
        if (!preg_match('/^(\d{10}|)$/', $info)) {
            throw new \Exception("Zalo phone number is not valid");
        }
        return true;
    }

    public function format($info): string
    {
        return empty($info) ? "" : "https://zalo.me/" . $info;
    }
}
