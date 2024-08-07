<?php
$socialNameArr = ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];

$socialIconArr = ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
?>
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
  background: linear-gradient(180deg, #7bffda 0%, #6192fe 100%);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
}

.avatar-container {
  background: linear-gradient(180deg, #7bffda 0%, #6192fe 100%);
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
  color: #fff;
  margin-top: 70px;
  font: 400 35px Katibeh, sans-serif;
  text-align: center;
}

.profile-bio {
  color: #fff;
  margin-top: 7px;
  font: 600 15px Klee One, sans-serif;
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
</style>

<article class="profile-card">
  <div class="profile-content">
    <div class="avatar-container">
      <div class="avatar-wrapper">
        <img loading="lazy" src="<?=$props['imgPath'];?>" class="avatar" alt="Profile avatar" />
      </div>
    </div>
    <h1 class="profile-name"><?=$infoObject->name()['a'];?></h1>
    <p class="profile-bio"><?=$infoObject->organization()['a'];?></p>
    <p class="profile-bio"><?=$infoObject->description()['a'];?></p>
    <nav class="social-links">
    <?=$infoObject->social('Facebook', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd3e99876742f505189785dc61cbf5743fc1c6051b0f0e93e91c5c678b53cc6a?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon social-icon-small" alt="" />')['a'];?>
    <?=$infoObject->social('Instagram', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61f4df13c5846adda448e9e22ccf0931841adaa51fad5e87b3a0b64eb0dd5aed?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />')['a'];?>
    <?=$infoObject->social('Tiktok', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04ec5d7a194e8fb66b0fd42a9bc061db9cbc134e795949565bc5f3c159a00338?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />')['a'];?>
    <?=$infoObject->social('Youtube', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/934a8e3a8051c44ffb19978bfd955d75b6a33669bb886c920fec4b0d0fd7793e?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />')['a'];?>
    <?=$infoObject->social('Whatsapp', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb0a00488b77def76d0d1ecad2eb8e03c364157a8a63c30a14f09388a93f4bb?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="" />')['a'];?>
    </nav>
    <div id="social-media">
    <?php
        $certain = ['Mobile', 'Work', 'Email', 'Website'];
        for($i = 0; $i < count($socialNameArr); $i++) {
            if(in_array($socialNameArr[$i], $certain)) {
            $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
            echo $infoObject->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$infoObject->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')['a'];
            }
        }
    ?>
</div>
  </div>
</article>
</div>
</div>