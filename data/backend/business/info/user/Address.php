<?php

namespace business\info\user;

use business\info\Info;
use business\info\InfoHandler;
use business\info\operation\Address as OperationAddress;

class Address extends User
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Address';
    }

    public function format($info): ?string
    {
        $o = OperationAddress::getInstance();
        return $o->execute($info);
    }

    public function doHandle(Info $info): bool
    {
        $value = $info->getInfo($this->name);
        if ($this->validate($this->name, $value)) {
            $info->setInfo('vcard', $info->getInfo('vcard') . 'URL;TYPE=Address:' . $this->format($value) . '\n');

            return $this->setValueToDatabase($this->name, empty($value) ? null : $value, $info->getInfo('username'));
        }
        return false;
    }
}
