<?php

namespace business\info\social;

use business\info\display\UserDisplay;
use business\info\Info;
use business\info\InfoHandler;
use business\info\social\Social;
use business\info\operation\Youtube as OperationYoutube;

class Youtube extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Youtube';
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase($this->name, $info->getInfo('username'));
        $display = new UserDisplay($this->name, $this->format($value));
        $display->setOperation(OperationYoutube::getInstance());

        $info->setInfo($this->name, $display);
        return true;
    }
}
