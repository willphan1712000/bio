<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template19 extends TemplateStyle implements ITemplate
{
    public function html($props)
    {
        $icon = SystemConfig::socialIconArr();
        $html = $this->commonStyle($props) . '
            <div class="w-screen">
            <div class="flex flex-col rounded-3xl max-w-[430px] p-[10px]" role="region" aria-label="Photographer Profile">
            <div class="flex overflow-hidden flex-col items-center w-full rounded-3xl bg-zinc-800" id="template__background">
                <div class="flex relative flex-col items-center self-stretch p-6 w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfce7616bc5277140b7edd3cd5c550e511d7955e6919806d5ef870790fae33d?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    alt="Background profile cover"
                    class="object-cover absolute inset-0 size-full"
                />
                <div id="avatar__container--wrapper" style="position: relative;">
                    <div>
                        <div id="avatar__container" style="overflow: hidden;" class="flex relative flex-col justify-center items-center px-1 bg-white rounded-full shadow-[0px_0px_7px_rgba(0,0,0,0.4)] w-[150px] object-contain aspect-square border-white border-[3px]">
                            <img
                            loading="lazy"
                            src="' . $props['imgPath'] . '"
                            alt="John Williams profile picture"
                            class=""
                            />
                        </div>
                    </div>
                </div>
                <div id="text" class="flex flex-col items-center text-center">
                <h1 class="relative mt-2 text-2xl text-white template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
                <p class="relative text-base leading-5 text-center text-white template__font template_title">
                ' . $props['info']['position']->getHTML() . '</p>
                <p class="relative text-base leading-5 text-center text-white template__font template_org">
                ' . $props['info']['organization']->getHTML() . '</p>
                <textarea class="z-0 hero-description template__font template_des" style="border: none;
                    resize: none;
                    background: transparent;
                    width: 100%;
                    text-align: center;
                    margin: 0px;
                    height: 110px;
                    scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
                </div>
                <div class="flex gap-9 mt-[10px] z-0 justify-evenly">
                ' . $props['info']['Facebook']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a871abb91c88f38a5e5b4a9a1686ce0fd435c8770d41791051d9cf8da9d45ef?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[35px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Instagram']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44840b89cd9a6cac609d5c804a594b598e7aa5ed703491e653b19d996de78348?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[35px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Tiktok']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/64fddd50843543a7fe1bd86e931faa66fd9c06ba46f81df37c864f6634faad83?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[0.97] w-[35px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Youtube']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea394f725e73168b87cf3c3fa42e822637010ec143c7a570002a9507a3ff8e92?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[35px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['X']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/099c293a5476bddaf9db2e8759e6fdcdb5ac6a21e6310d194222ef7a82abee61?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[35px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
                </div>
                ' . $props['info']['Mobile']->getHTML('<button
                    class="flex relative z-10 flex-col justify-center self-stretch p-1.5 mt-5 mb-0 text-2xl font-bold leading-none text-center whitespace-nowrap border-2 border-white border-solid text-zinc-800 w-full"
                    aria-label="View Services"
                >
                    <span class="px-16 py-2.5 bg-white w-full">Contact Me</span>
                </button>') . '
                ' . $props['info']['Website']->getHTML('<button
                    class="flex relative z-10 flex-col justify-center self-stretch p-1.5 mt-5 mb-0 text-2xl font-bold leading-none text-center whitespace-nowrap border-2 border-white border-solid text-zinc-800 w-full"
                    aria-label="View Services"
                >
                    <span class="px-16 py-2.5 bg-white w-full">About Me</span>
                </button>') . '
                <div class="flex justify-center items-center my-[10px]">
                    <div id="social-media" class="flex flex-col gap-3 z-[0] mt-[10px]">
                        ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
                        ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        ';
        echo $html;
    }
}
