<?php

namespace business\info\operation;

class Whatsapp extends Phone implements Operation
{
    private static $instance;
    public static function getInstance(): Whatsapp
    {
        if (!isset(self::$instance)) {
            self::$instance = new Whatsapp();
        }
        return self::$instance;
    }
    private function __construct() {}

    public function execute($formattedNumber): mixed
    {
        return 'https://wa.me/' . str_replace([' ', '-'], '', $formattedNumber);
    }
}
