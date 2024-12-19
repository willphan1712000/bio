<?php

namespace business\info\phone;

require_once __DIR__ . "/../../../../../vendor/autoload.php";

use business\info\Info;
use business\info\InfoHandler;
use business\info\phone\Phone;
use business\info\OperationFactory;
use business\info\OPERATIONNAME;

class Work extends InfoHandler implements Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool
    {
        $operation = $operationFactory->getOperation(OPERATIONNAME::PHONEVALIDATE->value);
        if ($operation->validate($info->getInfo('Work'))) {
            $info->setInfo('Work', $info->getInfo('Work'));
            return true;
        }
        return false;
    }
}
