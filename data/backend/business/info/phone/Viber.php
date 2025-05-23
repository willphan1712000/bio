<?php

namespace business\info\phone;

use business\info\display\UserDisplay;
use business\info\Info;
use business\info\InfoHandler;
use business\info\phone\Phone;
use business\info\operation\Viber as OperationViber;

class Viber extends Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Viber';
    }

    public function doHandle(Info $info): bool
    {
        $o = OperationViber::getInstance();
        $value = $info->getInfo($this->name);
        if ($this->validate($this->name, $value)) {
            // $info->setInfo($this->name, $value);
            if (!empty($value)) {
                $info->setInfo('vcard', $info->getInfo('vcard') . 'URL;TYPE=Viber:' . $o->execute($this->format([
                    'code' => $info->getInfo('ViberCode'),
                    'number' => $info->getInfo('Viber')
                ])) . '\n');

                return $this->setValueToDatabase($this->name, $value, $info->getInfo('username')) && $this->setValueToDatabase('ViberCode', $info->getInfo('ViberCode'), $info->getInfo('username')) && $this->setValueToDatabase('ViberFlag', $info->getInfo('ViberFlag'), $info->getInfo('username'));
            }


            return $this->setValueToDatabase($this->name, null, $info->getInfo('username')) && $this->setValueToDatabase('ViberCode', null, $info->getInfo('username')) && $this->setValueToDatabase('ViberFlag', null, $info->getInfo('username'));
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

        $display = new UserDisplay($this->name, $this->format([
            'code' => $code,
            'number' => $value
        ]));
        $display->setOperation(OperationViber::getInstance());

        $info->setInfo($this->name, $display);
        return true;
    }
}
