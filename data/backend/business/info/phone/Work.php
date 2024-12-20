<?php

namespace business\info\phone;

use business\info\Info;
use business\info\InfoHandler;
use business\info\operation\Phone as OperationPhone;
use business\info\phone\Phone;

class Work extends Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Work';
    }

    public function doHandle(Info $info): bool
    {
        if ($this->validate($this->name, $info->getInfo($this->name))) {
            $info->setInfo($this->name, $info->getInfo($this->name));
            return $this->setValueToDatabase($this->name, $info->getInfo($this->name), $info->getInfo('username')) && $this->setValueToDatabase('WorkCode', $info->getInfo('WorkCode'), $info->getInfo('username')) && $this->setValueToDatabase('WorkFlag', $info->getInfo('WorkFlag'), $info->getInfo('username'));
        }
        return false;
    }

    public function doAdminGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('Work', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('WorkCode', $info->getInfo('username'));
        $flag = $this->getValueFromDatabase('WorkFlag', $info->getInfo('username'));

        $info->setInfo('Work', $value);
        $info->setInfo('WorkCode', $code);
        $info->setInfo('WorkFlag', $flag);
        return true;
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('Work', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('WorkCode', $info->getInfo('username'));
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
