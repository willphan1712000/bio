<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template7 implements ITemplate
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
    margin-bottom: 2%;
}
.social__img i {
  font-size: 20px;
}
.beauty-section {
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
}
.hero-banner {
  border-radius: 50%;
  align-self: stretch;
  display: flex;
  position: relative;
  top: 0px;
  flex-direction: column;
  align-items: center;
  padding: 0 0px 66px;
}
.hero-image {
  aspect-ratio: 1.92;
  object-fit: cover;
  object-position: center;
  width: 100%;
  fill: linear-gradient(270deg, #c504fe 0%, #f718f1 100%);
  align-self: stretch;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero-title {
  text-align: center;
}
.hero-description {
  text-align: center;
}
.feature-icons {
  border-radius: 12px;
  box-shadow: 0 0 12px 2px rgba(181, 49, 161, 0.25);
  background-color: #fff;
  z-index: 10;
  display: flex;
  margin: auto;
  margin-top: -40px;
  width: 85%;
  max-width: 369px;
  justify-content: space-evenly;
  align-items: center;
  padding: 22px 27px;
  height: 80px;
}
.feature-icon {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 50px;
}
.cta-container {
  border-radius: 12px;
  box-shadow: 0 0 12px 2px rgba(181, 49, 161, 0.25);
  background-color: #fff;
  display: flex;
  margin-top: 59px;
  width: 100%;
  max-width: 369px;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  padding: 13px 21px;
}
.cta-button {
  border-radius: 5px;
  border: 1px solid #bd00ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 60px;
  margin-top: 16px;
}
.cta-button:first-child {
  margin-top: 0;
}
.cta-text {
  font-family: Inter, sans-serif;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%);
}
.avatar-wrapper {
  border-radius: 50%;
  background-color: #fff;
  padding: 5px;
  position: absolute;
  width: 45%;
  top: 5%;
}
.avatar-img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
#social-media {
  margin: 10px 0px 10px 0px;
}
   #template__background-strict {
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

<section class="beauty-section" id="template__background-strict">
  <header class="hero-banner">
    <div id="avatar__container--wrapper" style="position: absolute;" class="avatar-wrapper">
        <div id="avatar__container" style="overflow: hidden; border-radius: 50%;">
          <img id="avatar" draggable=false draggable="false" src=' . $props['imgPath'] . ' alt="" class="avatar-img">
        </div>
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dea77032a51d516ad82d4f4cfed164a9c9523bf104fffca6e4ef09b29db5de62?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="hero-image" alt="Beauty product showcase" />
    <div class="title-wrapper w-[60%]" id="text">
      <h1 class="hero-title template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
      <p class="hero-description template__font template_title">
      ' . $props['info']['position']->getHTML() . '</p>
      <p class="hero-description template__font template_org">
      ' . $props['info']['organization']->getHTML() . '</p>
      <textarea class="hero-description template__font template_des" style="border: none;
      resize: none;
      background: transparent;
      width: 100%;
      text-align: center;
      margin: 0px;
      height: 50px;
      scrollbar-width: none;">
      ' . $props['info']['description']->getHTML() . '
      </textarea>
    </div>
  </header>
  <div class="feature-icons">
  ' . $props['info']['Facebook']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f998daf1a5914f376fea12e07efbe55395c8bf1943ceeb08dd2b7307234ff11?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="feature-icon" alt="Beauty feature 1" />') . '
  ' . $props['info']['Instagram']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/89608fb58786d9ccf68551e93e5ba393ff8851fb9b84d7fab554366c8494af3c?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="feature-icon" alt="Beauty feature 2" />') . '
  ' . $props['info']['Youtube']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/343cc0e154d9e7ed6e679f4ec926be79845cce0c03be37660c2ac01d5bb1f116?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="feature-icon" alt="Beauty feature 3" />') . '
  ' . $props['info']['Tiktok']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd9c75c409cc7f69c0cfc2f5e1edcf38b0405e99d61cafe95b747f0fbb2c7ac?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="feature-icon" alt="Beauty feature 4" />') . '
  </div>
  <div id="social-media" class="flex flex-col gap-3">
    ' . $props['info']['Mobile']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Mobile'] . '</div><p class="ml-[40px]">Mobile</p></div>') . '
    ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
    ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
    ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
    
  </div>
</section>
</div>
            ';
    echo $html;
  }
}
