<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    
    // Get username
    $username = SystemConfig::URLExtraction("username");

    SESSION_START();
    $isSignedIn = UserManagement::isSignedIn($_SESSION, $username);
    // if signed in, get avatar image
    if($isSignedIn) {
        $ava = Database::GET("info", "image", "username = '$username'");
        if($ava) {
            $imgPath = "/user/".$username."/".$ava."?v=".time();
        } else {
            $imgPath = $g['img']['unknown'];
        }
    }
    
    // If signed in, check there are templates purchased
    if($isSignedIn) {
        $purchased = Database::GET("purchase", "template_id", "username = '$username'"); // Get all templates purchased
        $chosenTemplate = Database::GET("template", "themeid", "username = '$username'"); // Get chosen template
    }

?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script><script src="/dist/mainjsd10a9436e92a7a5aa299.js"></script><script src="/dist/prevjsc42aae84e4f770841183.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/templatec592290a3b7c30a09870.js"></script></head><body><div id="container"><div class="logo"><div class="btn-box"> <?php
                    if($isSignedIn) {
                        echo '
                            <a class="btn-ele signin" href="/'.$username.'/admin"><div class="img"><img draggable="false" src="'.$imgPath.'"></div><p>'.$username.'</p></a>
                        ';
                    } else {
                        echo '
                            <a class="btn-ele signin" href="/signin?template=true"><i class="fa-solid fa-user"></i> Sign in</a>
                        ';
                    }
                ?> <a href="/cart" class="btn-ele cart"><i class="fa-solid fa-cart-shopping"></i> Cart</a></div></div><!-- <div class="swiper-container">
                <div class="swiper-wrapper"> --><div class="swiper-slide template-wrapper" style="display: <?= ($isSignedIn) ? "" : "none";?>"><div class="heading"> <?php logo([
                        "container" => ".heading",
                        "src" => $g["img"]["logo"]
                    ])->render(); ?> <h1>Your templates</h1></div><div class="notHaveTemplate" style="display: <?=$purchased[0] === "" ? "flex": "none";?>"><p>You do not have templates</p></div><div class="swiper template_container purchase" style="display: <?=$purchased[0] === "" ? "none": "flex";?>"><div class="swiper-wrapper"> <?php
                            if($isSignedIn) {
                                Template::style(".template_container.purchase");
                                foreach($purchased as $item) {
                                    template([
                                        'id' => $item,
                                        'img' => '../img/template/'.$item.'/'.$item.'.png',
                                        'mode' => 'purchased',
                                        'chosen' => $chosenTemplate,
                                        'url' => UserManagement::URLGenerator($username, "share"),
                                    ])->render();
                                }
                            }
                        ?> </div></div></div><div class="swiper-slide template-wrapper" style="display: <?php 
                    if($isSignedIn) {
                        echo count($purchased) === TemplateManagement::$totalTemplate ? "none" : "block";
                    }
                ?>"><div class="heading"> <?php logo([
                            "container" => ".heading",
                            "src" => $g["img"]["logo"]
                        ])->render(); ?> <h1>Choose Your Template</h1></div><div class="filter"><div class="type"><div class="typebox popular active"><a href="/">Popular</a></div><div class="typebox industry"><a href="/">Industry</a></div><div class="typebox color"><a href="/">Color</a></div><div class="typebox color"><a href="/">Like</a></div></div></div><div class="swiper template_container show"><div class="swiper-wrapper"> <?php
                    $isBought = array_fill(0, 10, false);
                    foreach($purchased as $item) {
                        $isBought[$item - 1] = true;
                    }
                    Template::style(".template_container.show");
                    for($i = 1; $i <= 10; $i++) {
                        template([
                            'id' => $i,
                            'img' => '../img/template/'.$i.'/'.$i.'.png',
                            'mode' => 'purchase',
                            'isBought' => $isBought[$i - 1]
                        ])->render();
                    }
                ?> </div></div></div><!-- </div>
                </div> --><div id="copyright"><p><?=$g['license'];?></p></div></div><script>var type = "template"
            var props = {
                username: "<?=$username? $username : "";?>",
                isSignedIn: "<?=($isSignedIn) ? "true" : "";?>"
            }</script></body></html>