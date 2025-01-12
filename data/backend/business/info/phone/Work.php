<?php

namespace business\info\phone;

use business\info\Info;
use business\info\InfoHandler;
use business\info\phone\Phone;
use business\info\display\UserDisplay;
use business\info\display\PhoneDisplay;
use business\info\operation\PhoneDisplay as OperationPhoneDisplay;

class Work extends Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Work';
    }

    public function doHandle(Info $info): bool
    {
        $value = $info->getInfo($this->name);
        if ($this->validate($this->name, $value)) {
            // $info->setInfo($this->name, $value);
            if (!empty($value)) {
                $info->setInfo('vcard', $info->getInfo('vcard') . 'TEL;TYPE=Work Phone;PREF:' . $this->format([
                    'code' => $info->getInfo('WorkCode'),
                    'number' => $info->getInfo('Work')
                ]) . '\n');

                return $this->setValueToDatabase($this->name, $value, $info->getInfo('username')) && $this->setValueToDatabase('WorkCode', $info->getInfo('WorkCode'), $info->getInfo('username')) && $this->setValueToDatabase('WorkFlag', $info->getInfo('WorkFlag'), $info->getInfo('username'));
            }


            return $this->setValueToDatabase($this->name, null, $info->getInfo('username')) && $this->setValueToDatabase('WorkCode', null, $info->getInfo('username')) && $this->setValueToDatabase('WorkFlag', null, $info->getInfo('username'));
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
        $display = new UserDisplay($this->name, $this->format([
            'code' => $code,
            'number' => $value
        ]));
        $display->setOperation(OperationPhoneDisplay::getInstance());

        $info->setInfo($this->name, $display);
        return true;
    }
}
