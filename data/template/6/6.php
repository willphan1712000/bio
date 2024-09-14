<?php

class Template6 extends Template {
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
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 41px 60px 0;
  border-radius: 40px 40px 0px 0px;
}

.avatar-wrapper {
  background-color: #fff;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  margin-bottom: -66px;
  width: 210px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  padding: 0 6px;
}

.avatar {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 50%;
}

.profile-name {
  margin-top: 70px;
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
</style>

<article class="profile-card">
  <div class="profile-content" id="template__background">
    <div class="avatar-container">
      <div class="avatar-wrapper" id="avatar__container">
        <img id="avatar" draggable=false loading="lazy" src="'.$props['imgPath'].'" class="avatar" alt="Profile avatar" />
      </div>
    </div>
    <div id="text">
    <h1 class="profile-name template__font template_name">'.$props['info']->name()[$props['mode']].'</h1>
    <p class="profile-bio template__font template_org">'.$props['info']->organization()[$props['mode']].'</p>
    <p class="profile-bio template__font template_des">'.$props['info']->description()[$props['mode']].'</p>
    </div>
    <nav class="social-links">
    '.$props['info']->social('Facebook', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd3e99876742f505189785dc61cbf5743fc1c6051b0f0e93e91c5c678b53cc6a?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon social-icon-small" alt="" />')[$props['mode']].'
    '.$props['info']->social('Instagram', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61f4df13c5846adda448e9e22ccf0931841adaa51fad5e87b3a0b64eb0dd5aed?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />')[$props['mode']].'
    '.$props['info']->social('Tiktok', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04ec5d7a194e8fb66b0fd42a9bc061db9cbc134e795949565bc5f3c159a00338?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />')[$props['mode']].'
    '.$props['info']->social('Youtube', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/934a8e3a8051c44ffb19978bfd955d75b6a33669bb886c920fec4b0d0fd7793e?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />')[$props['mode']].'
    </nav>
    <div id="social-media">
    '.socialMediaIcon($props)->render().'
</div>
  </div>
</article>
</div>
            ';
            echo $html;
        }
}
