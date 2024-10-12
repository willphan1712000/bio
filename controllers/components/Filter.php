<?php
namespace component;
class Filter {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        return '
            <div class="filter flex flex-col justify-center items-center mb-[10px]">
                <div class="type flex flex-row justify-evenly items-center gap-[20px]">
                    <div class="typebox popular active">
                        <a class="no-underline text-black" href="'.$this->props['popular'].'">Popular</a>
                    </div>
                <div class="typebox industry">
                    <a class="no-underline text-black" href="'.$this->props['industry'].'">Industry</a>
                </div>
                <div class="typebox color">
                    <a class="no-underline text-black" href="'.$this->props['color'].'">Color</a>
                </div>
                <div class="typebox color">
                    <a class="no-underline text-black" href="'.$this->props['like'].'">Like</a>
                </div>
            </div>
        ';
    }
}

function filter($props) {
    return new filter($props);
}