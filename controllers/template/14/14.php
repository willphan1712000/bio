<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template14 implements ITemplate
{
    public function html($props)
    {
        $icon = SystemConfig::socialIconArr();
        $html = '
            <style>
                #template__background {
                    background: ' . $props['css']['background'] . ';
                }
                .template__font {
                    font-family: ' . $props['css']['font'] . ';
                    font-size: ' . $props['css']['fontSize'] . ';
                    color: ' . $props['css']['fontColor'] . ';
                }
                .template_name {
                    font-size: calc(' . $props['css']['fontSize'] . ' + 15px);
                }
            </style>

            <div class="w-screen">
            <div class="flex flex-col bg-white max-w-[414px] p-[10px] w-full">
            <div class="flex flex-col px-8 pt-6 w-full bg-[#5eb2e5] rounded-t-3xl" id="template__background">
            <div class="flex gap-5 justify-between w-full">
                <div class="flex gap-8">
                    <div
                    class="flex flex-col justify-center items-center p-1.5 bg-white rounded-full aspect-square size-[150px]"
                    >
                    <img
                        loading="lazy"
                        src="' . $props['imgPath'] . '"
                        alt="Travel profile avatar"
                        class="object-contain rounded-full aspect-square size-full"
                    />
                    </div>
                    <div class="my-auto text-5xl text-white basis-auto template__font template_name">' . $props['info']['name']->getHTML() . '</div>
                </div>
                </div>
                 <div class="title-wrapper w-full flex flex-col justify-center items-center mt-[20px]" id="text">
                    <p class="hero-description template__font template_title">
                    ' . $props['info']['position']->getHTML() . '</p>
                    <p class="hero-description template__font template_org">
                    ' . $props['info']['organization']->getHTML() . '</p>
                    <textarea class="hero-description template__font template_des" style="border: none;
                    resize: none;
                    background: transparent;
                    width: 100%;
                    text-align: center;
                    margin: 0px;
                    height: 130px;
                    scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
                </div>
            </div>
            <div class="flex items-center justify-center">
            <div id="social-media" class="flex flex-col gap-3 z-[0] mt-[10px]">
                ' . $props['info']['Mobile']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Mobile'] . '</div><p class="ml-[40px]">Mobile</p></div>') . '
                ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
                ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
            </div>
            </div>
            <div class="flex flex-row justify-center px-14 py-5 mt-2 overflow-hidden gap-7 bg-[#5eb2e5] rounded-b-3xl sticky bottom-0" id="template__background">
                ' . $props['info']['Facebook']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/339fa9ac81d114b330d6caaeaf5994e93ef9c01ee462424838292e642f945ce9?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[60px]"
                    alt="Brand logo icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Instagram']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a9c53e8696fa328ba2f43ea48fdd187e486651b5b8e416d9958f86242d247f?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.02] w-[60px]"
                    alt="Brand logo icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Tiktok']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cf2e4516a4444030aec02cdfc22d8020b1ef0c543f031bf01695564679105f0?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[60px]"
                    alt="Brand logo icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Youtube']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ed134b246d7835416d7ee34f755bd147e94eebbed6c31201d6319004f96c92?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.02] w-[60px]"
                    alt="Brand logo icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['X']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1926fadd0a1fc72858af39221ecf6891564c7dd451a8d7f3da9f0e911b8bdf26?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[60px]"
                    alt="Brand logo icon"
                    tabindex="0"
                />') . '
                </div>
            </div>
            </div>
        ';
        echo $html;
    }
}
