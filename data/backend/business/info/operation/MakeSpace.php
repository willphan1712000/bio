<?php

namespace business\info\operation;

class MakeSpace implements Operation
{
    private static $instance;
    public static function getInstance(): MakeSpace
    {
        if (!isset(self::$instance)) {
            self::$instance = new MakeSpace();
        }
        return self::$instance;
    }
    private function __construct() {}
    private function makeSpaceBetweenCharacters(?string $string): ?string
    {
        if ($string === "" || $string === NULL) {
            return $string;
        }
        $displayString = $string[0];
        for ($i = 1; $i < strlen($string); $i++) {
            $displayString .= ($string[$i] === strtoupper($string[$i])) ? ' ' . $string[$i] : $string[$i];
        }
        return $displayString;
    }

    public function execute($string): mixed
    {
        return $this->makeSpaceBetweenCharacters($string);
    }
}
