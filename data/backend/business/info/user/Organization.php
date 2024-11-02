<?php
namespace business\info\user;

require_once __DIR__ ."/../../../../../vendor/autoload.php";
use business\info\Info;
use business\info\Operation;
use business\info\InfoElement;
use business\info\InfoHandler;

class Organization extends InfoHandler implements InfoElement {
    function __construct(?InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        $infoArray = $info->getInfo();
        $infoArray["organization"] = $this->format(null, $infoArray["organization"]);
        $info->setInfo($infoArray);
        return $this->validate(null, $infoArray["organization"]);
    }
}