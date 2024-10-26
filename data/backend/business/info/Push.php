<?php
namespace business\info;

use business\info\Info;
use business\info\InfoHandler;

class Discription extends InfoHandler {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $input): bool {
        return true;
    }
}