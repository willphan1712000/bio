<?php
namespace business\info\user;

require_once __DIR__ ."/../../../../../vendor/autoload.php";
use business\info\Info;
use business\info\Operation;
use business\info\InfoElement;
use business\info\InfoHandler;
use business\info\user\operation\Email as EmailOperation;

class Email extends InfoHandler implements InfoElement {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function validate(?Operation $operation, $info): bool {
        if ($operation === null) {
            return true;
        }
        return $operation->validate($info);
    }

    public function format(?Operation $operation, $info): string {
        if ($operation === null) {
            return $info;
        }
        return $operation->format($info);
    }

    public function doHandle(Info $info): bool {
        $infoArray = $info->getInfo();
        $operation = new EmailOperation();
        $infoArray["Email"] = $this->format($operation, $infoArray["Email"]);
        $info->setInfo($infoArray);        
        return $this->validate($operation, $infoArray["Email"]);
    }
}