<?php

namespace controllers\template\components;

use component\Component;

class TemplateComponent extends Component
{
    public static function style($container)
    {
        return '<style>
            ' . $container . ' {
                display: flex;
                flex-direction: row;
                overflow-x: auto;
                overflow-y: hidden;
                flex-wrap: nowrap;
            }
            ' . $container . ' .template {
                width: calc(100% - 120px) !important;
                flex-shrink: 0;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                margin: 0px 60px 20px 60px;
                padding: 10px;
                border-radius: 20px;
            }
            ' . $container . ' .template .template-img {
                border-radius: 20px;
                position: relative;
                width: 100%;
                aspect-ratio: 0.5869565217;
            }
            ' . $container . ' .template .template-img .like {
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
            ' . $container . ' .template .template-img .like.active {
                color: red;
                border-color: red;
            }
            ' . $container . ' .template .template-img > img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 20px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                display: block;
            }
            ' . $container . ' .template .template-choice {
                display: flex;
                flex-direction: row;
                justify-content:center;
                align-items: center;
            }
            ' . $container . ' .template .template-choice > * {
                border-radius: 20px;
                margin: 5px;
                padding: 15px;
                cursor: pointer;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                position: relative;
            }
            ' . $container . ' .template .template-img .msg {
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
            ' . $container . ' .template .template-choice .check {
                position: absolute;
                top: -10px;
                right: -10px;
                border-radius: 50%;
                height: 10px;
                width: 10px;
                background-color: green;
                padding: 12px;
                display: none;
                justify-content: center;
                align-items: center;
                color: #fff;
            }
            ' . $container . ' .template .template-choice .check.active {
                display: flex;
            }
            ' . $container . ' .template .template-choice .select .check.active {
                top: 0;
                left: 0;
                display: flex;
                position: relative;
                width: 40px;
                height: 40px;
            }
            ' . $container . ' .template .template-choice .select .text.active {
                display: none;
            }
            ' . $container . ' .template .template-choice .select.active {
                padding: 0;
            }
            @media screen and (min-width: 600px) {
                ' . $container . ' .template {
                width: 300px !important;
            }
        }
        </style>
        ';
    }

    public function render()
    {
        $props = $this->props;
        if ($props['mode'] === 'purchase') {
            $choiceDisplay = "flex";
            $selectDisplay = "none";
            $likeDisplay = "flex";
        } elseif ($props['mode'] === 'purchased') {
            $choiceDisplay = "none";
            $selectDisplay = "flex";
            $likeDisplay = "none";
        }
        if ($props["id"] === (isset($props['chosen']) ? $props["chosen"] : 0)) {
            $chosenDisplay = "active";
        } else {
            $chosenDisplay = "";
        }
        return '
            <div class="swiper-slide template ' . $props['id'] . '" data-id="' . $props['id'] . '">
                <div class="template-img">
                    <img draggable="false" src="' . $props['img'] . '?' . time() . '">
                    <div style="display: ' . $likeDisplay . '" class="like" data-id="' . $props['id'] . '" data-pressed="0"><i class="fa-solid fa-heart"></i></div>
                </div>
                <div class="template-choice" style="display: ' . $choiceDisplay . '">
                    <div class="buy" data-id="' . $props['id'] . '">Buy now</div>
                    <div class="add" data-id="' . $props['id'] . '" data-pressed="0">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p class="check"><i class="fa-solid fa-check"></i></p>
                    </div>
                </div>
                <div class="template-choice" style="display: ' . $selectDisplay . '">
                    <div class="select ' . $chosenDisplay . '" data-id="' . $props['id'] . '">
                        <p class="text ' . $chosenDisplay . '">Select</p>
                        <p class="check ' . $chosenDisplay . '"><i class="fa-solid fa-check"></i></p>
                    </div>
                    <div class="share" data-id="' . $props['id'] . '" data-share="' . (isset($props['url']) ? $props['url'] : "") . '&tem=' . $props["id"] . '">
                        <p class="text">Share</p>
                    </div>
                </div>
            </div>
        ';
        return $this;
    }
}

function templateComponent($props)
{
    return new TemplateComponent($props);
}
