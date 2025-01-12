<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template18 implements ITemplate
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
            class="flex overflow-hidden flex-col font-bold text-white bg-white max-w-[430px] p-[10px]"
            role="region"
            aria-label="Fast Food Store Information"
            >
            <div class="flex relative flex-col items-center w-full bg-red-900 rounded-3xl" id="template__background">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7ae46aa07237da39c039ae39e1f8683652259ce649efa6d2b97721f60f71ad6?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                class="object-cover absolute inset-0 size-full rounded-3xl"
                alt="Fast Food Store Background"
                />
                <div class="w-full z-0 relative">
                    <img
                    loading="lazy"
                    src="' . $props['imgPath'] . '"
                    class="self-stretch size-full object-cover rounded-3xl aspect-[1.81]"
                    alt="Fast Food Store Banner"
                    />
                    <div class="flex flex-col rounded-none max-w-[324px] absolute bottom-[-25px] w-full" style="left: calc(50% - 162px);">
                        <div id="template__background"
                            class="flex gap-5 justify-between px-10 py-2.5 bg-red-900 rounded-xl border border-white border-solid"
                            role="region"
                            aria-label="Image Gallery"
                        >
                            ' . $props['info']['Facebook']->getHTML('<img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/992941d1922cc1db8c7c3e3700d95c0cc378822e1a9e3a089baab1ce209dd9ef?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                            class="object-contain shrink-0 aspect-[1.03] w-[34px]"
                            alt="Gallery Image 1"
                            />') . '
                            ' . $props['info']['Instagram']->getHTML('<img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1fe07560c41c9a798643c3566816423b928bc406a1123d151efa1b86e66bf09?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                            class="object-contain shrink-0 aspect-[1.03] w-[34px]"
                            alt="Gallery Image 2"
                            />') . '
                            ' . $props['info']['Tiktok']->getHTML('<img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d747d52ac487c09a6a6c7ddbbf1402c1e73d556c53ad20fbb10ff1a5e645b3d5?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                            class="object-contain shrink-0 aspect-[1.03] w-[34px]"
                            alt="Gallery Image 3"
                            />') . '
                            ' . $props['info']['X']->getHTML('<img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c495b41bdabb9e557a268634c0cafb5e28da656efef277640082318e0e7d6022?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                            class="object-contain shrink-0 aspect-[1.03] w-[34px]"
                            alt="Gallery Image 4"
                            />') . '
                        </div>
                    </div>
                </div>
                <h1 class="relative mt-[30px] text-3xl template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
                <div class="px-[10px] w-full flex justify-center items-center flex-col"
                <p class="text-center self-stretch mt-1.5 text-base text-rose-300 template__font template_title">
                ' . $props['info']['position']->getHTML() . '</p>
                <p class="text-center self-stretch mt-1.5 text-base text-rose-300 template__font template_org">
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
                ' . $props['info']['Website']->getHTML('<div
                href="#about"
                class="relative px-16 py-0.5 mt-2 max-w-full text-2xl text-red-900 bg-white rounded-xl w-[330px] text-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                role="button"
                >
                About us
                </div>') . '
                ' . $props['info']['Mobile']->getHTML('<div
                href="#contact"
                class="relative px-16 py-0.5 mt-2.5 w-full text-2xl text-red-900 whitespace-nowrap bg-white rounded-xl max-w-[330px] text-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                role="button"
                >
                Contact
                </div>') . '
                <div class="flex justify-center items-center my-[10px]">
                    <div id="social-media" class="flex flex-col gap-3 z-[0] mt-[10px] text-black">
                        ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
                        ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                    </div>
                </div>
                
            </div>
            </div>
            </div>
        ';
        echo $html;
    }
}
