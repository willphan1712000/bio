<?php
namespace business\info\phone;

use business\info\Operation;

class Validate implements Operation {
    public function validate($info) : bool {
        return preg_match('/^\d{3}-\d{3}-\d{4}$/', $info);
    }

    public function format($info) : string {
        return $info;
    }
}