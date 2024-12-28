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
        $value = $info->getInfo($this->name);
        if ($this->validate($this->name, $value)) {
            // $info->setInfo($this->name, $value);
            if (!empty($value)) {
                $info->setInfo('vcard', $info->getInfo('vcard') . 'TEL;TYPE=Hotline;PREF:' . $this->format([
                    'code' => $info->getInfo('HotLineCode'),
                    'number' => $info->getInfo('HotLine')
                ]) . '\n');

                return $this->setValueToDatabase($this->name, $value, $info->getInfo('username')) && $this->setValueToDatabase('HotLineCode', $info->getInfo('HotLineCode'), $info->getInfo('username')) && $this->setValueToDatabase('HotLineFlag', $info->getInfo('HotLineFlag'), $info->getInfo('username'));
            }


            return $this->setValueToDatabase($this->name, null, $info->getInfo('username')) && $this->setValueToDatabase('HotLineCode', null, $info->getInfo('username')) && $this->setValueToDatabase('HotLineFlag', null, $info->getInfo('username'));
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
