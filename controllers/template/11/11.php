<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template11 implements ITemplate
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
                <div class="p-[10px] w-screen">
                <div id = "template__background"
                    class="bg-[#89e6c9] w-full flex overflow-hidden flex-col text-base rounded-3xl h-[680px]"
                    role="region"
                    aria-label="Contact Form Section"
                    >
                    <div
                        class="flex relative flex-col text-center text-white text-opacity-70"
                    >
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d9fa22e906862e5df6bcf11194edb43feaa6a074ba2affc6e324e8d73eab1e8?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-cover absolute inset-0 size-full"
                        alt=""
                        />
                        <div
                        class="flex relative z-10 flex-col py-7 px-10 -mb-3.5 aspect-[1.161] w-full"
                        >
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0873355e06aaad1a13c2fe9cb5abde67ef18a0da44a8f2da0d862bd43487a6ad?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                            class="object-cover absolute inset-0 size-full"
                            alt=""
                        />
                        <img
                            loading="lazy"
                            src="' . $props['imgPath'] . '"
                            class="rounded-[50%] border-[2px] border-white object-contain self-center max-w-full aspect-square w-[120px] z-0 mb-[15px]"
                            alt="Company Logo"
                        />
                        <div class="relative text-[20px] template__font template_name">
                            ' . $props['info']['name']->getHTML() . '
                        </div>
                        <p class="relative template__font template_title">
                        ' . $props['info']['position']->getHTML() . '</p>
                        <p class="relative template__font template_org">
                        ' . $props['info']['organization']->getHTML() . '</p>
                        <div class="relative">
                            <textarea class="des template__font template_des" style="border: none;
                                resize: none;
                                background: transparent;
                                width: 100%;
                                text-align: center;
                                margin: 0px;
                                height: 70px;
                                scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
                        </div>
                        <div class="relative z-0">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/932bfd8db53154a18856fc15052b5e26bbae33f6720d99d64c988592a70f1661?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                            class="object-contain mt-4 aspect-[3.69] w-[354px]"
                            alt="Decorative Banner"
                        />
                        ' . $props['info']['Facebook']->getHTML('<div class="Facebook absolute top-[20px] left-0 w-[100px] h-[100px]"></div>') . '
                        ' . $props['info']['Instagram']->getHTML('<div class="Instagram absolute top-[20px] left-[130px] w-[100px] h-[100px]"></div>') . '
                        ' . $props['info']['Youtube']->getHTML('<div class="Youtube absolute top-[20px] right-0 w-[100px] h-[100px]"></div>') . '
                        </div>
                        </div>
                    </div>
                    <form
                        class="flex relative flex-col items-center self-center px-6 pt-2.5 mt-1.5 w-full font-bold text-white aspect-[0.924] max-w-[354px]"
                        aria-label="Contact Form"
                    >
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/753c6050cb1e7116025bd58bfcb6b4a8e0a5afef7ee6e448b9288201d68a0d21?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                        class="object-cover absolute inset-0 size-full"
                        alt=""
                        />
                        <div id="social-media" class="flex flex-col gap-3 z-[0] mt-[10px] text-black">
                            ' . $props['info']['Mobile']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fff] p-[10px]"><div class="flex justify-center items-center">' . $icon['Mobile'] . '</div><p class="ml-[40px]">Mobile</p></div>') . '
                            ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fff] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
                            ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fff] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                            ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fff] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
                        </div>
                    </form>
                </div>
                </div>
        ';
        echo $html;
    }
}
