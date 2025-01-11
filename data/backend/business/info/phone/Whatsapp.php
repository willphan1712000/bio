<?php

namespace business\info\phone;

use business\info\Info;
use business\info\InfoHandler;
use business\info\phone\Phone;
use business\info\display\UserDisplay;
use business\info\operation\Whatsapp as OperationWhatsapp;

class Whatsapp extends Phone
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Whatsapp';
    }

    public function doHandle(Info $info): bool
    {
        $o = OperationWhatsapp::getInstance();
        $value = $info->getInfo($this->name);
        if ($this->validate($this->name, $value)) {
            // $info->setInfo($this->name, $value);
            if (!empty($value)) {
                $info->setInfo('vcard', $info->getInfo('vcard') . 'URL;TYPE=Whatsapp:' . $o->execute($this->format([
                    'code' => $info->getInfo('WhatsappCode'),
                    'number' => $info->getInfo('Whatsapp')
                ])) . '\n');

                return $this->setValueToDatabase($this->name, $value, $info->getInfo('username')) && $this->setValueToDatabase('WhatsappCode', $info->getInfo('WhatsappCode'), $info->getInfo('username')) && $this->setValueToDatabase('WhatsappFlag', $info->getInfo('WhatsappFlag'), $info->getInfo('username'));
            }


            return $this->setValueToDatabase($this->name, null, $info->getInfo('username')) && $this->setValueToDatabase('WhatsappCode', null, $info->getInfo('username')) && $this->setValueToDatabase('WhatsappFlag', null, $info->getInfo('username'));
        }
        return false;
    }

    public function doAdminGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('Whatsapp', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('WhatsappCode', $info->getInfo('username'));
        $flag = $this->getValueFromDatabase('WhatsappFlag', $info->getInfo('username'));

        $info->setInfo('Whatsapp', $value);
        $info->setInfo('WhatsappCode', $code);
        $info->setInfo('WhatsappFlag', $flag);
        return true;
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase('Whatsapp', $info->getInfo('username'));
        $code = $this->getValueFromDatabase('WhatsappCode', $info->getInfo('username'));
        $display = new UserDisplay($this->name, $this->format([
            'code' => $code,
            'number' => $value
        ]));
        $display->setOperation(OperationWhatsapp::getInstance());

        $info->setInfo($this->name, $display);
        return true;
    }
}
