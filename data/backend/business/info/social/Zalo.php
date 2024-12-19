<?php

namespace business\info\social;

require_once __DIR__ . "/../../../../../vendor/autoload.php";

use business\info\Info;
use business\info\InfoHandler;
use business\info\social\Social;
use business\info\OperationFactory;
use business\info\OPERATIONNAME;

class Zalo extends InfoHandler implements Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool
    {
        $operation = $operationFactory->getOperation(OPERATIONNAME::ZALO->value);
        if ($operation->validate($info->getInfo('Zalo'))) {
            $info->setInfo('Zalo', $info->getInfo('Zalo'));
            return true;
        }
        return false;
    }
}
