<?php
namespace component;
require_once __DIR__."/../../data/core.php";
use config\SystemConfig;
class Copyright {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        $license = SystemConfig::globalVariables()['license'];
        echo '
            <div id="copyright" class="bottom-0 rounded-[20px] bg-white m-[15px] py-[20px] px-0 flex justify-center items-center w-[" style="position: '.$this->props['position'].'; width: -webkit-fill-available;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"><p>'.$license.'</p></div>
        ';
    }
}

function copyright($props) {
    return new Copyright($props);
}