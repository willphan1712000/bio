<?php
class Copyright {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        $license = SystemConfig::globalVariables()['license'];
        echo '
            <style>
                #copyright {
                    position: '.$this->props['position'].';
                    bottom: 0;
                    border-radius: 20px;
                    background-color: #fff;
                    margin: 15px;
                    padding: 20px 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: -webkit-fill-available;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                }
            </style>
            <div id="copyright"><p>'.$license.'</p></div>
        ';
    }
}

function copyright($props) {
    return new Copyright($props);
}