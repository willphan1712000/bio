<?php

namespace business\info\display;

class ViberDisplay extends UserDisplay
{
    function __construct(string $name, ?string $value)
    {
        parent::__construct($name, $value);
    }

    public function getHTML(?string $children = null): string
    {
        $children = $children ?? $this->value;
        $display = $this->value === null ? "none" : "flex";
        return '<a href="viber://contact?number=' . $this->value . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $children . '</a>';
    }
}
