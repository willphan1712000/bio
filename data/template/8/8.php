<?php

class Template8 extends Template {
    private $props;
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
                $html1 .= $props['info']->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$props['info']->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')[$props['mode']];
            }
        }
        
        $html = '
            <div id="template-container" style=" color: '.$props['css']['fontColor'].'; font-size: '.$props['css']['fontSize'].';">
<style>
  #social-media {
    padding: 0% 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.social__img i {
  font-size: 20px;
}
.doctor-card {
  border-radius: 30px;
  background: '.$props['css']['background'].';
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
}

.doctor-image {
  aspect-ratio: 1.41;
  object-fit: cover;
  width: 100%;
  height: 220px;
  border-radius: 30px 30px 0px 0px;
}

.doctor-info {
  display: flex;
  margin-top: 10px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  padding: 0 50px;
}

.doctor-name {
  text-align: center;
  font-family: '.$props['css']['font'].';
}

.experience {
  margin-top: 10px;
  text-align: center;
  font-family: '.$props['css']['font'].';
}

.hospital-info {
  display: flex;
  gap: 10px;
  color: #a5a5a5;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.hospital-icon {
  aspect-ratio: 0.81;
  object-fit: contain;
  width: 13px;
  align-self: start;
}

.hospital-name {
  flex-grow: 1;
  font-family: '.$props['css']['font'].';
}

.age-info {
  color: #fff;
  text-align: center;
  font-family: Inter, sans-serif;
  align-self: center;
  margin-top: 29px;
}

.submit-button {
  color: #fff;
  font-family: Inter, sans-serif;
  font-weight: 700;
  align-self: center;
  margin-top: 320px;
  background: none;
  border: none;
  cursor: pointer;
}

.social-icons {
  background: linear-gradient(90deg, #0094ff 0%, #0036f5 100%);
  display: flex;
  margin-top: 20px;
  gap: 20px;
  justify-content: space-evenly;
  padding: 18px 44px;
  position: sticky;
  width: 100%;
  bottom: 0;
  border-radius: 0px 0px 30px 30px;
}

.social-icon {
  aspect-ratio: 1;
  object-fit: contain;
  width: 35px;
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
</style>

<article class="doctor-card">
  <img draggable=false src='.$props['imgPath'].' alt="" class="doctor-image" />
  <div class="doctor-info">
    <h2 class="doctor-name">'.$props['info']->name()[$props['mode']].'</h2>
    <p class="experience">'.$props['info']->organization()[$props['mode']].'</p>
    <div class="hospital-info">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/776e3cfcfa82d98d51a9f608fe60490dbe6c756636ef36cde209a8f7bef2c756?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="hospital-icon" />
      <p class="hospital-name">'.$props['info']->description()[$props['mode']].'</p>
    </div>
  </div>
  <div id="social-media">
    '.$html1.'
</div>

  <nav class="social-icons">
  '.$props['info']->social('Facebook', '<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3393b75ab906daea2710ba571b17b57f43bb233b3c8623a2ae1e1a29ab313d45?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />')[$props['mode']].'
  '.$props['info']->social('Instagram', '<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d00bec11c237afc97cef1c9d77bd9d13265ba092a5fecfd431578cec09a9fd2?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />')[$props['mode']].'
  '.$props['info']->social('Tiktok', '<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b840cf3826c0dbf15ec9baf47ed92f476095bd64236949670956d0c8f005cd9?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />')[$props['mode']].'
  '.$props['info']->social('Youtube', '<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/db9b7b0af6f538262e1a23f01feca9f569a892fcbf9d83ce5525ed641cae444e?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />')[$props['mode']].'
  </nav>
</article>
</div>
            ';
            echo $html;
        }
}
