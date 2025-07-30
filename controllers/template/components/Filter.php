<?php

namespace controllers\template\components;

use component\Component;

class Filter extends Component
{
    public function render()
    {
        return '
            <div class="filter flex flex-col justify-center items-center mb-[10px]">
                <div class="type flex flex-row justify-evenly items-center gap-[20px]">
                    <div class="typebox popular active">
                        <a class="no-underline text-black" href="' . $this->props['popular'] . '">Horizontal</a>
                    </div>
                    <div class="typebox industry">
                        <a class="no-underline text-black" href="' . $this->props['industry'] . '">Vertical</a>
                    </div>
                    <div class="typebox color">
                        <a class="no-underline text-black" href="' . $this->props['color'] . '">Custom</a>
                    </div>
                </div>
            </div>
        ';
    }
}

function filter($props)
{
    return new filter($props);
}
