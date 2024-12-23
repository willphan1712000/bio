<?php

namespace business\info\user;

use business\info\display\EmailDisplay;
use business\info\Info;
use business\info\user\User;
use business\info\InfoHandler;

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
        $info->setInfo($this->name, new EmailDisplay($this->name, $this->format($value)));
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
