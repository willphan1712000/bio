<?php
namespace business\info\user;

use business\info\Info;
use business\info\Operation;
use business\info\InfoElement;
use business\info\InfoHandler;

class Organization extends InfoHandler implements InfoElement {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function validate(?Operation $operation, Info $info): bool {
        if ($operation === null) {
            return true;
        }
        return $operation->validate($info["organization"]);
    }

    public function format(?Operation $operation, Info $info): string {
        if ($operation === null) {
            return $info["organization"];
        }
        return $operation->format($info["organization"]);
    }

    public function doHandle(Info $info): bool {
        return $this->validate(null, $info);
    }
}