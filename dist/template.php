<?php
    $g = SystemConfig::globalVariables();
    
    // Get username
    $username = SystemConfig::URLExtraction("username");
    $isSignedIn = false;
    $purchased = [];
    $chosenTemplate = null;

    if($username !== NULL) {
        SESSION_START();
        $isSignedIn = UserManagement::isSignedIn($_SESSION, $username);
        // if signed in, get avatar image
        if($isSignedIn) {
            $ava = API::GET("info", "image", "username = '$username'");
            if($ava) {
                $imgPath = "/user/".$username."/".$ava."?v=".time();
            } else {
                $imgPath = $g['img']['unknown'];
            }
        } else {
            header("Location: /signin?template=true");
        }
    }
    
    // If signed in, check there are templates purchased
    if($isSignedIn) {
        $purchased = API::GET("purchase", "template_id", "username = '$username'"); // Get all templates purchased
        if(gettype($purchased) === "integer") {
            $purchased = [$purchased];
        }
        // SystemConfig::dd(!empty($purchased));
        $chosenTemplate = API::GET("template", "themeid", "username = '$username'"); // Get chosen template
        $TOTAL = TemplateManagement::getTotal();
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script><script src="/dist/mainjs91206556224038e1d39c.js"></script><script src="/dist/prevjs051119bc8e2a2ef287f1.js"></script><script src="/dist/universala65ac2dbc01a46adc0ce.js"></script><script src="/dist/template9ef07e39841c71a5c848.js"></script></head><body><div id="container"><div class="navigator"><div class="btn-box"> <?php
                    if($isSignedIn) {
                        echo '
                            <a class="btn-ele signin" href="/'.$username.'"><div class="img"><img draggable="false" src="'.$imgPath.'"></div><p>Bio</p></a>
                        ';
                        echo '
                            <a class="btn-ele signin admin" href="/'.$username.'/admin"><div class="img"><img draggable="false" src="'.$imgPath.'"></div><p>Admin</p></a>
                        ';
                    } else {
                        echo '
                            <a class="btn-ele signin" href="/signin?template=true"><i class="fa-solid fa-user"></i> Sign in</a>
                        ';
                    }
                ?> <a href="/cart" class="btn-ele cart"><i class="fa-solid fa-cart-shopping"></i> Cart</a></div></div><div class="logo"></div><!-- <div class="swiper-container">
                <div class="swiper-wrapper"> --><div class="swiper-slide template-wrapper" style="display: <?= ($isSignedIn) ? "block" : "none";?>"><div class="heading"> <?php logo([
                        "container" => ".heading",
                        "src" => $g["img"]["logo"]
                    ])->render(); ?> <h1>Your templates</h1></div><div class="notHaveTemplate" style="display: <?= empty($purchased) ? "flex": "none";?>"><p>You do not have templates</p></div><div class="swiper template_container purchase" style="display: <?= empty($purchased) ? "none": "flex";?>"><div class="swiper-wrapper"> <?php
                            if($isSignedIn && ($purchased ?? false)) {
                                TemplateComponent::style(".template_container.purchase");
                                foreach($purchased as $item) {
                                    templateComponent([
                                        'id' => $item,
                                        'img' => '../data/template/'.$item.'/'.$item.'.png',
                                        'mode' => 'purchased',
                                        'chosen' => $chosenTemplate,
                                        'url' => UserManagement::URLGenerator($username, "share"),
                                    ])->render();
                                }
                            }
                        ?> </div></div></div><div class="swiper-slide template-wrapper" style="display: <?php 
                    if($isSignedIn) {
                        echo count($purchased) === $TOTAL ? "none" : "block";
                    }
                ?>"><div class="heading"> <?php logo([
                            "container" => ".heading",
                            "src" => $g["img"]["logo"]
                        ])->render(); ?> <h1>Choose Your Template</h1></div><div class="filter"><div class="type"><div class="typebox popular active"><a href="/">Popular</a></div><div class="typebox industry"><a href="/">Industry</a></div><div class="typebox color"><a href="/">Color</a></div><div class="typebox color"><a href="/">Like</a></div></div></div><div class="swiper template_container show"><div class="swiper-wrapper"> <?php
                    $isBought = array_fill(0, 10, false);
                    foreach($purchased as $item) {
                        $isBought[$item - 1] = true;
                    }
                    TemplateComponent::style(".template_container.show");
                    for($i = 1; $i <= 10; $i++) {
                        templateComponent([
                            'id' => $i,
                            'img' => '../data/template/'.$i.'/'.$i.'.png',
                            'mode' => 'purchase',
                            'isBought' => $isBought[$i - 1]
                        ])->render();
                    }
                ?> </div></div></div><!-- </div>
                </div> --> <?php
                    copyright([
                        "position" => "relative"
                    ])->render();
                ?> <script>var type = "template"
            var props = {
                username: "<?=$username? $username : "";?>",
                isSignedIn: "<?=($isSignedIn) ? "true" : "";?>"
            }</script></div></body></html>