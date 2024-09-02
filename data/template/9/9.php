<?php

class Template9 extends Template {
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
                $html1 .= $props['info']->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$props['info']->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')['a'];
            }
        }
        
        $html = '
            <div id="template-container" style=" color: '.$props['css']['fontColor'].'; font-size: '.$props['css']['fontSize'].';">
<style>
#social-media {
  padding: 0% 8%;
}
.social__img i {
  font-size: 20px;
}
.socialUser {
  background-color: #ffe1e1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.beauty-store {
  border-radius: 30px;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding: 16px 0 0;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.logo-container {
  background-color: #ff8fab;
  border-radius: 50%;
  display: flex;
  width: 193px;
  height: 193px;
  align-items: center;
  justify-content: center;
  padding: 0 9px;
}

.logo {
  aspect-ratio: 0.97;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 50%;
}

.store-title {
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.25), 0 0 20px #fff;
  text-align: center;
  font-family: '.$props['css']['font'].';
}

.nav-buttons {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
  justify-content: space-evenly;
  width: 100%;
}

.nav-button {
  font-family: Urbanist, sans-serif;
  border-radius: 30px;
  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.25);
  background-color: #ff8fab;
  justify-content: center;
  padding: 12px 40px;
  color: #fff;
}

.footer {
  background-color: #ff8fab;
  align-self: stretch;
  display: flex;
  margin-top: 10px;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 19px 58px;
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  bottom: 0;
  width: 100%;
  border-radius: 0px 0px 30px 30px;
}

.footer-icon {
  aspect-ratio: 0.55;
  object-fit: auto;
  object-position: center;
  width: 18px;
}

.footer-icon-large {
  aspect-ratio: 0.97;
  object-fit: auto;
  object-position: center;
  width: 32px;
  align-self: stretch;
}

.footer-icon-medium {
  aspect-ratio: 0.82;
  object-fit: auto;
  object-position: center;
  width: 27px;
}

.footer-icon-square {
  aspect-ratio: 0.88;
  object-fit: auto;
  object-position: center;
  width: 29px;
}

.footer-icon-wide {
  aspect-ratio: 1.47;
  object-fit: auto;
  object-position: center;
  width: 34px;
  align-self: stretch;
  margin: auto 0;
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
.des {
  text-align: center;
  padding: 1% 5%;
  font-family: '.$props['css']['font'].';
}
#background {
    background: '.$props['css']['background'].';
}
</style>

<main class="beauty-store" id="background">
  <div class="logo-container">
    <img draggable=false loading="lazy" src="'.$props['imgPath'].'" class="logo" alt="Beauty store logo" />
  </div>
  <h1 class="store-title">'.$props['info']->name()['a'].'</h1>
  <p class="des">'.$props['info']->organization()['a'].'</p>
  <p class="des">'.$props['info']->description()['a'].'</p>
  <nav class="nav-buttons">
  '.$props['info']->social('Website', '<div class="nav-button">Shop All</div>')['a'].'
  '.$props['info']->mobile('<div class="nav-button">Contact us</div>')['a'].'
  </nav>
  <div id="social-media">
    '.$html1.'
  </div>
  <footer class="footer">
  '.$props['info']->social('Facebook', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db6fbffb3e2aa916f4f11adeef0e403764cd3857a6f2cd91eb306e6a046e38c5?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon" alt="" />')['a'].'
  '.$props['info']->social('Instagram', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ce9a5b93101496d86b45b2af246ca2036999f090d70d709c4f3ce06bb68ccc?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon-large" alt="" />')['a'].'
  '.$props['info']->social('Website', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/796c2f9a30e5a6a38d1b204f5010bcf5b57685a59af1e250440f37d9ab1f5e43?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon-medium" alt="" />')['a'].'
  '.$props['info']->social('Tiktok', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fda2ccdede6a0ff4d33533a6cf9f7c56a1d7231e1c882e40db336ad8c5a46e5?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon-square" alt="" />')['a'].'
  '.$props['info']->social('Youtube', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30497f2e2b486df94a3dcaa71ac790f83870e98917a96a365c60a240226c5a42?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon-wide" alt="" />')['a'].'
  </footer>
</main>
</div>
            ';
            echo $html;
        }
}
