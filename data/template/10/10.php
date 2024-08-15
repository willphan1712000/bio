<?php

class Template10 extends Template {
    private $props;
    const PROPS = [
        'id' => '10',
        'name' => 'Template ID 10',
        'price' => parent::PRICE,
        'image' => 'template/10/10.png',
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
.fashion-show-container {
  border-radius: 30px;
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: #000;
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
  font-size: 13px;
}

.main-title {
  margin-top: 10px;
  font: 28px Kulim Park, sans-serif;
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
</style>

<main class="fashion-show-container">
  <img src="'.$props['imgPath'].'" alt="Fashion Show Hero Image" class="hero-image" />
  <h1 class="main-title">'.$props['info']->name()['a'].'</h1>
  <p class="des">'.$props['info']->organization()['a'].'</p>
  <p class="des">'.$props['info']->description()['a'].'</p>
  <nav class="social-links">
  '.$props['info']->social('Facebook', ' <div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6f0cf7b4c3eb8e670601c61cc30afc7ea46efe75ca8f98a5f8f9649aee6497?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Facebook</span>
      </div>')['a'].'
  '.$props['info']->social('Instagram', '<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/406f99e2876ec60b3fe915758299ce753fcefa6a397a2a9cc14e86b7769f07e8?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Instagram</span>
      </div>')['a'].'
  '.$props['info']->social('Tiktok', '<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9640d6fcd0e2ffb558786d7f0ebe3d9ec7a87327b3263c59345ba8cbbf7326ef?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Tiktok</span>
      </div>')['a'].'
  </nav>
  '.$props['info']->social('Website', '<div class="cta-button" role="button">Website</div>')['a'].'
  '.$props['info']->mobile('<div class="cta-button" role="button">Contact</div>')['a'].'
  <div id="social-media">
    '.$html1.'
</div>
</main>
</div>
</div>
            ';
            echo $html;
        }
}
