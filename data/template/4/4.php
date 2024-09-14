<?php

class Template4 extends Template {
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
}
.social__img i {
  font-size: 20px;
}
.beauty-store-container {
  border-radius: 40px;
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
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
  align-items: center;
  border-radius: 40px;
}

.background-image {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.header-section {
  position: relative;
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 14px;
}

.logo-container {
  border-radius: 50%;
  background-color: var(--Purple-Gradient, linear-gradient(180deg, rgba(164, 96, 251, 0.6) 54.34%, rgba(211, 178, 255, 0.6) 100%));
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 5% 25%;
}

.logo-wrapper {
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  background-color: #fff;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  margin-bottom: -74px;
  width: 100%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
}

.logo {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 50%;
}

.store-title {
  text-align: center;
  margin-top: 30%;
}

.store-tagline {
  text-align: center;
  margin-top: 8px;
}

.social-icons {
  position: relative;
  display: flex;
  margin-top: 0px;
  gap: 20px;
  justify-content: space-between;
  padding: 0 20px;
}

.social-icon {
  aspect-ratio: 1.03;
  object-fit: cover;
  object-position: center;
  width: 30px;
}

.cta-button {
  position: relative;
  border-radius: 30px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  margin-top: 3%;
  width: 80vw;
  color: #a986e2;
  text-align: center;
  padding: 10px 60px;
  font: 400 18px Bree Serif, sans-serif;
  border: none;
}

.footer-section {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 2%;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 1%;
}
.footer-img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90vw;
}

.footer-line {
  aspect-ratio: 100;
  object-position: center;
  width: 40%;
  border: 2px solid #fff;
  align-self: stretch;
  max-width: 100%;
  margin: auto 0;
}

.footer-icon {
  aspect-ratio: 1;
  object-position: center;
  width: 5%;
  margin: 0% 1%;
  align-self: stretch;
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

<main class="beauty-store-container">
  <div class="content-wrapper">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b2362f6ba779394de3a3b1b8f2e67bf84ed59db574f51e0bff4ad560120f8c?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="background-image" alt="" />
    <header class="header-section" id="template__background">
      <div class="logo-container">
        <div class="logo-wrapper" id="avatar__container">
          <img id="avatar" draggable=false loading="lazy" src="'.$props['imgPath'].'" class="logo" alt="Beauty Store Logo" />
        </div>
      </div>
      <div id="text">
      <h1 class="store-title template__font template_name">'.$props['info']->name()[$props['mode']].'</h1>
      <p class="store-tagline template__font template_org">'.$props['info']->organization()[$props['mode']].'</p>
      <p class="store-tagline template__font template_des">'.$props['info']->description()[$props['mode']].'</p>
      </div>
    </header>
    <nav class="social-icons">
    '.$props['info']->social('Facebook', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ea41de828736f1e15f80c9282ea77b388e47791a9c9f62b7f37ddd55e4f9230?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="Social Media Icon" />')[$props['mode']].'
    '.$props['info']->social('Instagram', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fca1acb0dd0ed414bda53010526ed7ddcaea708e29305577edfafe6d420f350e?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="Social Media Icon" />')[$props['mode']].'
    '.$props['info']->social('Tiktok', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eb0d1c72f40ec1fd67015d51ca222901f4ab1634fdcfa55f336ce506df26b2?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="Social Media Icon" />')[$props['mode']].'
    '.$props['info']->social('X', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd8a31ac23e0db3b44e83cd3b3c34b1956646a6758da1abe3ee44a8d52436b1?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="Social Media Icon" />')[$props['mode']].'
    </nav>
    '.$props['info']->social('Website', ' <button class="cta-button">Shop All</button>')[$props['mode']].'
    '.$props['info']->mobile('<button class="cta-button">Contact</button>')[$props['mode']].'
    <footer class="footer-section">
      <div class="footer-img">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9b8c07f7ca146900402bf6683a3f7d6bc792db71df115bf9454f37b3385e94?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-line" alt="" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d73be22492798534bb5818d9d502dd92688efaeeed6b13d949bb8c1bc1ae927?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon" alt="Footer Icon" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9b8c07f7ca146900402bf6683a3f7d6bc792db71df115bf9454f37b3385e94?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-line" alt="" />
    </div>
    <div id="social-media">
    '.socialMediaIcon($props)->render().'
</div>
    </footer>
  </div>
</main>
</div>
            ';
            echo $html;
        }
}