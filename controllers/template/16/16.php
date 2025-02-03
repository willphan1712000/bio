<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template16 implements ITemplate
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
            <div class="flex flex-col max-w-[430px] rounded-[29px] p-[10px] w-full" role="region" aria-label="Wedding Planning Services">
            <div class="flex overflow-hidden flex-col p-5 w-full rounded-[29px] bg-[linear-gradient(269deg,#FFDBFF_0.77%,#B1C6FE_99.23%)]" id="template__background">
                <div id="avatar__container--wrapper" style="position: relative;" class="self-center">
                    <div id="avatar__container" style="overflow: hidden;" class="flex gap-5 justify-center items-center object-contain shrink-0 max-w-full rounded-full aspect-square w-[150px] border-[3px] border-white">
                        <div>
                            <img
                                loading="lazy"
                                src="' . $props['imgPath'] . '"
                                alt="Featured Wedding Image"
                                class=""
                            />
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center flex-col w-full" id="text">
                    <h1 class="self-center mt-2 text-xl font-bold text-white template__font template_name">
                   ' . $props['info']['name']->getHTML() . '
                    </h1>
                    <p class="self-center mt-1.5 text-lg font-bold text-white text-center template__font template_title">
                    ' . $props['info']['position']->getHTML() . '</p>
                    <p class="self-center mt-1.5 text-lg font-bold text-white text-center template__font template_org">
                    ' . $props['info']['organization']->getHTML() . '</p>
                    <textarea class="hero-description template__font template_des" style="border: none;
                    resize: none;
                    background: transparent;
                    width: 100%;
                    text-align: center;
                    margin: 0px;
                    height: 120px;
                    scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
                </div>
                <div class="flex overflow-hidden gap-7 justify-center items-center mt-4">
                ' . $props['info']['Facebook']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5004f95ec01b213c8c4aee5110dcc817a7894a502b922c8e866faa9610b76421?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[38px]"
                    alt="Company logo 1"
                />') . '
                ' . $props['info']['Instagram']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/879576a2e3d447f6dfd4ecde0615b84ae7c1c6b9f331afb14e3c759e53ad7f37?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[38px]"
                    alt="Company logo 2"
                />') . '
                ' . $props['info']['Tiktok']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7bea26c46947881a1481361231af0052e8f0fd1c440cd2f6ff9a4ee3731cb95?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-square w-[37px]"
                    alt="Company logo 3"
                />') . '
                ' . $props['info']['Youtube']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d741288cb4fe09de206341ff4e68d76f337c3a21c555a07d7f70dbfb2d50af7c?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[38px]"
                    alt="Company logo 4"
                />') . '
                ' . $props['info']['X']->getHTML('<img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e206f35cb99124e1468c69797947031b02fc5ed59ccc0c30e9811d4b521aae6?placeholderIfAbsent=true&apiKey=076e1b6fb9564c54879ab1846aa9f941"
                    class="object-contain shrink-0 aspect-[1.03] w-[38px]"
                    alt="Company logo 5"
                />') . '
                </div>
                <div class="flex justify-center items-center">
                    <div id="social-media" class="flex flex-col gap-3 z-[0] mt-[10px]">
                        ' . $props['info']['Mobile']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Mobile'] . '</div><p class="ml-[40px]">Mobile</p></div>') . '
                        ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
                        ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                    </div>
                </div>
                <div class="flex gap-5 justify-between mt-4 text-xl font-bold text-white">
                ' . $props['info']['Website']->getHTML('<button
                    class="px-4 py-3 bg-fuchsia-300 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white"
                    aria-label="Learn more about our wedding planning services"
                >
                    About us
                </button>') . '
                ' . $props['info']['Mobile']->getHTML('<button
                    class="px-4 py-3 whitespace-nowrap bg-indigo-400 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white"
                    aria-label="Contact our wedding planning team"
                >
                    Contact
                </button>') . '
                </div>
            </div>
            </div>
            </div>
        ';
        echo $html;
    }
}
