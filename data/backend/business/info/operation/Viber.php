<?php

namespace business\info\operation;

class Viber extends Phone implements Operation
{
    private static $instance;
    public static function getInstance(): Viber
    {
        if (!isset(self::$instance)) {
            self::$instance = new Viber();
        }
        return self::$instance;
    }
    private function __construct() {}

    public function execute($formattedNumber): mixed
    {
        return $formattedNumber === null ? null : 'viber://contact?number=' . $formattedNumber;
    }
}
