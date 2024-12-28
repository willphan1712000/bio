<?php

namespace business\info\operation;

class Device implements Operation
{
    private static $instance;
    public static function getInstance(): Device
    {
        if (!isset(self::$instance)) {
            self::$instance = new Device();
        }
        return self::$instance;
    }
    private function __construct() {}
    // Detect device type, "Desktop" or "Mobile"
    private function getDeviceType()
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

    public function execute($list = null): mixed
    {
        return $this->getDeviceType();
    }
}
