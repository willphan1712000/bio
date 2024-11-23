<?php
namespace business\info\phone\operation;

require_once __DIR__ ."/../../../../../../vendor/autoload.php";
use business\info\Operation;

class Display implements Operation {
    public function validate($info) : bool {
        return preg_match('/^\d{3}-\d{3}-\d{4}$/', $info);
    }

    public function format($info) : string {
        if($info['code'] == '+84') {
            return $info['code']." ".substr($info['number'], 1);
        }

        return $info['code']." ".$info['number'];
    }
}