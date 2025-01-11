<?php

namespace business\info\operation;

class NormalPhone extends Phone implements Operation
{
    private static $instance;
    public static function getInstance(): NormalPhone
    {
        if (!isset(self::$instance)) {
            self::$instance = new NormalPhone();
        }
        return self::$instance;
    }
    private function __construct() {}
    protected function phoneNumberFormat(array $list): ?string
    {
        $number = $this->handleNumber($list['number']);
        if ($number === null) {
            return null;
        }

        // $code = $list['code'];

        return $number;
    }
}
