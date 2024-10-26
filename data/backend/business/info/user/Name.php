<?php
namespace business\info\user;

use business\info\InfoElement;
use business\info\InfoHandler;
use business\info\Info;
use business\info\Operation;

class Name extends InfoHandler implements InfoElement {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function validate(?Operation $operation, Info $info): bool {
        if ($operation === null) {
            return true;
        }
        return $operation->validate($info["name"]);
    }

    public function format(?Operation $operation, Info $info): string {
        if ($operation === null) {
            return $info["name"];
        }
        return $operation->format($info["name"]);
    }

    public function doHandle(Info $info): bool {
        return $this->validate(null, $info);
    }
}