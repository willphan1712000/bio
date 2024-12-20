<?php

namespace business\info\social;

use business\info\InfoHandler;

class Zalo extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Zalo';
    }

    public function format($info): ?string
    {
        return empty($info) ? null : "https://zalo.me/" . $info;
    }
}
