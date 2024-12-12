<?php

namespace business\user;

class InfoAnchorFunction
{
    protected function handleLongString(?string $string)
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

    protected function makeSpaceBetweenCharacters($string)
    {
        $displayString = $string[0];
        for ($i = 1; $i < strlen($string); $i++) {
            $displayString .= ($string[$i] === strtoupper($string[$i])) ? ' ' . $string[$i] : $string[$i];
        }
        return $displayString;
    }

    protected function phoneNumberFormat(?string $code, ?string $number)
    {
        if ($code === '+84') {
            $number = substr($number, 1);
        }
        return $code . ' ' . $number;
    }

    // Detect device type, "Desktop" or "Mobile"
    protected function getDeviceType()
    {
        $userAgent = $_SERVER['HTTP_USER_AGENT'];

        if (preg_match('/mobile/i', $userAgent)) {
            return 'Mobile';
        } elseif (preg_match('/tablet/i', $userAgent)) {
            return 'Tablet';
        } else {
            return 'Desktop';
        }
    }
}
