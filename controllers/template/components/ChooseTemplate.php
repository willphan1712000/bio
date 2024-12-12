<?php

namespace controllers\template\components;

use component\Logo;
use component\Component;
use controllers\template\components\Filter;
use controllers\template\components\TemplateComponent;

class ChooseTemplate extends Component
{
    public function render()
    {
        $props = $this->props ?? [
            'isSignedIn' => false
        ];

        extract($props); // array destructuring

        $display = count($purchased) === ($TOTAL - 1) ? "none" : "block";

        $templates = "";

        for ($i = 1; $i < $TOTAL; $i++) {
            if (!in_array($i, $purchased)) {
                $templates .= (new TemplateComponent([
                    'id' => $i,
                    'img' => '../controllers/template/' . $i . '/' . $i . '.png',
                    'mode' => 'purchase'
                ]))->render();
            }
        }

        return '
            <div class="swiper-slide template-wrapper" style="display: ' . $display . '">
                <div class="heading mb-[20px]">
                    ' . (new Logo([
            "src" => $g["img"]["logo"]
        ]))->render() . '
                    <h1>Choose Your Template</h1>
                </div>

                ' . (new Filter([
            'like' => '/@template?filter=like',
            'industry' => '/@template?filter=industry',
            'color' => '/@template?filter=color',
            'popular' => '/@template?filter=popular'
        ]))->render() . '

                <div class="swiper template_container show">
                    <div class="swiper-wrapper">
                        ' . TemplateComponent::style(".template_container.show") . $templates . '
                    </div>
                </div>
            </div>
        ';
    }
}
