<?php

namespace business\info\operation;

class TextArea implements Operation
{
    private static $instance;
    public static function getInstance(): TextArea
    {
        if (!isset(self::$instance)) {
            self::$instance = new TextArea();
        }
        return self::$instance;
    }
    private function __construct() {}
    public function execute($info): mixed
    {
        return $this->handleTextArea($info);
    }

    // Format if the link redirects to Google Map
    private function handleTextArea($info): ?string
    {
        if ($info === null) {
            return null;
        }

        return str_replace("\n", " ", $info);
    }
}
