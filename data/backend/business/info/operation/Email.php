<?php

namespace business\info\operation;

class Email implements Operation
{
    private static $instance;
    public static function getInstance(): Email
    {
        if (!isset(self::$instance)) {
            self::$instance = new Email();
        }
        return self::$instance;
    }
    private function __construct() {}

    public function execute($formatedValue): mixed
    {
        return "mailto: " . $formatedValue;
    }
}
