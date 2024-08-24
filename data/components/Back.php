<?php
class Back {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        $props = $this->props;
        echo '
            <style>
                '.$this->props["container"].' {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    position: relative;
                    padding: 10px 20px;
                }
                '.$this->props["container"].' .card-back-container {
                    background-color: #fff;
                    border-radius: 40px;
                    height: 100%;
                    width: calc(100vw - 40px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                '.$this->props["container"].' .card-back-container .ele {
                    margin: 10px;
                }
                '.$this->props["container"].' .card-back-container .line {
                    border-bottom: solid 2px #000;
                    width: 60%;
                }
                '.$this->props["container"].' .card-back-container .qr {
                    width: 35%;
                }
                '.$this->props["container"].' .card-back-container .qr img {
                    width: 100%;
                    height: 100%;
                }
                '.$this->props["container"].' .card-back-container .name {
                    font-size: 30px;
                }
            </style>
            <div class="card-back-container">
                <div class="ele name">'.$props['info']->name()['a'].'</div>
                <div class="ele organization">'.$props['info']->organization()['a'].'</div>
                <div class="ele line"></div>
                <div class="ele phone">'.$props['info']->mobile()['div'].'</div>
                <div class="ele qr"><img draggable=false src="../user/'.$props['username'].'/qr-code.png"></div>
            </div>
        ';
    }
}

function back($props) {
    return new Back($props);
}