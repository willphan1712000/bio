<?php

namespace business\info\operation;

class Address implements Operation
{
    private static $instance;
    public static function getInstance(): Address
    {
        if (!isset(self::$instance)) {
            self::$instance = new Address();
        }
        return self::$instance;
    }
    private function __construct() {}
    public function execute($info): mixed
    {
        return $this->googleMap($info);
    }

    // Format if the link redirects to Google Map
    public function googleMap(?string $info): ?string
    {
        if (!str_contains($info, 'https://')) {
            return "https://google.com/maps?q=" . $info;
        }
        return $info;
    }

    // Format if the link redirects to Apple Map
    public function appleMap(?string $info): ?string
    {
        if (!str_contains($info, 'https://')) {
            return "https://https://maps.apple.com/?q=" . $info;
        }
        return $info;
    }
}
