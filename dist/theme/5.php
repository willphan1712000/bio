<?php
$socialNameArr = ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];

$socialIconArr = ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
?> <div id="template-container" style="width:100%;"><style>.bakery-container {
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.hero-image {
  aspect-ratio: 1.27;
  object-fit: cover;
  width: 100%;
}

.tagline {
  color: #a6a6a6;
  margin-top: 12px;
  font: 400 14px Raleway, sans-serif;
  padding: 0px 30px;
}

.feature-grid {
  display: flex;
  margin-top: 22px;
  width: 100%;
  max-width: 378px;
  gap: 20px;
  justify-content: space-between;
}

.feature-card {
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.35);
  background-color: #ffa3a3;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 173px;
  height: 173px;
  padding: 23px 31px;
}

.feature-icon {
  aspect-ratio: 1;
  object-fit: contain;
  width: 57px;
}

.feature-title {
  font: 400 25px Ramabhadra, sans-serif;
  color: #fff;
  margin-top: 17px;
}

.feature-decoration {
  aspect-ratio: 5.88;
  object-fit: contain;
  width: 110px;
  margin-top: 18px;
}

.contact-section {
  margin-top: 32px;
  text-align: center;
}

.contact-title {
  color: #ff4d4d;
  font: 400 20px Ramabhadra, sans-serif;
}

.social-links {
  border-radius: 15px;
  border: 1px solid rgba(255, 178, 178, 1);
  display: flex;
  margin-top: 11px;
  gap: 20px;
  justify-content: space-between;
  padding: 10px 49px;
}

.social-icon {
  aspect-ratio: 1;
  object-fit: contain;
  width: 38px;
}

.footer-decoration {
  border-radius: 20px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.35);
  background-color: #ffa3a3;
  margin-top: 36px;
  width: 382px;
  max-width: 100%;
  height: 18px;
}
.backdrop {
  position: relative;
  margin-bottom: 130px;
}
.backdrop-child {
    position: absolute;
    width: 100%;
    text-align: center;
    border-radius: 30px 30px 0px 0px;
    background-color: #fff;
    bottom: -120px;
    padding-bottom: 10px;
}
.backdrop-child > h1 {
  margin-top: 20px;
  color: #fea3a3;
}</style><main class="bakery-container"><div class="backdrop"><img src="<?=$props['imgPath']."?v=".time();?>" alt="Bakery storefront" class="hero-image"><div class="backdrop-child"><h1><?=$infoObject->name()['a'];?></h1><p class="tagline"><?=$infoObject->organization()['a'];?></p><p class="tagline"><?=$infoObject->description()['a'];?></p></div></div><section class="feature-grid"> <?=$infoObject->social('Website', '<article class="feature-card">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/749732cd930f7b0ef812850a2bff0baf28c84089500fc31bb7109cd9edbb4b9c?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Store icon" class="feature-icon" />
      <h2 class="feature-title">Store</h2>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50f2829c38905973e74af073d4bf0b9dcd15ac7616f2b754f75ca873f1399c1f?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="feature-decoration" />
    </article>')['a'];?> <?=$infoObject->social('OrderOnline', '<article class="feature-card">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8efb78b7313897876caa9ce052502fdaf73f69c1fdb543985f5fa1c1c7880a68?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Book icon" class="feature-icon" />
      <h2 class="feature-title">Book</h2>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aef1d77f6506a99c3e4d297b08667d63c38182fc572aea40508f013ddc7f20af?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="feature-decoration" />
    </article>')['a'];?> </section><section class="feature-grid"> <?=$infoObject->social('', '<article class="feature-card">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/281ea7c8ef38440065862cb32d4229058493835a026843e66324ad713b396aee?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Products icon" class="feature-icon" />
      <h2 class="feature-title">Products</h2>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6759c04ceb8211fbb9f6b6b6cebeb75076e4cbb56b89fe70b689fba4813c106e?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="feature-decoration" />
    </article>')['a'];?> <?=$infoObject->address('<article class="feature-card">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d735676df68e66bb0ac96affaf6cf1b1f524e6ed377ede5580e92e8614c24b4?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="Location icon" class="feature-icon" />
      <h2 class="feature-title">Location</h2>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bce1179f942df19a8fe306929b5eb523745e82e56aae3ec69a033af550effb1?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="feature-decoration" />
    </article>')['a'];?> </section><section class="contact-section"><h2 class="contact-title">Contact us</h2><nav class="social-links"> <?=$infoObject->social('Facebook', '<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a33b95b1e96e864346811c9177fb38c1250e1daf363a1907428cc211f3962407?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />')['a'];?> <?=$infoObject->social('Instagram', '<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f115cc012d6f8f529c900770e080cfa35f379169a550de2cbeb5cd303f0dedb8?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />')['a'];?> <?=$infoObject->social('Youtube', '<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/89fdf680a6c918497445f6e47f7d4321aed48a35f28f1139214354ad6714e8d9?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />')['a'];?> <?=$infoObject->social('Tiktok', '<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec5c2c71e61bf3198f4f60c09fba45be81756eaaec96ad02d1e32847414f53c1?apiKey=076e1b6fb9564c54879ab1846aa9f941&" alt="" class="social-icon" />')['a'];?> </nav></section><div class="footer-decoration" role="presentation"></div></main></div><div id="userFooter"> <?php
        userFooter($props)->render("#userFooter");
    ?> </div><div id="copyright"><p><?=$props['g']['license'];?></p></div>