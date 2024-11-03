<?php
namespace business\info\social;

require_once __DIR__ ."/../../../../../vendor/autoload.php";
use business\info\Info;
use business\info\InfoHandler;
use business\info\social\Social;
use business\info\OperationFactory;
use business\info\OPERATIONNAME;

class X extends InfoHandler implements Social {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        $operation = $operationFactory->getOperation(OPERATIONNAME::SOCIALVALIDATE->value);
        if($operation->validate($info->getInfo('X'))) {
            $info->setInfo('X', $operation->format($info->getInfo('X')));
            return true;
        }
        return false;
    }
}