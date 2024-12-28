<?php

namespace business\info\social;

use business\info\InfoHandler;
use business\info\social\Social;

class Messenger extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Messenger';
    }

    public function format($info): ?string
    {
        return empty($info) ? null : "https://m.me/" . $info;
    }
}
