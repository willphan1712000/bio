<?php
$socialNameArr = ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];

$socialIconArr = ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
?>
<div class="adminSection">
<div class="info">
    <div class="info__img">
        <div class="info__img--location">
            <img src=<?=$props['imgPath']."?v=".time();?> alt="" draggable="false">
        </div>
    </div>
    <div class="info__about">
        <div class="info__name">
            <div>
                <h1><?=$infoObject->name()['a'];?></h1>
            </div>
        </div>
        <div class="info__org">
            <div>
                <h2><?=$infoObject->organization()['a'];?></h2>
            </div>
        </div>
        <div class="info__des">
            <div>
                <h3><?=$infoObject->description()['a'];?></h3>
            </div>
        </div>
    </div>
    </div>
    <div id="social-media">
        <?php
            for($i = 0; $i < count($socialNameArr); $i++) {
                $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
                echo '
                    <div class="social '.$socialNameArr[$i].'" style="display: '.$infoObject->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p>'.$infoObject->social($socialNameArr[$i])['a'].'</div></div></div></div>
                ';
            }
        ?>
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