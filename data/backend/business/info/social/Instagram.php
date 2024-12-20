<?php

namespace business\info\social;

use business\info\InfoHandler;
use business\info\operation\URL;
use business\info\social\Social;

class Instagram extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Instagram';
    }

    public function format($info): ?string
    {
        $o = URL::getInstance();
        return $o->execute($info);
    }
}
