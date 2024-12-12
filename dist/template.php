<?php

use business\user\UserManagement;
use controllers\template\TemplateController;
use component\Copyright;
use component\TemplateComponent;
use component\Logo;
use component\Filter;
use component\TemplateDirector;



// Run template business logic here
$template = new TemplateController();

// Get all needed data processed by template object
$data = $template->getData();
$username = $data['username'];
$isSignedIn = $data['isSignedIn'];
$purchased = $data['purchased'];
$chosenTemplate = $data['chosenTemplate'];
$TOTAL = $data['total'];
$imgPath = $data['imgPath'];
$g = $data['g'];
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script><script src="/dist/tailwinda59db76ed6d3558e92ef.js"></script><script src="/dist/mainjs7e7efdf62c6dc2b315df.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/template337bc87c65daae01f00d.js"></script></head><body><div id="container"><div class="navigator"><div class="btn-box"> <?= (new TemplateDirector([
                    'isSignedIn' => $isSignedIn,
                    'username' => $username,
                    'img' => $imgPath,
                ]))->execute(); ?> <a href="/cart" class="btn-ele cart"><i class="fa-solid fa-cart-shopping"></i> Cart</a></div></div><div class="logo"></div><!-- <div class="swiper-container">
                <div class="swiper-wrapper"> --><div class="swiper-slide template-wrapper" style="display: <?= ($isSignedIn) ? "block" : "none"; ?>"><div class="heading"> <?= (new Logo([
                    "src" => $g["img"]["logo"]
                ]))->render(); ?> <h1>Your templates</h1></div><div class="notHaveTemplate" style="display: <?= empty($purchased) ? "flex" : "none"; ?>"><p>You do not have templates</p></div><div class="swiper template_container purchase" style="display: <?= empty($purchased) ? "none" : "flex"; ?>"><div class="swiper-wrapper"> <?php
                    if ($isSignedIn && ($purchased ?? false)) {
                        TemplateComponent::style(".template_container.purchase");
                        foreach ($purchased as $item) {
                            (new TemplateComponent([
                                'id' => $item,
                                'img' => '../controllers/template/' . $item . '/' . $item . '.png',
                                'mode' => 'purchased',
                                'chosen' => $chosenTemplate,
                                'url' => UserManagement::URLGenerator($username, "share"),
                            ]))->render();
                        }
                    }
                    ?> </div></div></div><div class="swiper-slide template-wrapper" style="display: <?php
                                                                    if ($isSignedIn) {
                                                                        echo count($purchased) === $TOTAL ? "none" : "block";
                                                                    }
                                                                    ?>"><div class="heading mb-[20px]"> <?= (new Logo([
                    "src" => $g["img"]["logo"]
                ]))->render(); ?> <h1>Choose Your Template</h1></div> <?= (new Filter([
                'like' => '/@template?filter=like',
                'industry' => '/@template?filter=industry',
                'color' => '/@template?filter=color',
                'popular' => '/@template?filter=popular'
            ]))->render(); ?> </div><div class="swiper template_container show"><div class="swiper-wrapper"> <?php
                $isBought = array_fill(0, 10, false);
                foreach ($purchased as $item) {
                    $isBought[$item - 1] = true;
                }
                TemplateComponent::style(".template_container.show");
                for ($i = 1; $i <= 10; $i++) {
                    (new TemplateComponent([
                        'id' => $i,
                        'img' => '../controllers/template/' . $i . '/' . $i . '.png',
                        'mode' => 'purchase',
                        'isBought' => $isBought[$i - 1]
                    ]))->render();
                }
                ?> </div></div></div> <?php
    (new Copyright([
        "position" => "relative"
    ]))->render();
    ?> <script>var type = "template"
        var props = {
            username: "<?= $username ? $username : ""; ?>",
            isSignedIn: "<?= ($isSignedIn) ? "true" : ""; ?>"
        }</script></body></html>