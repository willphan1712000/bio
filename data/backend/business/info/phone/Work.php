<?php
namespace business\info\phone;

use business\info\InfoHandler;
use business\info\Info;
use business\info\Operation;
use business\info\phone\Phone;

class Work extends InfoHandler implements Phone {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function validate(?Operation $operation, Info $info): bool {
        if($operation === null) {
            return true;
        }
        return $operation->validate($info["work"]);
    }

    public function format(?Operation $operation, Info $info): string {
        if($operation === null) {
            return $info["work"];
        }
        return $operation->format($info["work"]);
    }

    public function doHandle(Info $info): bool {
        return $this->validate(new Validate(), $info);
    }
}