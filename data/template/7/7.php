<?php

class Template7 extends Template {
    private $props;
    const PROPS = [
        'id' => '7',
        'name' => 'Template ID 7',
        'price' => parent::PRICE,
        'image' => 'template/7/7.png',
        'description' => '',
    ];
    public function __construct($props) {
        $this->props = $props;
    }
    public function html() {
        $props = $this->props;
        $certain = ["Mobile", "Work", "Email", "Website"];
        $socialNameArr = $props["social"];
        $socialIconArr = $props["icon"];
        $html1 = "";
        for($i = 0; $i < count($socialNameArr); $i++) {
            if(in_array($socialNameArr[$i], $certain)) {
                $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
                $html1 .= $props['info']->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$props['info']->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')['a'];
            }
        }
        
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
    background: linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%);
    align-self: stretch;
    display: flex;
    width: 130%;
    position: relative;
    top: 0px;
    left: -58px;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 0 0px 66px;
    height: 370px;
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
  position: absolute;
  top: 56%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero-title {
  font: 900 22px Inter, sans-serif;
  text-align: center;
}
.hero-description {
  text-align: center;
  margin-top: 10px;
  font: 400 13px Inter, sans-serif;
  padding: 0% 20%;
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
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%);
}
.avatar-wrapper {
  border-radius: 50%;
  background-color: #fff;
  padding: 6px;
  position: absolute;
  width: 35%;
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
</style>

<section class="beauty-section">
  <header class="hero-banner">
    <div class="avatar-wrapper">
      <img draggable="false" src='.$props['imgPath'].' alt="" class="avatar-img">
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dea77032a51d516ad82d4f4cfed164a9c9523bf104fffca6e4ef09b29db5de62?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="hero-image" alt="Beauty product showcase" />
    <div class="title-wrapper">
      <h1 class="hero-title">'.$props['info']->name()['a'].'</h1>
      <p class="hero-description">
      '.$props['info']->organization()['a'].'
      </p>
      <p class="hero-description">
      '.$props['info']->description()['a'].'
      </p>
    </div>
  </header>
  <div class="feature-icons">
  '.$props['info']->social('Facebook', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f998daf1a5914f376fea12e07efbe55395c8bf1943ceeb08dd2b7307234ff11?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="feature-icon" alt="Beauty feature 1" />')['a'].'
  '.$props['info']->social('Instagram', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/89608fb58786d9ccf68551e93e5ba393ff8851fb9b84d7fab554366c8494af3c?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="feature-icon" alt="Beauty feature 2" />')['a'].'
  '.$props['info']->social('Youtube', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/343cc0e154d9e7ed6e679f4ec926be79845cce0c03be37660c2ac01d5bb1f116?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="feature-icon" alt="Beauty feature 3" />')['a'].'
  '.$props['info']->social('Tiktok', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd9c75c409cc7f69c0cfc2f5e1edcf38b0405e99d61cafe95b747f0fbb2c7ac?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="feature-icon" alt="Beauty feature 4" />')['a'].'
  </div>
  <div id="social-media">
    '.$html1.'
</div>
</section>
</div>
</div>
            ';
            echo $html;
        }
}
