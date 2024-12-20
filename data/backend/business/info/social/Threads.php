<?php

namespace business\info\social;

use business\info\InfoHandler;
use business\info\operation\URL;
use business\info\social\Social;

class Threads extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Threads';
    }

    public function format($info): ?string
    {
        $o = URL::getInstance();
        return $o->execute($info);
    }
}
