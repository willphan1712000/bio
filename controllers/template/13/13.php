<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template13 implements ITemplate
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

            <div
            class="flex overflow-hidden flex-col bg-white max-w-[430px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-screen p-[10px]"
            role="region"
            aria-label="Digma Office Information Section"
            >
            <div class="w-full">
            <div
                class="flex relative flex-col items-center pt-11 pb-4 w-full min-h-[660px] px-[20px] rounded-3xl overflow-hidden"
            >
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/641b0ca1b5e3f1bb5aa40312273b130cdf47eff4160fab41ce2f065ee0c472aa?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                class="object-cover absolute inset-0 size-full"
                alt=""
                />
                <div
                class="flex relative flex-col items-center self-stretch px-20 w-full bg-white h-[70px] justify-center"
                >
                
                <div id="avatar__container--wrapper" style="position: relative;">
                    <div id="avatar__container" style="overflow: hidden;" class="object-contain z-0 mt-0 mb-0 max-w-full aspect-square w-[125px] rounded-[50%] border-[3px] border-white">
                    <img
                        loading="lazy"
                        src="' . $props['imgPath'] . '"
                        alt="Digma Office Logo"
                    />
                    </div>
                </div>
                </div>
                <div id="text">
                <div class="relative mt-8 text-2xl font-bold text-white template__font template_name">' . $props['info']['name']->getHTML() . '</div>
                <p class="relative mt-1 text-base tracking-widest text-white template__font template_title">
                ' . $props['info']['position']->getHTML() . '</p>
                <p class="relative mt-1 text-base tracking-widest text-white template__font template_org">
                ' . $props['info']['organization']->getHTML() . '</p>
                <div class="relative w-full">
                <textarea class="des template_des template__font" style="border: none;
                    resize: none;
                    background: transparent;
                    width: 100%;
                    text-align: center;
                    margin: 0px;
                    height: 70px;
                    scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
                </div>
                </div>
                <div class="flex gap-9 z-0 mt-[10px]">
                ' . $props['info']['Facebook']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/992941d1922cc1db8c7c3e3700d95c0cc378822e1a9e3a089baab1ce209dd9ef?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[34px]"
                    alt="Company logo icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Instagram']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1fe07560c41c9a798643c3566816423b928bc406a1123d151efa1b86e66bf09?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[34px]"
                    alt="Company logo icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Tiktok']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d747d52ac487c09a6a6c7ddbbf1402c1e73d556c53ad20fbb10ff1a5e645b3d5?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[34px]"
                    alt="Company logo icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['X']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c495b41bdabb9e557a268634c0cafb5e28da656efef277640082318e0e7d6022?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[34px]"
                    alt="Company logo icon"
                    tabindex="0"
                />') . '
                </div>
                <div class="relative mt-2.5 text-base tracking-widest text-white">
                My Information
                </div>
                ' . $props['info']['Website']->getHTML('<button
                class="relative px-16 py-3.5 mt-3 w-full text-xl font-bold text-sky-500 whitespace-nowrap bg-white rounded-xl max-w-[381px] hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                type="button"
                >
                SERVICES
                </button>') . '
                ' . $props['info']['Mobile']->getHTML('<button
                class="relative px-16 py-3.5 mt-2 w-full text-xl font-bold text-sky-500 whitespace-nowrap bg-white rounded-xl max-w-[381px] hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                type="button"
                >
                CONTACT
                </button>') . '
                <div class="relative mt-2.5 text-base tracking-widest text-white">
                About More
                </div>
                <div id="social-media" class="flex flex-col gap-3 z-[0] mt-[10px]">
                    ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fff] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
                    ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fff] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                </div>
            </div>
            </div>
            </div>
        ';
        echo $html;
    }
}
