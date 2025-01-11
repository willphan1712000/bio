<?php

namespace business\info\phone;

use business\info\Info;
use business\info\InfoHandler;
use business\info\phone\Phone;
use business\info\display\UserDisplay;
use business\info\operation\PhoneDisplay as OperationPhoneDisplay;

class Mobile extends Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Mobile';
    }

    public function doHandle(Info $info): bool
    {
        $value = $info->getInfo($this->name);
        if ($this->validate($this->name, $value)) {
            // $info->setInfo($this->name, $value);
            if (!empty($value)) {
                $info->setInfo('vcard', $info->getInfo('vcard') . 'TEL;TYPE=Mobile Phone;PREF:' . $this->format([
                    'code' => $info->getInfo('MobileCode'),
                    'number' => $info->getInfo('Mobile')
                ]) . '\n');

                return $this->setValueToDatabase($this->name, $value, $info->getInfo('username')) && $this->setValueToDatabase('MobileCode', $info->getInfo('MobileCode'), $info->getInfo('username')) && $this->setValueToDatabase('MobileFlag', $info->getInfo('MobileFlag'), $info->getInfo('username'));
            }

            return $this->setValueToDatabase($this->name, null, $info->getInfo('username')) && $this->setValueToDatabase('MobileCode', null, $info->getInfo('username')) && $this->setValueToDatabase('MobileFlag', null, $info->getInfo('username'));
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
        $display = new UserDisplay($this->name, $this->format([
            'code' => $code,
            'number' => $value
        ]));
        $display->setOperation(OperationPhoneDisplay::getInstance());

        $info->setInfo($this->name, $display);
        return true;
    }
}
