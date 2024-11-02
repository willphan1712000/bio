<?php
namespace business\info\social\operation;

require_once __DIR__ ."/../../../../../../vendor/autoload.php";
use business\info\Operation;

class Zalo implements Operation {
    public function validate($info) : bool {
        return preg_match('/^(\d{10}|)$/', $info);
        
    }

    public function format($info) : string {
        return "https://zalo.me/".$info;
    }
}