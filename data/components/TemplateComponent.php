<?php

class Template {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public static function style($container) {
        echo '<style>
            '.$container.' {
                display: flex;
                flex-direction: row;
                overflow-x: auto;
                overflow-y: hidden;
                flex-wrap: nowrap;
                margin: 5px 0px 5px 0px;
            }
            '.$container.' .template {
                width: 60%;
                width: 270px;
                flex-shrink: 0;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                margin: 10px;
                padding: 10px;
                border-radius: 20px;
            }
            '.$container.' .template .template-img {
                border-radius: 20px;
                position: relative;
            }
            '.$container.' .template .template-img .like {
                position: absolute;
                top: 3%;
                right: 3%;
                border: solid 2px #000;
                border-radius: 15px;
                width: 20%;
                aspect-ratio: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                cursor: pointer;
                font-size: 20px;
            }
            '.$container.' .template .template-img > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            }
            '.$container.' .template .template-choice {
                display: flex;
                flex-direction: row;
                justify-content:center;
                align-items: center;
            }
            '.$container.' .template .template-choice > * {
                border-radius: 20px;
                margin: 5px;
                padding: 15px;
                cursor: pointer;
                border: solid 2px #000;
            }
            '.$container.' .template .template-img .msg {
                position: absolute;
                top: calc(50% - 4%);
                left: calc(50% - 15%);
                border: solid 2px #000;
                border-radius: 5px;
                width: 30%;
                height: 8%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            }
        </style>
        ';
    }

    public function render() {
        $props = $this->props;
        if($props['mode'] === 'purchase') {
            $choiceDisplay = "flex";
            $selectDisplay = "none";
            $likeDisplay = "flex";
        }
        elseif ($props['mode'] === 'purchased') {
            $choiceDisplay = "none";
            $selectDisplay = "flex";
            $likeDisplay = "none";
        }
        if($props["id"] === $props['chosen']) {
            $chosenDisplay = "#c1dfc1";
        } else {
            $chosenDisplay = "#fff";
        }
        if($props["isBought"]) {
            $buyDisplay = "none";
        } else {
            $buyDisplay = "block";
        }
        echo '
            <div style="display: '.$buyDisplay.' "class="template '.$props['id'].'" data-id="'.$props['id'].'">
                <div class="template-img">
                    <img draggable="false" src="'.$props['img'].'?'.time().'">
                    <div style="display: '.$likeDisplay.'" class="like" data-id="'.$props['id'].'" data-pressed="0"><i class="fa-solid fa-heart"></i></div>
                </div>
                <div class="template-choice" style="display: '.$choiceDisplay.'">
                    <div class="buy" data-id="'.$props['id'].'">Buy now</div>
                    <div class="add" data-id="'.$props['id'].'" data-pressed="0"><i class="fa-solid fa-cart-shopping"></i></div>
                </div>
                <div class="template-choice" style="display: '.$selectDisplay.'">
                    <div style="background-color: '.$chosenDisplay.'" class="select" data-id="'.$props['id'].'">Select</div>
                </div>
            </div>
        ';
        return $this;
    }
}

function template($props) {
    return new Template($props);
}