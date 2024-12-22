<?php

namespace business\info\display;

use business\info\operation\LongString;
use business\info\operation\MakeSpace;

class UserDisplay implements Display
{
    protected string $name;
    protected ?string $value;

    function __construct(string $name, ?string $value)
    {
        $this->name = $name;
        $this->value = $value;
    }

    public function getValue(): ?string
    {
        $o = LongString::getInstance();
        return $o->execute($this->value);
    }

    public function getLabel(): string
    {
        // Implement the method logic here
        $o = MakeSpace::getInstance();
        return $o->execute($this->name);
    }

    public function getHTML(?string $children = null): string
    {
        $children = $children ?? $this->value;
        $display = $this->value === null ? "none" : "flex";
        return '<a href="' . $this->value . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $children . '</a>';
    }
}
