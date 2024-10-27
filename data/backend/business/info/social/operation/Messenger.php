<?php
namespace business\info\social\operation;

require_once __DIR__ ."/../../../../../../vendor/autoload.php";
use business\info\Operation;

class Messenger implements Operation {
    public function validate($info) : bool {
        return true;
        
    }

    public function format($info) : string {
        return "https://m.me/".$info;
    }
}