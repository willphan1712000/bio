<?php

namespace business\info\social;

use business\info\InfoHandler;
use business\info\social\Social;

class Zillow extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Zillow';
    }
}
