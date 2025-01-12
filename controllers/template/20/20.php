<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template20 implements ITemplate
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
            <div class="p-[10px] w-full flex justify-center items-center">
            <div id="template__background" class="flex overflow-hidden flex-col items-center bg-white max-w-[430px] rounded-3xl" role="region" aria-label="Beauty and Relaxation Section">
            <div class="flex relative flex-col self-stretch pb-2 w-full min-h-[179px]">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1323cc9b5d682453e10ed07e41be3075f078e103b83d12007a11adb30c4d4b3?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                class="object-cover absolute inset-0 size-full"
                alt="Beauty salon ambiance background"
                />
                <div class="flex relative flex-col pb-16 w-full min-h-[141px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44c0f646cb68e8559bfeae363aa2c4b3fbb602e507490f7ff18834c3fdc3be74?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-cover absolute inset-0 size-full"
                    alt="Spa treatment area"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9083da90a809cfa11af5ebcbcf6c1d2dbd04f3c76e603754f51be31a98bebe?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain w-full aspect-[5.52]"
                    alt="Decorative spa elements"
                />
                </div>
                <div class="absolute top-[40px]" style="left: calc(50% - 60px);">
                    <div class="rounded-[50%] border-[#ec4899] border-[4px] overflow-hidden w-[120px]">
                        <img src="' . $props['imgPath'] . '" class="size-full"/>
                    </div>
                </div>
            </div>
            <div class="w-full p-[10px] flex flex-col justify-center items-center">
            <div class="text-base font-light text-pink-500 template__font template_name" role="heading" aria-level="1">
                ' . $props['info']['name']->getHTML() . '
            </div>
            <p class="mt-3 text-base font-light text-pink-500 template__font template_title">
            ' . $props['info']['position']->getHTML() . '</p>
            <p class="mt-3 text-base font-light text-pink-500 template__font template_org">
            ' . $props['info']['organization']->getHTML() . '</p>
            <textarea class="z-0 hero-description template__font template_des" style="border: none;
                    resize: none;
                    background: transparent;
                    width: 100%;
                    text-align: center;
                    margin: 0px;
                    height: 100px;
                    scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
            </div>
            <div class="flex gap-8">
                ' . $props['info']['Facebook']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a9df3874c1ea03fdb7763de46060abcb4692c185b4c27df8ead12405811a656?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[40px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Instagram']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f96d838630217fd241350030dd1b1d0c364933bc2422103215c41b06dbbc776a?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[40px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['Tiktok']->getHTML('<img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf17f18cd1934be875a578890811e8f119ca03edeb836ae7af19bf5958feb41?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                class="object-contain shrink-0 aspect-[1.03] w-[40px]"
                alt="Social media icon"
                tabindex="0"
            />') . '
                ' . $props['info']['Youtube']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2520696fd45c682cfd8645ad38dc74a30039fd2544198cae6f4dc94cc5a091?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[40px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
                ' . $props['info']['X']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/af69247ee44be08eea0beefffbee9174f93a0d7f8d9b1ce909a81f0d1256d287?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[40px]"
                    alt="Social media icon"
                    tabindex="0"
                />') . '
            </div>
            <nav class="flex flex-col items-center w-full" role="navigation" aria-label="Main navigation">
            ' . $props['info']['Work']->getHTML('<div class="flex justify-center items-center flex-col">
                <div class="shrink-0 mt-1 max-w-full h-0.5 border-2 border-rose-300 border-solid w-[345px]" role="presentation"></div>
                <div href="#work" class="mt-2 text-xl font-semibold text-rose-300 hover:text-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 rounded-sm">Work</div>
                <div class="shrink-0 mt-2 max-w-full h-0.5 border-2 border-rose-300 border-solid w-[345px]" role="presentation"></div>
            </div>') . '
            ' . $props['info']['Mobile']->getHTML('<div class="flex justify-center items-center flex-col z-[2]">
                <div class="shrink-0 mt-2.5 max-w-full h-0.5 border-2 border-rose-300 border-solid w-[345px]" role="presentation"></div>
                <div href="#contact" class="mt-2 text-xl font-semibold text-rose-300 hover:text-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 rounded-sm">Contact</div>
                <div class="shrink-0 mt-2 max-w-full h-0.5 border-2 border-rose-300 border-solid w-[345px]" role="presentation"></div>
            </div>') . '
            </nav>
            <div class="flex justify-center items-center my-[10px] w-full relative">
                <div id="social-media" class="flex flex-col gap-3 z-[1] mt-[10px]">
                    ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
                    ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                </div>
                <div class="flex flex-col max-w-[430px] absolute top-[-60px] left-0 w-full z-[0]">
                    <div class="flex relative flex-col pt-12 w-full min-h-[248px]">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10bbbd13d5df0a85e9d0ff2a90dd83705cc6871e3678cf6647879db1664f2e98?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        alt=""
                        class="object-cover absolute inset-0 size-full"
                        role="presentation"
                        />
                        <div class="flex relative flex-col pt-20 w-full min-h-[200px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0016e96ce49ff2d10526a582f80551a87a022d09cf1372269ca67456a8ffbf4?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                            alt=""
                            class="object-cover absolute inset-0 size-full"
                            role="presentation"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce6c49336c12fbde8d3af677915d58185a9e16b58b6c69df3365744d479b3082?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                            alt=""
                            class="object-contain w-full aspect-[3.44]"
                            role="presentation"
                        />
                        </div>
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
