<?php

namespace business\info\user;

use business\info\InfoHandler;

class Email extends User
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Email';
    }
}
