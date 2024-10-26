<?php
namespace business\info\user;

require_once __DIR__."../InfoElement.php";
use business\info\InfoElement;
require_once __DIR__."../InfoHandler.php";
use business\info\InfoHandler;
require_once __DIR__."../Info.php";
use business\info\Info;

class Name extends InfoHandler implements InfoElement {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function validate($info): bool {
        return true; // Accept every name unless using AI to detect content
    }

    public function format($info): string {
        return $info;
    }

    public function doHandle(Info $input): bool {
        return true;
    }
}