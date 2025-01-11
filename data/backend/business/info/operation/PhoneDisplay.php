<?php

namespace business\info\operation;

class PhoneDisplay implements Operation
{
    private static $instance;
    public static function getInstance(): PhoneDisplay
    {
        if (!isset(self::$instance)) {
            self::$instance = new PhoneDisplay();
        }
        return self::$instance;
    }
    private function __construct() {}

    public function execute($formattedNumber): mixed
    {
        return "tel: " . $formattedNumber;
    }
}
