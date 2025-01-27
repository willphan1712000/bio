<?php

namespace business\info\display;

use config\SystemConfig;

class NormalDisplay extends UserDisplay
{
    function __construct(string $name, ?string $value)
    {
        parent::__construct($name, $value);
    }

    public function getHTML(?string $children = null): string
    {
        $searchParams = SystemConfig::URLExtraction(1);
        if ($searchParams === 'admin') {
            $list = ['name', 'position', 'organization'];
            if (in_array($this->name, $list)) {
                return '<input id="element" data-name="' . $this->name . '" class="w-full border-none bg-transparent text-center" value="' . ($this->value ?? '') . '">'; // Indicator for editting
            }
        }

        return $this->value ?? '';
    }
}
