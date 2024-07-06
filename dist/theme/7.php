<?php
$socialNameArr = ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];

$socialIconArr = ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
?> <div id="template-container" style="width:100%;"><style>.beauty-container {
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding-bottom: 80px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.hero-section {
  border-radius: 50%;
  background: linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%);
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 66px;
}

.hero-image {
  aspect-ratio: 1.92;
  object-fit: auto;
  object-position: center;
  width: 100%;
  border-radius: 525px;
  align-self: stretch;
}

.hero-title {
  color: #fff;
  font: 900 22px Inter, sans-serif;
}

.hero-description {
  text-align: center;
  background-color: #fff;
  margin-top: 12px;
  font: 400 13px Inter, sans-serif;
}

.features-container {
  border-radius: 12px;
  box-shadow: 0 0 12px 2px rgba(181, 49, 161, 0.25);
  background-color: #fff;
  z-index: 10;
  display: flex;
  margin-top: -40px;
  width: 100%;
  max-width: 369px;
  gap: 20px;
  justify-content: space-between;
  padding: 22px 27px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 60px;
  white-space: nowrap;
  font-family: Inter, sans-serif;
}

.primary-button {
  background: linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%);
  color: #fff;
}

.secondary-button {
  border-radius: 5px;
  border: 1px solid #bd00ff;
  margin-top: 16px;
}

.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%);
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
}</style><main class="beauty-container"><section class="hero-section"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/179687d76c90ffd05b3b1b80d90c0ee31f024823d3ad7d58c868c7c1ee98c055?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Beauty product showcase" class="hero-image"><h1 class="hero-title"><?=$infoObject->name()['a'];?></h1><p class="hero-description"> <?=$infoObject->organization()['a'];?> </p><p class="hero-description"> <?=$infoObject->description()['a'];?> </p></section><section class="features-container"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f998daf1a5914f376fea12e07efbe55395c8bf1943ceeb08dd2b7307234ff11?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Feature 1" class="feature-icon"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/89608fb58786d9ccf68551e93e5ba393ff8851fb9b84d7fab554366c8494af3c?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Feature 2" class="feature-icon"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/343cc0e154d9e7ed6e679f4ec926be79845cce0c03be37660c2ac01d5bb1f116?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Feature 3" class="feature-icon"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd9c75c409cc7f69c0cfc2f5e1edcf38b0405e99d61cafe95b747f0fbb2c7ac?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Feature 4" class="feature-icon"></section><section class="cta-container"><button class="cta-button primary-button">Facilities</button> <button class="cta-button secondary-button">Treatments</button> <button class="cta-button secondary-button"><span class="gradient-text">About more</span></button></section></main></div><div id="userFooter"> <?php
        userFooter($props)->render("#userFooter");
    ?> </div><div id="copyright"><p><?=$props['g']['license'];?></p></div>