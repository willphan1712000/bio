<?php

namespace business\info\user;

use business\info\Info;
use business\info\InfoHandler;

class Organization extends User
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'organization';
    }
}
