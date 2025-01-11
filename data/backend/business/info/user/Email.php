<?php

namespace business\info\user;

use business\info\display\UserDisplay;
use business\info\Info;
use business\info\user\User;
use business\info\InfoHandler;
use business\info\operation\Email as OperationEmail;

class Email extends User
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Email';
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase($this->name, $info->getInfo('username'));
        $display = new UserDisplay($this->name, $this->format($value));
        $display->setOperation(OperationEmail::getInstance());

        $info->setInfo($this->name, $display);
        return true;
    }

    public function doHandle(Info $info): bool
    {
        $value = $info->getInfo($this->name);
        if ($this->validate($this->name, $value)) {
            $info->setInfo('vcard', $info->getInfo('vcard') . 'EMAIL;TYPE=Email:' . $this->format($value) . '\n');

            return $this->setValueToDatabase($this->name, empty($value) ? null : $value, $info->getInfo('username'));
        }
        return false;
    }
}
