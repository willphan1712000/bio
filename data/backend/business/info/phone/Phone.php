<?php

namespace business\info\phone;

use persistence\Database;
use business\info\InfoHandler;
use persistence\Entity\UserPhone;
use business\info\operation\Phone as OperationPhone;

abstract class Phone extends InfoHandler
{
    protected function getValueFromDatabase(string $getWhat, string $username): ?string
    {
        return Database::GET(UserPhone::class, $getWhat, ['username' => $username]);
    }

    protected function setValueToDatabase(string $setWhat, ?string $value, string $username): bool
    {
        return Database::PUT(UserPhone::class, $setWhat, $value, ['username' => $username]);
    }

    public function format($info): ?string
    {
        $o = OperationPhone::getInstance();
        return $o->execute($info);
    }
}
