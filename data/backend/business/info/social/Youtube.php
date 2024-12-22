<?php

namespace business\info\social;

use business\info\Info;
use business\info\InfoHandler;
use business\info\social\Social;
use business\info\display\YoutubeDisplay;

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
        $info->setInfo($this->name, new YoutubeDisplay($this->name, $this->format($value)));
        return true;
    }
}
