<?php

namespace business\info\phone;

use business\info\Info;
use business\info\InfoHandler;
use business\info\phone\Phone;
use business\info\display\PhoneDisplay;
use business\info\operation\NormalPhone;

class HotLine extends Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'HotLine';
    }

    public function doHandle(Info $info): bool
    {
        if ($this->validate($this->name, $info->getInfo($this->name))) {
            $info->setInfo($this->name, $info->getInfo($this->name));
            return $this->setValueToDatabase($this->name, $info->getInfo($this->name), $info->getInfo('username')) && $this->setValueToDatabase('HotLineCode', $info->getInfo('HotLineCode'), $info->getInfo('username')) && $this->setValueToDatabase('HotLineFlag', $info->getInfo('HotLineFlag'), $info->getInfo('username'));
        }
        return false;
    }

    public function doAdminGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('HotLine', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('HotLineCode', $info->getInfo('username'));
        $flag = $this->getValueFromDatabase('HotLineFlag', $info->getInfo('username'));

        $info->setInfo('HotLine', $value);
        $info->setInfo('HotLineCode', $code);
        $info->setInfo('HotLineFlag', $flag);
        return true;
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('HotLine', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('HotLineCode', $info->getInfo('username'));
        $info->setInfo($this->name, new PhoneDisplay($this->name, $this->format([
            'code' => $code,
            'number' => $value
        ])));
        return true;
    }

    public function format($info): ?string
    {
        $o = NormalPhone::getInstance();
        return $o->execute($info);
    }
}
