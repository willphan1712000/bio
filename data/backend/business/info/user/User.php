<?php

namespace business\info\user;

use persistence\Database;
use business\info\InfoHandler;
use persistence\Entity\UserInfo;

abstract class User extends InfoHandler
{
    protected function getValueFromDatabase(string $getWhat, string $username): ?string
    {
        return Database::GET(UserInfo::class, $getWhat, ['username' => $username]);
    }

    protected function setValueToDatabase(string $setWhat, ?string $value, string $username): bool
    {
        return Database::PUT(UserInfo::class, $setWhat, $value, ['username' => $username]);
    }
}
