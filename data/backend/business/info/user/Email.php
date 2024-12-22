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
}
