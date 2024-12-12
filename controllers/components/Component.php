<?php

namespace component;

abstract class Component
{
    protected $props;
    protected $children;

    function __construct($props = null, $children = null)
    {
        $this->props = $props;
        $this->children = $children;
    }

    public abstract function render();
}
