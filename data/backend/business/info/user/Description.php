<?php

namespace business\info\user;

use business\info\Info;
use business\info\InfoHandler;
use business\info\display\NormalDisplay;

class Description extends User
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'description';
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase($this->name, $info->getInfo('username'));
        $info->setInfo($this->name, new NormalDisplay($this->name, $this->format($value)));
        return true;
    }
}
