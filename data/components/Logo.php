<?php
class Logo {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        echo '
            <style>
                '.$this->props["container"].' .logo-box {
                height: 100%;
                }
                '.$this->props["container"].' .logo-box img {
                    height: 100%;
                }
            </style>
            <div class="logo-box">
                <img src="'.$this->props["src"].'" alt="">
            </div>
        ';
    }
}

function logo($props) {
    return new Logo($props);
}