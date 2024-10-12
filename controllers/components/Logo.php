<?php
namespace component;
require_once __DIR__."/../../data/core.php";
use config\SystemConfig as config;

class Logo {
    private $src;

    public function __construct() {
        $this->src = config::globalVariables()['img']['logo'];
    }

    public function render() {
        return '
            <div class="logo-box h-[10vh] flex justify-between">
                <img class="h-full" src="'.$this->src.'?v='.time().'" alt="allinclicks_logo" draggable=false>
            </div>
        ';
    }
}

function logo() {
    return new Logo();
}