<?php

namespace business\info\operation;

interface Operation
{
    public function execute(mixed $string): mixed;
    public static function getInstance(): Operation;
}
