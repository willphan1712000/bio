<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template3 implements ITemplate
{
  public function html($props)
  {
    $icon = SystemConfig::socialIconArr();
    $html = '
            <div id="template-container">
            <style>
              #social-media {
                padding: 0% 8%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 5%;
            }
            .social__img i {
              font-size: 20px;
            }
            .socialUser {
              background-color: #d9ad89 !important;
            }
            a {
              display: flex;
                justify-content: center;
                align-items: center;
            }
            .jewelry-shop {
              border-radius: 20px;
              background-color: #fff;
              display: flex;
              max-width: 480px;
              width: 100%;
              flex-direction: column;
              justify-content: center;
              margin: 0 auto;
            }

            .content-wrapper {
              display: flex;
              width: 100%;
              flex-direction: column;
              align-items: center;
              padding: 20px 26px 20px;
              border-radius: 40px;
            }

            .logo {
              aspect-ratio: 1;
              object-fit: cover;
              object-position: center;
              max-width: 100%;
              border-radius: 50%;
            }

            .shop-title {
              margin-top: 15px;
              text-align: center;
            }

            .tagline {
              margin-top: 9px;
              text-align: center;
            }

            .icon-container {
              border-radius: 30px;
              border: 1px solid rgba(217, 173, 137, 1);
              align-self: stretch;
              display: flex;
              margin-top: 15px;
              gap: 20px;
              justify-content: space-between;
              padding: 10px 48px;
            }

            .icon {
              aspect-ratio: 0.55;
              object-fit: auto;
              object-position: center;
              width: 16px;
            }

            .icon-2 {
              aspect-ratio: 1;
              object-fit: auto;
              object-position: center;
              width: 29px;
            }

            .icon-3 {
              aspect-ratio: 0.83;
              object-fit: auto;
              object-position: center;
              width: 24px;
            }

            .icon-4 {
              aspect-ratio: 0.86;
              object-fit: auto;
              object-position: center;
              width: 25px;
            }

            .icon-5 {
              aspect-ratio: 1.43;
              object-fit: auto;
              object-position: center;
              width: 30px;
              margin: auto 0;
            }

            .shop-all-button {
              border-radius: 10px;
              border: 1px solid rgba(217, 173, 137, 1);
              align-self: stretch;
              display: flex;
              margin-top: 25px;
              gap: 9px;
              font-size: 22px;
              color: #000;
              font-weight: 400;
            }

            .shop-all-image {
              aspect-ratio: 2.5;
              object-fit: auto;
              object-position: center;
              width: 239px;
            }

            .shop-all-text {
              font-family: Castoro, sans-serif;
              font-style: italic;
              flex-grow: 1;
              flex-basis: auto;
              margin: auto 0;
            }

            .story-container {
              display: flex;
              flex-direction: column;
              overflow: hidden;
              position: relative;
              aspect-ratio: 3.88;
              width: 372px;
              font-size: 22px;
              color: #000;
              font-weight: 400;
              justify-content: center;
              margin: 11px 0 123px;
            }

            .story-image {
              position: absolute;
              inset: 0;
              height: 100%;
              width: 100%;
              object-fit: cover;
              object-position: center;
            }

            .story-text-wrapper {
              position: relative;
              border-radius: 10px;
              border: 1px solid rgba(217, 173, 137, 1);
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: center;
              padding: 0 60px;
            }

            .story-text {
              font-family: Castoro, sans-serif;
              font-style: italic;
              background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 11.1%);
              width: 189px;
              max-width: 100%;
              align-items: start;
              justify-content: center;
              padding: 37px 38px;
            }

            .visually-hidden {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border: 0;
            }
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
            #avatar__container {
              border-radius: 50%;
              display: flex;
              width: 193px;
              height: 193px;
              align-items: center;
              justify-content: center;
              padding: 0 9px;
              box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
            </style>

            <section class="jewelry-shop">
              <div class="content-wrapper" id="template__background">
              <div id="avatar__container">
                <img id="avatar" draggable=false loading="lazy" src=' . $props['imgPath'] . ' class="logo" alt="Jewelry Shop Logo" />
              </div>
              <div id="text">
                <h1 class="shop-title template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
                 <p class="tagline template__font template_title">
                  ' . $props['info']['position']->getHTML() . '</p>
                  <p class="tagline template__font template_org">
                  ' . $props['info']['organization']->getHTML() . '</p>
                <textarea class="des template__font template_des" style="border: none;
                resize: none;
                background: transparent;
                width: 80vw;
                text-align: center;
                margin: 0px;
                height: 70px;
                scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
              </div>
                <nav class="icon-container">
                ' . $props['info']['Facebook']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49f66af27cf65ef6b13acdf34efdc81d3b8bd777925a503041e71d4774da0738?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon" alt="Navigation Icon 1" />') . '
                ' . $props['info']['Instagram']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9ca01f01fe0de3d01068aced92664353afad2a7eeee4339b0dab4121cd67c1?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon-2" alt="Navigation Icon 2" />') . '
                ' . $props['info']['Website']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a997ead6a3fa349a746bf98ddffb34732dc07673732dd27f24ad007a133a57?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon-3" alt="Navigation Icon 3" style="display: none;"/>') . '
                ' . $props['info']['Tiktok']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/694401f71d23033db96ad84981d7524d368ecc4480b88c1b64088c0d17b72dc6?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon-4" alt="Navigation Icon 4" />') . '
                ' . $props['info']['Youtube']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/642ac05796d795ebd2a19013e100293d05cc2df926419342da3e347834961d6f?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon-5" alt="Navigation Icon 5" />') . '
                </nav>
                <div id="social-media" class="flex flex-col gap-3">
                ' . $props['info']['Mobile']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#d9ad89] p-[10px]"><div class="flex justify-center items-center">' . $icon['Mobile'] . '</div><p class="ml-[40px]">Mobile</p></div>') . '
                ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#d9ad89] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
                ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#d9ad89] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
                ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#d9ad89] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
                
              </div>
              </div>
            </section>
            </div>
            ';
    echo $html;
  }
}
