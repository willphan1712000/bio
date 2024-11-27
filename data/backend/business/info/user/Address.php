<?php
namespace business\info\user;

require_once __DIR__ ."/../../../../../vendor/autoload.php";
use business\info\Info;
use business\info\InfoElement;
use business\info\InfoHandler;
use business\info\OperationFactory;
use business\info\OPERATIONNAME;

class Address extends InfoHandler implements InfoElement {
    function __construct(?InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        $operation = $operationFactory->getOperation(OPERATIONNAME::ADDRESS->value);
        if($operation->validate($info->getInfo('Address'))) {
            $info->setInfo('Address', $operation->format($info->getInfo('Address')));
            return true;
        }
        return false;
    }
}