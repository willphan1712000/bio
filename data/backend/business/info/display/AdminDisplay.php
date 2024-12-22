<?php

namespace business\info\display;

use business\info\operation\MakeSpace;

class AdminDisplay extends UserDisplay
{
    function __construct(string $name)
    {
        parent::__construct($name);
    }

    public function getHTML(?string $children = null): string
    {
        $children = $children ?? '';
        return '<div id="' . $this->name . '">' . $children . '</div>';
    }
}
