<?php
namespace business\info;

require_once __DIR__."/../../../../vendor/autoload.php";

use business\info\phone\operation\Validate;
use business\info\social\operation\Messenger;
use business\info\social\operation\Validate as OperationValidate;
use business\info\social\operation\Zalo;
use business\info\user\operation\Address;
use business\info\user\operation\Email;

enum OPERATIONNAME {
    case ADDRESS;
    case EMAIL;
    case PHONEVALIDATE;
    case SOCIALVALIDATE;
    case MESSENGER;
    case ZALO;
}

class OperationFactory {
    private array $operations;

    function __construct() {
        $this->operations[OPERATIONNAME::ADDRESS] = new Address();
        $this->operations[OPERATIONNAME::EMAIL] = new Email();
        $this->operations[OPERATIONNAME::PHONEVALIDATE] = new Validate();
        $this->operations[OPERATIONNAME::SOCIALVALIDATE] = new OperationValidate();
        $this->operations[OPERATIONNAME::MESSENGER] = new Messenger();
        $this->operations[OPERATIONNAME::ZALO] = new Zalo();
    }

    public function getOperation(OPERATIONNAME $operationName): Operation {
        return $this->operations[$operationName];
    }
}