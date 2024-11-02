<?php
namespace business\info\social\operation;

require_once __DIR__ ."/../../../../../../vendor/autoload.php";
use business\info\Operation;

class Validate implements Operation {
    public function validate($info) : bool {
        return preg_match('/^(https:\/\/.*)?$/', $info);
    }

    public function format($info) : string {
        return $info;
    }
}