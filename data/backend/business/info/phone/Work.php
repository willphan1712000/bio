<?php
namespace business\info\phone;

require_once __DIR__ ."/../../../../../vendor/autoload.php";
use business\info\InfoHandler;
use business\info\Info;
use business\info\Operation;
use business\info\phone\Phone;
use business\info\phone\operation\Validate;

class Work extends InfoHandler implements Phone {
    function __construct(?InfoHandler $next) {
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
        $infoArray["Work"] = $this->format($operation, $infoArray["Work"]);
        $info->setInfo($infoArray);
        return $this->validate($operation, $infoArray["Work"]);
    }
}