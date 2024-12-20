<?php

namespace business\info\phone;

use business\info\Info;
use business\info\InfoHandler;
use business\info\operation\Phone as OperationPhone;
use business\info\phone\Phone;

class Mobile extends Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Mobile';
    }

    public function doHandle(Info $info): bool
    {
        if ($this->validate($this->name, $info->getInfo($this->name))) {
            $info->setInfo($this->name, $info->getInfo($this->name));
            return $this->setValueToDatabase($this->name, $info->getInfo($this->name), $info->getInfo('username')) && $this->setValueToDatabase('MobileCode', $info->getInfo('MobileCode'), $info->getInfo('username')) && $this->setValueToDatabase('MobileFlag', $info->getInfo('MobileFlag'), $info->getInfo('username'));
        }
        return false;
    }

    public function doAdminGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('Mobile', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('MobileCode', $info->getInfo('username'));
        $flag = $this->getValueFromDatabase('MobileFlag', $info->getInfo('username'));

        $info->setInfo('Mobile', $value);
        $info->setInfo('MobileCode', $code);
        $info->setInfo('MobileFlag', $flag);
        return true;
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('Mobile', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('MobileCode', $info->getInfo('username'));
        $info->setInfo($this->name, $this->format([
            'code' => $code,
            'number' => $value
        ]));
        return true;
    }

    public function format($info): ?string
    {
        $o = OperationPhone::getInstance();
        return $o->execute($info);
    }
}
