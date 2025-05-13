<?php

namespace business\info\social;

use business\info\InfoHandler;
use business\info\social\Social;

class HotSale extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'HotSale';
    }
}
