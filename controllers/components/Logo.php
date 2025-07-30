<?php

namespace component;

use config\SystemConfig as config;

class Logo
{
    private $src;

    public function __construct()
    {
        $this->src = config::globalVariables()['img']['logo'];
    }

    public function render()
    {
        return '
            <a href="/" class="logo-box w-full flex justify-between p-2">
                <img class="h-full" src="' . $this->src . '?v=' . time() . '" alt="allinclicks_logo" draggable=false>
            </a>
        ';
    }
}

function logo()
{
    return new Logo();
}
