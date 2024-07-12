<?php
$socialNameArr = ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];

$socialIconArr = ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
?>
<div id="template-container" style="width:100%;">
<style>
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
  <img src="<?=$props['imgPath']."?v=".time();?>" alt="Fashion Show Hero Image" class="hero-image" />
  <h1 class="main-title"><?=$infoObject->name()['a'];?></h1>
  <p class="des"><?=$infoObject->organization()['a'];?></p>
  <p class="des"><?=$infoObject->description()['a'];?></p>
  <nav class="social-links">
  <?=$infoObject->social('Facebook', ' <div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6f0cf7b4c3eb8e670601c61cc30afc7ea46efe75ca8f98a5f8f9649aee6497?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Facebook</span>
      </div>')['a'];?>
  <?=$infoObject->social('Instagram', '<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/406f99e2876ec60b3fe915758299ce753fcefa6a397a2a9cc14e86b7769f07e8?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Instagram</span>
      </div>')['a'];?>
  <?=$infoObject->social('Tiktok', '<div class="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9640d6fcd0e2ffb558786d7f0ebe3d9ec7a87327b3263c59345ba8cbbf7326ef?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />
        <span>Tiktok</span>
      </div>')['a'];?>
  </nav>
  <?=$infoObject->social('Website', '<div class="cta-button" role="button">Website</div>')['a'];?>
  <?=$infoObject->mobile('<div class="cta-button" role="button">Contact</div>')['a'];?>
  <div id="social-media">
    <?php
        $certain = ['Mobile', 'Work', 'Email', 'Website'];
        for($i = 0; $i < count($socialNameArr); $i++) {
            if(in_array($socialNameArr[$i], $certain)) {
            $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
            echo '
                <div class="socialUser '.$socialNameArr[$i].'" style="display: '.$infoObject->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p>'.$infoObject->social($socialNameArr[$i])['a'].'</div></div></div></div>
            ';
            }
        }
    ?>
</div>
</main>
</div>

<div id="userFooter">
    <?php
        userFooter($props)->render("#userFooter");
    ?>
</div>
</div>
<div id="copyright">
<p><?=$props['g']['license'];?></p>
</div>