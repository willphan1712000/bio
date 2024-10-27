<?php
namespace business\info\user\operation;

require_once __DIR__ ."/../../../../../../vendor/autoload.php";
use business\info\Operation;

class Address implements Operation {
    public function validate($info) : bool {
        return true;
    }

    public function format($info) : string {
        return "https://google.com/maps?q=".$info;
    }
}