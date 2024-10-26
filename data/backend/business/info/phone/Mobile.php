<?php
namespace business\info\phone;

require_once __DIR__."../InfoHandler.php";
use business\info\InfoHandler;
require_once __DIR__."../Info.php";
use business\info\Info;
require_once __DIR__."/Phone.php";
use business\info\phone\Phone;

class Mobile extends InfoHandler implements Phone {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function validate($info): bool {
        return true;
    }

    public function format($info): string {
        return $info;
    }

    public function doHandle(Info $input): bool {
        return true;
    }
}