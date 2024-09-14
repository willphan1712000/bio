<?php

class Template10 extends Template {
    private $props;
    public function __construct($props) {
        $this->props = $props;
    }
    public function html() {
        $props = $this->props;
        
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
    background: '.$props['css']['background'].';
}
.template__font {
    font-family: '.$props['css']['font'].';
    font-size: '.$props['css']['fontSize'].';
    color: '.$props['css']['fontColor'].';
}
.template_name {
    font-size: calc('.$props['css']['fontSize'].' + 15px);
}
#avatar__container {
    margin-top: 35px;
}
</style>

<main class="fashion-show-container" id="template__background">
<div id="avatar__container">
  <img 	id="avatar" draggable=false src="'.$props['imgPath'].'" alt="Fashion Show Hero Image" class="hero-image" /></div>
  <div id="text">
  <h1 class="main-title template__font template_name">'.$props['info']->name()[$props['mode']].'</h1>
  <p class="des template__font template_org">'.$props['info']->organization()[$props['mode']].'</p>
  <p class="des template__font template_des">'.$props['info']->description()[$props['mode']].'</p>
  </div>
  <nav class="social-links">
  '.$props['info']->social('Facebook', ' <div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6f0cf7b4c3eb8e670601c61cc30afc7ea46efe75ca8f98a5f8f9649aee6497?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Facebook</span>
      </div>')[$props['mode']].'
  '.$props['info']->social('Instagram', '<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/406f99e2876ec60b3fe915758299ce753fcefa6a397a2a9cc14e86b7769f07e8?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Instagram</span>
      </div>')[$props['mode']].'
  '.$props['info']->social('Tiktok', '<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9640d6fcd0e2ffb558786d7f0ebe3d9ec7a87327b3263c59345ba8cbbf7326ef?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Tiktok</span>
      </div>')[$props['mode']].'
  </nav>
  '.$props['info']->social('Website', '<div class="cta-button" role="button">Website</div>')[$props['mode']].'
  '.$props['info']->mobile('<div class="cta-button" role="button">Contact</div>')[$props['mode']].'
  <div id="social-media">
    '.socialMediaIcon($props)->render().'
</div>
</main>
</div>
            ';
            echo $html;
        }
}
