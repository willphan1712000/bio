<?php
namespace business\info\user;

use business\info\Info;
use business\info\Operation;
use business\info\InfoElement;
use business\info\InfoHandler;

class Discription extends InfoHandler implements InfoElement {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function validate(?Operation $operation, Info $info): bool {
        if ($operation === null) {
            return true;
        }
        return $operation->validate($info["description"]);
    }

    public function format(?Operation $operation, Info $info): string {
        if ($operation === null) {
            return $info["description"];
        }
        return $operation->format($info["description"]);
    }

    public function doHandle(Info $info): bool {
        return $this->validate(null, $info);
    }
}