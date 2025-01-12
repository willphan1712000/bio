<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template15 implements ITemplate
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
            <div
            class="flex flex-col max-w-[455px] p-[10px] w-full"
            role="region"
            aria-label="Sultry and Smart Shopping Section"
            >
            <div class="flex flex-col items-center w-full rounded-3xl bg-[#f6cdd2]" id="template__background">
                <div class="flex flex-col gap-3.5 items-center w-full">
                <div
                    class="flex flex-col justify-center items-center px-1 mt-7 bg-pink-500 rounded-full border-2 border-white border-solid h-[120px] w-[120px]"
                >
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9418b757a65f0cd38b39081f840707db54b7293836ba8d82314dd38c7545e18f?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    alt="Sultry and Smart Profile"
                    class="object-contain rounded-full aspect-square size-full"
                    />
                </div>
                <div class="flex flex-col grow shrink-0 items-center basis-0 w-full px-[10px]">
                    <h1 class="mt-1 text-2xl font-semibold text-white template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
                    <p class="mt-2 text-base font-semibold text-white template__font template_title">
                    ' . $props['info']['position']->getHTML() . '</p>
                    <p class="mt-2 text-base font-semibold text-white template__font template_org">
                    ' . $props['info']['organization']->getHTML() . '</p>
                    <textarea class="hero-description template__font template_des" style="border: none;
                    resize: none;
                    background: transparent;
                    width: 100%;
                    text-align: center;
                    margin: 0px;
                    height: 70px;
                    scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
                </div>
                </div>
                <div class="flex flex-col justify-center items-center">
                   ' . $props['info']['Website']->getHTML('<button
                    class="px-16 py-2 mt-3 w-full text-2xl font-semibold tracking-wider text-white whitespace-nowrap bg-red-400 max-w-[362px] rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-center items-center"
                    aria-label="Shop Now"
                    >
                    Shop
                    </button>') . '
                   ' . $props['info']['Mobile']->getHTML('<button
                    class="px-16 py-2 mt-6 w-full text-2xl font-semibold tracking-wider text-white whitespace-nowrap bg-red-400 max-w-[362px] rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-center items-center"
                    aria-label="Contact Us"
                    >
                    Contact
                    </button>') . '        
                </div>
                <div class="flex items-center justify-center pt-[15px]">
                    <div id="social-media" class="flex flex-col gap-3 z-[0] mt-[10px]">
                        ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                        ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
                    </div>
                </div>
                <div
                class="flex z-10 flex-col justify-center self-stretch px-9 py-3.5 mt-7 mb-0 w-full bg-red-400 rounded-b-3xl sticky bottom-0"
                >
                <div class="flex overflow-hidden gap-8">
                    ' . $props['info']['Facebook']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef68a5bb658f98c40d28524a8d3c718ba55138af7cda927f67d555f3a7e037b7?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-square w-[45px]"
                        alt="Brand logo icon 1"
                    />') . '
                    ' . $props['info']['Instagram']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98e8ba60982cb2434e9a16e571d427607366f5436296211071081e428129078?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-[1.02] w-[46px]"
                        alt="Brand logo icon 2"
                    />') . '
                    ' . $props['info']['Tiktok']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8afac655ac6d0a62003d1369d7e8b88fc316f4cee9c2ef912c3fff21df6d9c4a?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-square w-[45px]"
                        alt="Brand logo icon 3"
                    />') . '
                    ' . $props['info']['Youtube']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf72e5d285f6f6646f1e16d05dfe30794d07aa98e396e43ebc0d5bd0f8860f?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-[1.02] w-[46px]"
                        alt="Brand logo icon 4"
                    />') . '
                    ' . $props['info']['X']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce5edc042eddbf4d1292b54270befea666125f7a6d187bb6a489038963ebb2c1?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-square w-[45px]"
                        alt="Brand logo icon 5"
                    />') . '
                    </div>
                </div>
            </div>
            </div>
            </div>
        ';
        echo $html;
    }
}
