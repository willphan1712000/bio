<?php
namespace business\info;

require_once __DIR__ ."/../../../../vendor/autoload.php";
use business\info\Info;
use business\info\InfoHandler;

class Push extends InfoHandler {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $input): bool {
        return true;
    }
}