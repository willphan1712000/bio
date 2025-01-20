<?php

namespace business\info\display;

use business\info\operation\MakeSpace;
use business\info\operation\Operation;
use business\info\operation\LongString;
use config\SystemConfig;

class UserDisplay implements Display
{
    protected string $name;
    protected ?string $value;
    protected ?Operation $o;

    function __construct(string $name, ?string $value)
    {
        $this->name = $name;
        $this->value = $value;
        $this->o = null;
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
        $searchParams = SystemConfig::URLExtraction(1);
        if ($searchParams !== 'admin') {
            $children = $children ?? $this->value;
            $display = $this->value === null ? "none" : "flex";
            $value = ($this->o === null) ? $this->value : $this->o->execute($this->value);
            return '<a href="' . $value . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $children . '</a>';
        }

        $children = $children ?? '';
        return '<div id="element" data-name="' . $this->name . '">' . $children . '</div>'; // Indicator for editting
    }

    public function setOperation(Operation $o): Display
    {
        $this->o = $o;
        return $this;
    }
}
