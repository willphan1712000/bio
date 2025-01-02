<?php

namespace business\info\operation;

class JobTitle implements Operation
{
    private static $instance;
    public static function getInstance(): JobTitle
    {
        if (!isset(self::$instance)) {
            self::$instance = new JobTitle();
        }
        return self::$instance;
    }
    private function __construct() {}
    public function execute($info): mixed
    {
        return $this->handleJobTitle($info);
    }

    // Format if the link redirects to Google Map
    private function handleJobTitle(array $info): ?string
    {
        $position = $info['position'];
        $org = $info['org'];

        if ($this->notHaveValue($position) && $this->notHaveValue($org)) {
            return null;
        }

        if ($this->notHaveValue($position)) {
            return $org;
        }

        if ($this->notHaveValue($org)) {
            return $position;
        }

        return $position . ' - ' . $org;
    }

    private function notHaveValue(?string $value): bool
    {
        return $value === null || empty($value);
    }
}
