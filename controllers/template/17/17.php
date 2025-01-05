<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template17 implements ITemplate
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

            <div class="flex flex-col rounded-3xl max-w-[430px] w-full p-[10px]" role="region" aria-label="Perfume Product Section">
            <div id="template__background"
                class="flex overflow-hidden flex-col items-center p-4 w-full bg-yellow-100 rounded-3xl"
            >
                <div class="flex gap-5 w-full">
                <div class="flex flex-col grow shrink-0 items-center basis-0 w-full justify-center">
                    <img
                    loading="lazy"
                    src="' . $props['imgPath'] . '"
                    class="object-contain max-w-full aspect-square w-[134px] rounded-[50%] border-[#f472b6] border-[5px]"
                    alt="Perfume bottle display"
                    />
                    <div class="mt-2 text-2xl text-pink-400 template__font template_name" role="heading" aria-level="2">' . $props['info']['name']->getHTML() . '</div>
                    <div class="text-center self-stretch mt-1.5 text-base text-rose-300 template__font">
                    ' . $props['info']['position']->getHTML() . " - " . $props['info']['organization']->getHTML() . '
                    </div>
                    <textarea class="hero-description template__font template_des" style="border: none;
                    resize: none;
                    background: transparent;
                    width: 100%;
                    text-align: center;
                    margin: 0px;
                    height: 100px;
                    scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
                </div>
                </div>
                <div
                class="flex flex-col justify-center items-center py-2 w-full bg-rose-300"
                >
                <div class="flex overflow-hidden gap-7">
                    ' . $props['info']['Facebook']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b5482edf8e2743ab0e8ae01038268da4bd96b5daae5820375702bac0d5f571?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-[1.03] w-[38px]"
                        alt="Company logo 1"
                    />') . '
                    ' . $props['info']['Instagram']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ae82cd741eedd7333b83114df29024f2996352bb5037193124e6349767b5c8?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-[1.03] w-[38px]"
                        alt="Company logo 2"
                    />') . '
                    ' . $props['info']['Tiktok']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5240ae996b2bb43ec7ed52ef461eae093e77b6f040dcc5b09a5f52f9f684396d?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-square w-[37px]"
                        alt="Company logo 3"
                    />') . '
                    ' . $props['info']['Youtube']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ef300672e07323412639301712f15bcd6f0a7f85d4afb4304f65032e1136ba?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-[1.03] w-[38px]"
                        alt="Company logo 4"
                    />') . '
                    ' . $props['info']['X']->getHTML('<img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f573b1ddf63f056095653839b6caaea3bc32b4f0c2a839748cc2d4ab4f7a5e07?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-contain shrink-0 aspect-[1.03] w-[38px]"
                        alt="Company logo 5"
                    />') . '
                    </div>
                </div>
                ' . $props['info']['Mobile']->getHTML('<button
                class="px-16 py-3 mt-2.5 w-full text-2xl font-extrabold text-white bg-rose-300 max-w-[375px] rounded-[30px]"
                >
                Contact us
                </button>') . '
                <div class="flex justify-center items-center my-[10px]">
                    <div id="social-media" class="flex flex-col gap-3 z-[0] mt-[10px]">
                        ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
                        ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
                        ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                    </div>
                </div>
                <div
                    class="flex shrink-0 self-center max-w-full h-3 bg-rose-300 rounded-[30px] w-[332px]"
                    role="presentation"
                ></div>
            </div>
            </div>
        ';
        echo $html;
    }
}
