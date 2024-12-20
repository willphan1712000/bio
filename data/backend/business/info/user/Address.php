<?php

namespace business\info\user;

use business\info\Info;
use business\info\InfoHandler;

class Address extends User
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'Address';
    }

    public function format($info): string
    {
        return empty($info) ? "" : "https://google.com/maps?q=" . $info;
    }
}
