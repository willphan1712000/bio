<?php

namespace controllers\template\components;

use component\Logo;
use component\Component;
use business\user\UserManagement;

class YourTemplate extends Component
{
    public function render()
    {
        $props = $this->props ?? [
            'isSignedIn' => false
        ];

        extract($props); // array destructuring

        $display = $isSignedIn ? "block" : "none";

        $warningDisplay = empty($purchased) ? "flex" : "none";

        $templates = "";

        if ($isSignedIn && !empty($purchased)) {
            $templates .= TemplateComponent::style(".template_container.purchase");
            foreach ($purchased as $item) {
                $templates .= (new TemplateComponent([
                    'id' => $item,
                    'img' => '../controllers/template/' . $item . '/' . $item . '.png',
                    'mode' => 'purchased',
                    'chosen' => $chosenTemplate,
                    'url' => UserManagement::URLGenerator($username, "share"),
                ]))->render();
            }
        }

        return '
            <div class="swiper-slide template-wrapper" style="display: ' . $display . '">
                <div class="heading">
                    ' . (new Logo([
            "src" => $g["img"]["logo"]
        ]))->render() . '
                    <h1>Your templates</h1>
                </div>

                <div class="notHaveTemplate" style="display: ' . $warningDisplay . '">
                    <p>You do not have templates</p>
                </div>

                <div class="swiper template_container purchase" style="display: <?= empty($purchased) ? "none" : "flex"; ?>
                    <div class="swiper-wrapper">
                        ' . $templates . '
                    </div>
                </div>
            </div>
        ';
    }
}
