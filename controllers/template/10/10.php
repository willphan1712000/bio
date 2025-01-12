<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template10 implements ITemplate
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
  .socialUser {
    background-color: #d9d9d9 !important;
  }
.social__img i {
  font-size: 20px;
}
.fashion-show-container {
  border-radius: 30px;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.hero-image {
  aspect-ratio: 1.11;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 200px;
  align-self: stretch;
  border-radius: 30px;
}

.des {
  text-align: center;
  padding: 0px 15px;
}

.main-title {
  margin-top: 10px;
  text-align: center;
}

.social-links {
  display: flex;
  margin-top: 10px;
  width: 100%;
  white-space: nowrap;
  justify-content: space-evenly;
}

.social-button {
  border-radius: 40px;
  background-color: #e8e8e8;
  display: flex;
  gap: 3px;
  flex: 1;
  padding: 7px 12px;
  font-family: Kulim Park, sans-serif;
  align-items: center;
  font-size: 13px;
}

.social-icon {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 23px;
}

.cta-button {
  display: flex;
  font-family: Kulim Park, sans-serif;
  border-radius: 30px;
  background-color: #d9d9d9;
  margin-top: 8px;
  width: 100%;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  padding: 5px 60px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
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
#social-media {
  margin-top: 10px;
  padding: 0px 20px 0px 20px;
}
.socialUser {
  background-color: #f0f0f0;
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
    width: 100%;
}
</style>

<main class="fashion-show-container" id="template__background">
<div id="avatar__container">
  <img 	id="avatar" draggable=false src="' . $props['imgPath'] . '" alt="Fashion Show Hero Image" class="hero-image" /></div>
  <div id="text">
  <h1 class="main-title template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
   <p class="des template__font template_title">
      ' . $props['info']['position']->getHTML() . '</p>
      <p class="des template__font template_org">
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
  <nav class="social-links">
  ' . $props['info']['Facebook']->getHTML('<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6f0cf7b4c3eb8e670601c61cc30afc7ea46efe75ca8f98a5f8f9649aee6497?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Facebook</span>
      </div>') . '
  ' . $props['info']['Instagram']->getHTML('<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/406f99e2876ec60b3fe915758299ce753fcefa6a397a2a9cc14e86b7769f07e8?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Instagram</span>
      </div>') . '
  ' . $props['info']['Tiktok']->getHTML('<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9640d6fcd0e2ffb558786d7f0ebe3d9ec7a87327b3263c59345ba8cbbf7326ef?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Tiktok</span>
      </div>') . '
  </nav>
  ' . $props['info']['Website']->getHTML('<div class="cta-button" role="button">Website</div>') . '
  ' . $props['info']['Mobile']->getHTML('<div class="cta-button" role="button">Contact</div>') . '
  <div id="social-media" class="flex flex-col gap-3">
    ' . $props['info']['Mobile']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f0f0f0] p-[10px]"><div class="flex justify-center items-center">' . $icon['Mobile'] . '</div><p class="ml-[40px]">Mobile</p></div>') . '
    ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f0f0f0] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
    ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f0f0f0] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
    ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f0f0f0] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
  </div>
</main>
</div>
            ';
    echo $html;
  }
}
