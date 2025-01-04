<?php

namespace controllers\template;

require_once __DIR__ . "/1/1.php";
require_once __DIR__ . "/2/2.php";
require_once __DIR__ . "/3/3.php";
require_once __DIR__ . "/4/4.php";
require_once __DIR__ . "/5/5.php";
require_once __DIR__ . "/6/6.php";
require_once __DIR__ . "/7/7.php";
require_once __DIR__ . "/8/8.php";
require_once __DIR__ . "/9/9.php";
require_once __DIR__ . "/10/10.php";

class TemplateFactory
{
    private static $instance;
    public static function getInstance(): TemplateFactory
    {
        if (!isset(self::$instance)) {
            self::$instance = new TemplateFactory();
        }
        return self::$instance;
    }

    private array $template;

    private function __construct()
    {
        $this->template = [];
    }

    public function getTemplate(int $id): ITemplate
    {
        if (!isset($this->template[$id])) {
            $template = "controllers\\template\\Template$id";
            $this->template[$id] = new $template();
        }

        return $this->template[$id];
    }
}
