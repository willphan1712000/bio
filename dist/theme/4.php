<?php
$socialNameArr = ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];

$socialIconArr = ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
?> <div id="template-container"><style>#social-media {
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
  background: linear-gradient(180deg, #7b32f3 22.19%, rgba(197, 171, 245, 0) 99.87%);
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
  color: #fff;
  text-align: center;
  margin-top: 25%;
  font: 700 25px Be Vietnam, sans-serif;
}

.store-tagline {
  color: #fff;
  text-align: center;
  margin-top: 8px;
  font: italic 300 15px Be Vietnam, -apple-system, Roboto, Helvetica, sans-serif;
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
}</style><main class="beauty-store-container"><div class="content-wrapper"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b2362f6ba779394de3a3b1b8f2e67bf84ed59db574f51e0bff4ad560120f8c?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="background-image" alt=""><header class="header-section"><div class="logo-container"><div class="logo-wrapper"><img loading="lazy" src="<?=$props['imgPath']."?v=".time();?>" class="logo" alt="Beauty Store Logo"></div></div><h1 class="store-title"><?=$infoObject->name()['a'];?></h1><p class="store-tagline"><?=$infoObject->organization()['a'];?></p><p class="store-tagline"><?=$infoObject->description()['a'];?></p></header><nav class="social-icons"> <?=$infoObject->social('Facebook', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ea41de828736f1e15f80c9282ea77b388e47791a9c9f62b7f37ddd55e4f9230?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="Social Media Icon" />')['a'];?> <?=$infoObject->social('Instagram', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fca1acb0dd0ed414bda53010526ed7ddcaea708e29305577edfafe6d420f350e?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="Social Media Icon" />')['a'];?> <?=$infoObject->social('Tiktok', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eb0d1c72f40ec1fd67015d51ca222901f4ab1634fdcfa55f336ce506df26b2?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="Social Media Icon" />')['a'];?> <?=$infoObject->social('X', '<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd8a31ac23e0db3b44e83cd3b3c34b1956646a6758da1abe3ee44a8d52436b1?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="social-icon" alt="Social Media Icon" />')['a'];?> </nav> <?=$infoObject->social('Website', ' <button class="cta-button">Shop All</button>')['a'];?> <?=$infoObject->mobile('<button class="cta-button">Contact</button>')['a'];?> <footer class="footer-section"><div class="footer-img"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9b8c07f7ca146900402bf6683a3f7d6bc792db71df115bf9454f37b3385e94?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-line" alt=""> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d73be22492798534bb5818d9d502dd92688efaeeed6b13d949bb8c1bc1ae927?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon" alt="Footer Icon"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9b8c07f7ca146900402bf6683a3f7d6bc792db71df115bf9454f37b3385e94?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-line" alt=""></div><div id="social-media"> <?php
        $certain = ['Mobile', 'Work', 'Email', 'Website'];
        for($i = 0; $i < count($socialNameArr); $i++) {
            if(in_array($socialNameArr[$i], $certain)) {
            $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
            echo $infoObject->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$infoObject->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')['a'];
            }
        }
    ?> </div></footer></div></main></div><div id="userFooter"> <?php
        userFooter($props)->render("#userFooter");
    ?> </div><div id="copyright"><p><?=$props['g']['license'];?></p></div>