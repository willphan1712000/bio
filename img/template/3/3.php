<?php
$socialNameArr = ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];

$socialIconArr = ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
?>
<div id="template-container" style="width:100%;">
<style>
  .social {
    background-color: #d9ad89; 
  }
a {
  display: flex;
    justify-content: center;
    align-items: center;
}
.jewelry-shop {
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.content-wrapper {
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 35px 26px 80px;
}

.logo {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 267px;
  max-width: 100%;
  border-radius: 50%;
}

.shop-title {
  color: #000;
  margin-top: 27px;
  font: italic 400 28px Castoro, sans-serif;
}

.tagline {
  color: #c59975;
  margin-top: 9px;
  font: 400 15px Barlow Semi Condensed, -apple-system, Roboto, Helvetica, sans-serif;
  text-align: center;
}

.icon-container {
  border-radius: 30px;
  border: 1px solid rgba(217, 173, 137, 1);
  align-self: stretch;
  display: flex;
  margin-top: 21px;
  gap: 20px;
  justify-content: space-between;
  padding: 10px 48px;
}

.icon {
  aspect-ratio: 0.55;
  object-fit: auto;
  object-position: center;
  width: 16px;
}

.icon-2 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 29px;
}

.icon-3 {
  aspect-ratio: 0.83;
  object-fit: auto;
  object-position: center;
  width: 24px;
}

.icon-4 {
  aspect-ratio: 0.86;
  object-fit: auto;
  object-position: center;
  width: 25px;
}

.icon-5 {
  aspect-ratio: 1.43;
  object-fit: auto;
  object-position: center;
  width: 30px;
  margin: auto 0;
}

.shop-all-button {
  border-radius: 10px;
  border: 1px solid rgba(217, 173, 137, 1);
  align-self: stretch;
  display: flex;
  margin-top: 25px;
  gap: 9px;
  font-size: 22px;
  color: #000;
  font-weight: 400;
}

.shop-all-image {
  aspect-ratio: 2.5;
  object-fit: auto;
  object-position: center;
  width: 239px;
}

.shop-all-text {
  font-family: Castoro, sans-serif;
  font-style: italic;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
}

.story-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  aspect-ratio: 3.88;
  width: 372px;
  font-size: 22px;
  color: #000;
  font-weight: 400;
  justify-content: center;
  margin: 11px 0 123px;
}

.story-image {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.story-text-wrapper {
  position: relative;
  border-radius: 10px;
  border: 1px solid rgba(217, 173, 137, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0 60px;
}

.story-text {
  font-family: Castoro, sans-serif;
  font-style: italic;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 11.1%);
  width: 189px;
  max-width: 100%;
  align-items: start;
  justify-content: center;
  padding: 37px 38px;
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

<section class="jewelry-shop">
  <div class="content-wrapper">
    <img loading="lazy" src=<?=$props['imgPath']."?v=".time();?> class="logo" alt="Jewelry Shop Logo" />
    <h1 class="shop-title"><?=$infoObject->name()['a'];?></h1>
    <p class="tagline"><?=$infoObject->organization()['a'];?></p>
    <p class="tagline"><?=$infoObject->description()['a'];?></p>
    <nav class="icon-container">
    <?=$infoObject->social('Facebook', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49f66af27cf65ef6b13acdf34efdc81d3b8bd777925a503041e71d4774da0738?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon" alt="Navigation Icon 1" />')['a'];?>
    <?=$infoObject->social('Instagram', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9ca01f01fe0de3d01068aced92664353afad2a7eeee4339b0dab4121cd67c1?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon-2" alt="Navigation Icon 2" />')['a'];?>
    <?=$infoObject->social('Website', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a997ead6a3fa349a746bf98ddffb34732dc07673732dd27f24ad007a133a57?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon-3" alt="Navigation Icon 3" />')['a'];?>
    <?=$infoObject->social('Tiktok', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/694401f71d23033db96ad84981d7524d368ecc4480b88c1b64088c0d17b72dc6?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon-4" alt="Navigation Icon 4" />')['a'];?>
    <?=$infoObject->social('Youtube', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/642ac05796d795ebd2a19013e100293d05cc2df926419342da3e347834961d6f?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="icon-5" alt="Navigation Icon 5" />')['a'];?>
    </nav>
    <div id="social-media">
        <?php
            $exception = ["Facebook", "Instagram", "Website", "Tiktok", "Youtube"];
            for($i = 0; $i < count($socialNameArr); $i++) {
              if(!in_array($socialNameArr[$i], $exception)) {
                $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
                echo '
                    <div class="social '.$socialNameArr[$i].'" style="display: '.$infoObject->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p>'.$infoObject->social($socialNameArr[$i])['a'].'</div></div></div></div>
                ';
              }
            }
        ?>
    </div>
  </div>
</section>
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