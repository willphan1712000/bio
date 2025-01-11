<?php

namespace business\info\operation;

class Youtube implements Operation
{
    private static $instance;
    public static function getInstance(): Youtube
    {
        if (!isset(self::$instance)) {
            self::$instance = new Youtube();
        }
        return self::$instance;
    }
    private function __construct() {}

    public function execute($formatedValue): mixed
    {
        $href = Device::getInstance()->execute() === 'Mobile' ? str_replace('https', 'youtube', $formatedValue ?? '') : $formatedValue;
        return $href;
    }
}
