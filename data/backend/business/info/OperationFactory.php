<?php
namespace business\info;

require_once __DIR__."/../../../../vendor/autoload.php";

use business\info\phone\operation\Validate;
use business\info\social\operation\Messenger;
use business\info\social\operation\Validate as OperationValidate;
use business\info\social\operation\Zalo;
use business\info\user\operation\Address;
use business\info\user\operation\Email;

enum OPERATIONNAME: string {
    case ADDRESS = 'ADDRESS';
    case EMAIL = 'EMAIL';
    case PHONEVALIDATE = 'PHONEVALIDATE';
    case SOCIALVALIDATE = 'SOCIALVALIDATE';
    case MESSENGER = 'MESSENGER';
    case ZALO = 'ZALO';
}

class OperationFactory {
    private array $operations;

    function __construct() {
        $this->operations[OPERATIONNAME::ADDRESS->value] = new Address();
        $this->operations[OPERATIONNAME::EMAIL->value] = new Email();
        $this->operations[OPERATIONNAME::PHONEVALIDATE->value] = new Validate();
        $this->operations[OPERATIONNAME::SOCIALVALIDATE->value] = new OperationValidate();
        $this->operations[OPERATIONNAME::MESSENGER->value] = new Messenger();
        $this->operations[OPERATIONNAME::ZALO->value] = new Zalo();
    }

    public function getOperation(string $operationName): Operation {
        return $this->operations[$operationName];
    }
}