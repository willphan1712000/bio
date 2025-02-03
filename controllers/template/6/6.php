<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template6 implements ITemplate
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
.profile-card {
  border-radius: 40px;
  background-color: #9be2de;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.profile-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
}

.avatar-container {
  align-self: stretch;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 40px 40px 0px 0px;
}

.avatar-wrapper {
  border-radius: 50%;
  z-index: 0;
  width: 210px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border: solid 6px #fff;
}

.avatar {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 50%;
}

.profile-name {
  margin-top: 15px;
  text-align: center;
}

.profile-bio {
  margin-top: 7px;
  text-align: center;
  padding: 0px 20px;
}

.social-links {
  border-radius: 35px;
  border: 2px solid #fff;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  padding: 5px 10px;
  width: 92%;
  align-items: center;
}

.social-icon {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 35px;
  display: block;
}

.social-icon-small {
  width: 31px;
  margin: auto 0;
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
</style>

<article class="profile-card">
  <div class="profile-content" id="template__background">
    <div style="margin-top: 60px;">
    <div id="avatar__container--wrapper" style="position: relative;">
      <div class="avatar-container">
        <div class="avatar-wrapper" id="avatar__container" style="overflow: hidden;">
          <img id="avatar" draggable=false loading="lazy" src="' . $props['imgPath'] . '" class="avatar" alt="Profile avatar" />
        </div>
      </div>
    </div>
    </div>
    <div id="text">
    <h1 class="profile-name template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
     <p class="profile-bio template__font template_title">
      ' . $props['info']['position']->getHTML() . '</p>
      <p class="profile-bio template__font template_org">
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
    ' . $props['info']['Facebook']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd3e99876742f505189785dc61cbf5743fc1c6051b0f0e93e91c5c678b53cc6a?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon social-icon-small" alt="" />') . '
    ' . $props['info']['Instagram']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61f4df13c5846adda448e9e22ccf0931841adaa51fad5e87b3a0b64eb0dd5aed?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />') . '
    ' . $props['info']['Tiktok']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04ec5d7a194e8fb66b0fd42a9bc061db9cbc134e795949565bc5f3c159a00338?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />') . '
    ' . $props['info']['Youtube']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/934a8e3a8051c44ffb19978bfd955d75b6a33669bb886c920fec4b0d0fd7793e?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />') . '
    </nav>
    <div id="social-media" class="flex flex-col gap-3">
    ' . $props['info']['Mobile']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Mobile'] . '</div><p class="ml-[40px]">Mobile</p></div>') . '
    ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
    ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
    ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#f3effb] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
    
  </div>
  </div>
</article>
</div>
            ';
    echo $html;
  }
}
