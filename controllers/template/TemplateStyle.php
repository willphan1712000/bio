<?php

namespace controllers\template;

class TemplateStyle
{
    protected function commonStyle($props)
    {
        return '
            <style>
                #template__background {
                    background: ' . $props['css']['background'] . ';
                }
                .template__font {
                    font-family: ' . $props['css']['font'] . ';
                    font-size: ' . $props['css']['fontSize'] . ';
                    color: ' . $props['css']['fontColor'] . ';
                    width: 100%;
                }
                .template_name {
                    font-size: calc(' . $props['css']['fontSize'] . ' + 15px);
                }
            </style>
        ';
    }
}
