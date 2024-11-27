<?php
namespace business\info\user;

require_once __DIR__ ."/../../../../../vendor/autoload.php";
use business\info\Info;
use business\info\InfoElement;
use business\info\InfoHandler;
use business\info\OperationFactory;

class Description extends InfoHandler implements InfoElement {
    function __construct(?InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        return true;
    }
}