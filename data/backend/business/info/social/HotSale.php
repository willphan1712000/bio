<?php

namespace business\info\social;

use business\info\Info;
use persistence\Database;
use business\info\InfoHandler;
use business\info\operation\URL;
use business\info\social\Social;
use persistence\Entity\UserSocial;

class HotSale extends Social
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'HotSale';
    }
}
