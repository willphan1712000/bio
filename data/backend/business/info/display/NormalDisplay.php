<?php

namespace business\info\display;

class NormalDisplay extends UserDisplay
{
    function __construct(string $name, ?string $value)
    {
        parent::__construct($name, $value);
    }

    public function getHTML(?string $children = null): string
    {
        return $this->value ?? '';
    }
}
