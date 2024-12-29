<?php

namespace business\info\display;

use business\info\operation\Device;

class YoutubeDisplay extends UserDisplay
{
    function __construct(string $name, ?string $value)
    {
        parent::__construct($name, $value);
    }

    public function getHTML(?string $children = null): string
    {
        $children = $children ?? $this->value;
        $display = $this->value === null ? "none" : "flex";
        $href = Device::getInstance()->execute() === 'Mobile' ? str_replace('https', 'youtube', $this->value ?? '') : $this->value;
        return '<a href="' . $href . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $children . '</a>';
    }
}
