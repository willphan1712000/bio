<?php

namespace business\info\operation;

class LongString implements Operation
{
    private static $instance;
    public static function getInstance(): LongString
    {
        if (!isset(self::$instance)) {
            self::$instance = new LongString();
        }
        return self::$instance;
    }
    private function __construct() {}
    private function handleLongString(?string $string): ?string
    {
        if ($string === "" || $string === NULL) {
            return $string;
        }
        if (str_contains($string, 'https://')) {
            $string = explode("?", $string)[0];
        }
        if (strlen($string) >= 20) {
            $string = substr($string, 0, 20);
            $string .= "...";
        }
        return $string;
    }

    public function execute($string): mixed
    {
        return $this->handleLongString($string);
    }
}
