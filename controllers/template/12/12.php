<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template12 implements ITemplate
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
        <div class="flex overflow-hidden flex-col bg-white rounded-3xl max-w-[430px] w-screen p-[10px]" role="region" aria-label="Hot Summer Collection">
        <div id="template__background"
            class="flex flex-col px-7 pt-5 w-full rounded-3xl"
        >
            <div id="avatar__container--wrapper" style="position: relative;" class="self-center w-[150px]">
                <div id="avatar__container" style="overflow: hidden;" class="rounded-[50%] shadow-[0px_0px_15px_rgba(0,0,0,0.35)]">
                <img
                    loading="lazy"
                    src="' . $props['imgPath'] . '"
                    alt="Summer Collection Logo"
                    class="object-contain"
                />
                </div>
            </div>
            <div id="text" class="flex items-center flex-col justify-center">
            <div class="self-center mt-7 text-base font-extralight text-white template__font template_name">
            ' . $props['info']['name']->getHTML() . '
            </div>
            <p class="self-center mt-1 text-base font-extralight text-white template__font template_title">
            ' . $props['info']['position']->getHTML() . '</p>
            <p class="self-center mt-1 text-base font-extralight text-white template__font template_org">
            ' . $props['info']['organization']->getHTML() . '</p>
            <textarea class="des template__font template_des" style="border: none;
                resize: none;
                background: transparent;
                width: 100%;
                text-align: center;
                margin: 0px;
                height: 70px;
                scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
                </div>
            <div class="flex overflow-hidden gap-7 justify-center px-8 py-1.5 mt-4 border border-white border-solid rounded-[50px]">
                ' . $props['info']['Facebook']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f03b070a296817167022b7564e51b0651f06f45ef7df6c213e758ff33f258cfb?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 w-10 aspect-square"
                    alt="Company Logo 1"
                />') . '
                ' . $props['info']['Instagram']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f12f4aab8818414c688adc3a2e2c0ac57b10f1b5df2e17eb091e98f9c1a998e2?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 w-10 aspect-square"
                    alt="Company Logo 2"
                />') . '
                ' . $props['info']['Tiktok']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f154abfdf4a2b76a989628e0fc4c7e0707bd4c736593ecd9d7858f122f93236c?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.02] w-[41px]"
                    alt="Company Logo 3"
                />') . '
                ' . $props['info']['Youtube']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/448fb6cbdeda0a5df958a7a73838ae0adf03d259b61d8f9a8bede2fe6247fff7?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 w-10 aspect-square"
                    alt="Company Logo 4"
                />') . '
                ' . $props['info']['X']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc99e472c6257a239e520de11a96a374dfd462c2275fa45c6fc6ac72946221b2?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 w-10 aspect-square"
                    alt="Company Logo 5"
                />
                </div>') . '
            <div
            class="flex relative flex-col pt-12 mt-1 text-base font-black text-white rounded-none aspect-[1.871] w-full"
            >
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c84c1879b529c5e22236cae3a72354b724e279084c67b5094cf8c7cd309f54a?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                alt=""
                class="object-cover absolute inset-0 size-full z-[1]"
            />
            <div
                class="flex relative flex-col items-end pt-2.5 pr-5 pb-5 pl-20 bg-orange-400 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
                <div class="mr-14">HAPPY SHOPPING</div>
                ' . $props['info']['OrderOnline']->getHTML('<button
                class="relative z-[1] px-16 py-2 mt-2.5 max-w-full whitespace-nowrap bg-orange-600 rounded-[30px] shadow-[0px_2px_5px_rgba(0,0,0,0.25)] w-[242px] text-white"
                aria-label="Shop Now"
                >
                Shop
                </button>') . '
                ' . $props['info']['Mobile']->getHTML('<button
                class="relative z-[1] px-16 py-2 mt-2.5 max-w-full whitespace-nowrap bg-orange-600 rounded-[30px] shadow-[0px_2px_5px_rgba(0,0,0,0.25)] w-[242px] text-white"
                aria-label="Contact Us"
                >
                Contact
                </button>') . '
                
            </div>
            </div>
            <div class="flex items-center flex-col my-[15px]">
                <div id="social-media" class="flex flex-col gap-3">
                    ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                    ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
                </div>
            </div>
        </div>
        </div>
    ';
        echo $html;
    }
}
