<?php

namespace business\info\operation;

class URL implements Operation
{
    private static $instance;
    public static function getInstance(): URL
    {
        if (!isset(self::$instance)) {
            self::$instance = new URL();
        }
        return self::$instance;
    }
    private function __construct() {}
    private function urlHandling(?string $url): ?string
    {
        if ($url === "" || $url === NULL) {
            return null;
        }
        if (!str_contains($url, 'https://')) {
            return "https://" . $url;
        }
        return $url;
    }

    public function execute($string): mixed
    {
        return $this->urlHandling($string);
    }
}
