<?php

namespace business\info\social;

use persistence\Database;
use business\info\InfoHandler;
use business\info\operation\URL;
use persistence\Entity\UserSocial;

abstract class Social extends InfoHandler
{
    protected function getValueFromDatabase(string $getWhat, string $username): ?string
    {
        return Database::GET(UserSocial::class, $getWhat, ['username' => $username]);
    }

    protected function setValueToDatabase(string $setWhat, ?string $value, string $username): bool
    {
        return Database::PUT(UserSocial::class, $setWhat, $value, ['username' => $username]);
    }

    public function format($info): ?string
    {
        $o = URL::getInstance();
        return $o->execute($info);
    }
}
