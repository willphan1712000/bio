<?php
namespace business\info\user\operation;

require_once __DIR__ ."/../../../../../../vendor/autoload.php";
use business\info\Operation;

class Email implements Operation {
    public function validate($info) : bool {
        return filter_var($info, FILTER_VALIDATE_EMAIL);
    }

    public function format($info) : string {
        return $info;
    }
}