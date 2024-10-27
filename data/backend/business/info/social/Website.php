<?php
namespace business\info\social;

require_once __DIR__ ."/../../../../../vendor/autoload.php";
use business\info\InfoHandler;
use business\info\Info;
use business\info\Operation;
use business\info\social\Social;
use business\info\social\operation\Validate;

class Website extends InfoHandler implements Social {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function validate(?Operation $operation, $info): bool {
        if($operation === null) {
            return true;
        }
        return $operation->validate($info);
    }

    public function format(?Operation $operation, $info): string {
        if($operation === null) {
            return $info;
        }
        return $operation->format($info);
    }

    public function doHandle(Info $info): bool {
        $infoArray = $info->getInfo();
        $operation = new Validate();
        $infoArray["Website"] = $this->format($operation, $infoArray["Website"]);
        $info->setInfo($infoArray);
        return $this->validate($operation, $info);
    }
}