<?php

namespace business\info\user;

use business\info\Info;
use business\info\user\User;
use business\info\InfoHandler;
use business\info\display\NormalDisplay;

class Position extends User
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'position';
    }
    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase($this->name, $info->getInfo('username'));
        $info->setInfo($this->name, new NormalDisplay($this->name, $value));
        return true;
    }

    public function doHandle(Info $info): bool
    {
        $value = $info->getInfo($this->name);
        if ($this->validate($this->name, $value)) {
            $info->setInfo('vcard', $info->getInfo('vcard') . 'TITLE;CHARSET=utf-8:' . $value . '\n');

            return $this->setValueToDatabase($this->name, empty($value) ? null : $value, $info->getInfo('username'));
        }
        return false;
    }
}
