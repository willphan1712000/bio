<?php

namespace business\info\phone;

use business\info\Info;
use business\info\InfoHandler;
use business\info\phone\Phone;
use business\info\display\ViberDisplay;
use business\info\operation\Phone as OperationPhone;

class Viber extends Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Viber';
    }

    public function doHandle(Info $info): bool
    {
        if ($this->validate($this->name, $info->getInfo($this->name))) {
            $info->setInfo($this->name, $info->getInfo($this->name));
            return $this->setValueToDatabase($this->name, $info->getInfo($this->name), $info->getInfo('username')) && $this->setValueToDatabase('ViberCode', $info->getInfo('ViberCode'), $info->getInfo('username')) && $this->setValueToDatabase('ViberFlag', $info->getInfo('ViberFlag'), $info->getInfo('username'));
        }
        return false;
    }

    public function doAdminGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('Viber', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('ViberCode', $info->getInfo('username'));
        $flag = $this->getValueFromDatabase('ViberFlag', $info->getInfo('username'));

        $info->setInfo('Viber', $value);
        $info->setInfo('ViberCode', $code);
        $info->setInfo('ViberFlag', $flag);
        return true;
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('Viber', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('ViberCode', $info->getInfo('username'));
        $info->setInfo($this->name, new ViberDisplay($this->name, $this->format([
            'code' => $code,
            'number' => $value
        ])));
        return true;
    }

    public function format($info): ?string
    {
        $o = OperationPhone::getInstance();
        return $o->execute($info);
    }
}
