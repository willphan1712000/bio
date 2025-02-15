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
            <div class="logo-box w-[5rem] flex justify-between p-2">
                <img class="h-full" src="' . $this->src . '?v=' . time() . '" alt="allinclicks_logo" draggable=false>
            </div>
        ';
    }
}

function logo()
{
    return new Logo();
}
