<?php

namespace component;

use config\SystemConfig;

class Copyright
{
    private $props;

    public function __construct($props)
    {
        $this->props = $props;
    }

    public function render()
    {
        $license = SystemConfig::globalVariables()['license'];
        echo '
            <div id="copyright" class="rounded-[20px] bg-white m-[15px] py-[20px] px-0 flex flex-col justify-center items-center w-[" style="position: ' . $this->props['position'] . '; width: -webkit-fill-available;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <p>' . $license . '</p>
                <div class="flex flex-row gap-3">
                    <a href="@terms" target="">Privacy Policy</a>
                    <span> | </span>
                    <a href="@terms" target="">Terms of Use</a>
                </div>
            </div>
        ';
    }
}

function copyright($props)
{
    return new Copyright($props);
}
