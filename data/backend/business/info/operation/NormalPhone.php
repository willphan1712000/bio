<?php

namespace business\info\operation;

class NormalPhone implements Operation
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
    private function phoneNumberFormat(array $list): ?string
    {
        $number = $this->handleNumber($list['number']);
        if ($number === null) {
            return null;
        }

        $code = $list['code'];

        return $number;
    }

    public function execute($list): mixed
    {
        return $this->phoneNumberFormat($list);
    }

    private function handleNumber(?string $number): ?string
    {
        if ($number === null) {
            return null;
        }
        $dashedNumber = ""; // the return number looks like this ddd-ddd-dddd
        for ($i = 0; $i < strlen($number); $i++) {
            if ($i === 3 || $i === 6) {
                $dashedNumber .= "-" . $number[$i];
                continue;
            }
            $dashedNumber .= $number[$i];
        }

        return $dashedNumber;
    }
}
