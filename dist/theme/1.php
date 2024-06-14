<?php
$socialNameArr = ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];

$socialIconArr = ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
?> <style>.shareWindow_parent.active {
    visibility: visible;
    opacity: 1;
}
.shareWindow_parent {
    background-color: #0000002b;
    width: 100vw;
    height: 100vh;
    height: 100svh;
    height: 100dvh;
    backdrop-filter: blur(6px);
    position: fixed;
    display: flex;
    z-index: 99;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: all .2s cubic-bezier(0.4, 0, 0.58, 1.4)
}
.adminSection {
    margin: 30px 0px;
    border-radius: 20px;
    width: 600px;
    background-color: #fff;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}
.info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 20px;
    padding: 10px;
    border-radius: 20px;
    border: none;
}
.info__img--location {
    overflow: hidden;
    width: 80%;
    border-radius: 50%;
    aspect-ratio: 1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.info .info__about > * {
    text-align: center;
    color: #fff;
}
.info__name {
    width: -webkit-fill-available;
    color: #000;
}
.social {
    height: 100px;
    margin: 20px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

@media screen and (max-width: 600px) {
    .adminSection {
        width: 95%;
    }
    .info {
        flex-direction: column;
    }
    .social.info {
        flex-direction: row;
    }
    .social__img i {
        font-size: 40px;
    }
    .adminBtn {
        flex-direction: column;
        width: 95%;
    }
    .adminBtn__ele {
        width: 100%;
        margin: 15px 0px;
        padding: 20px;
        font-size: 1rem;
    }
    .info__des h3 {
        text-align: center;
    }
}</style><div class="shareWindow_parent"><div class="shareWindow_child"><div class="shareWindow__close"><i class="fa-solid fa-x"></i></div><img class="shareWindow__qr" src="/user/<?=$props['config']['username'];?>/qr-code.png?v=<?=time();?>" alt=""><a class="shareWindow__btn shareWindow__download" download href="/user/<?=$props['config']['username'];?>/qr-code.png" style="text-decoration: none; color: #000;"><i class="fa-solid fa-arrow-down"></i>Download</a><div class="shareWindow__btn shareWindow__link"><?=$props['config']['url'];?><i class="fa-regular fa-copy copy"></i><i class="fa-solid fa-check check"></i></div></div></div><div class="adminSection"><div class="info"><div class="info__img"><div class="info__img--location"><img src="<?=$props['config']['imgPath']."?v=".time();?> " alt="" draggable="false"></div></div><div class="info__about"><div class="info__name"><div><h1><?=$props["name"]["a"];?></h1></div></div><div class="info__org"><div><h2><?=$props["organization"]["a"];?></h2></div></div><div class="info__des"><div><h3><?=$props["description"]["a"];?></h3></div></div></div></div><div id="social-media"> <?php
            for($i = 0; $i < count($socialNameArr); $i++) {
                $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
                echo '
                    <div class="social '.$socialNameArr[$i].'" style="display: '.$props[$socialNameArr[$i]]['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p>'.$props[$socialNameArr[$i]]['a'].'</div></div></div></div>
                ';
            }
        ?> </div><div id="share"><div class="share__btn share"><i class="fa-solid fa-share"></i>Share</div><div class="share__btn save"><a style="text-decoration: none; color: #000;" href="/user/<?=$props['config']['username'];?>/vcard.php"><i class="fa-solid fa-download"></i> Save</a></div><div class="share__btn edit"><a style="text-decoration: none; color: #000;" href="/<?=$props['config']['username'];?>/admin"><i class="fa-solid fa-pen-to-square"></i> Edit</a></div></div></div><div id="copyright"><p><?=$props['config']['g']['license'];?></p></div>