<?php

namespace business\info\operation;

class Phone implements Operation
{
    private static $instance;
    public static function getInstance(): Phone
    {
        if (!isset(self::$instance)) {
            self::$instance = new Phone();
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
        // if coed is +84 Vietname, trim the first digit of the phone number
        if ($code === '+84') {
            $number = substr($number, 1);
        }

        return $code . ' ' . $number;
    }

    public function execute($list): mixed
    {
        return $this->phoneNumberFormat($list);
    }

    protected function handleNumber(?string $number): ?string
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
