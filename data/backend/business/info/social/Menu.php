<?php

namespace business\info\social;

use business\info\InfoHandler;
use business\info\social\Social;

class Menu extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Menu';
    }
}
