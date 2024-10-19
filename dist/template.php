<?php
    require_once __DIR__."/../data/core.php";
    use config\SystemConfig;

    require_once __DIR__."/../data/backend/business/controllers/Template.php";
    use function business\controllers\template;

    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;

    require_once __DIR__."/../controllers/components/TemplateComponent.php";
    use function component\templateComponent;
    use component\TemplateComponent;
    
    require_once __DIR__."/../controllers/components/Logo.php";
    use function component\logo;

    require_once __DIR__."/../controllers/components/Filter.php";
    use function component\filter;

    require_once __DIR__."/../controllers/components/TemplateDirector.php";
    use function component\templateDirector;

    // Global config
    $g = SystemConfig::globalVariables();
    
    // Get username
    $username = SystemConfig::URLExtraction("username");

    // Run template business logic here
    $template = template($username);

    $isSignedIn = $template->getData()['isSignedIn'];
    $purchased = $template->getData()['purchased'];
    $chosenTemplate = $template->getData()['chosenTemplate'];
    $TOTAL = $template->getData()['total'];
    $imgPath = $template->getData()['imgPath'];
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script><script src="/dist/tailwindd023bb991ce9cd120f0a.js"></script><script src="/dist/mainjs0a1e7cae19d8e79549f2.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/template337bc87c65daae01f00d.js"></script></head><body><div id="container"><div class="navigator"><div class="btn-box"> <?= templateDirector([
                    'isSignedIn' => $isSignedIn,
                    'username' => $username,
                    'img' => $imgPath,
                ])->execute();?> <a href="/cart" class="btn-ele cart"><i class="fa-solid fa-cart-shopping"></i> Cart</a></div></div><div class="logo"></div><!-- <div class="swiper-container">
                <div class="swiper-wrapper"> --><div class="swiper-slide template-wrapper" style="display: <?= ($isSignedIn) ? "block" : "none";?>"><div class="heading"> <?= logo([
                        "src" => $g["img"]["logo"]
                    ])->render(); ?> <h1>Your templates</h1></div><div class="notHaveTemplate" style="display: <?= empty($purchased) ? "flex": "none";?>"><p>You do not have templates</p></div><div class="swiper template_container purchase" style="display: <?= empty($purchased) ? "none": "flex";?>"><div class="swiper-wrapper"> <?php
                            if($isSignedIn && ($purchased ?? false)) {
                                TemplateComponent::style(".template_container.purchase");
                                foreach($purchased as $item) {
                                    templateComponent([
                                        'id' => $item,
                                        'img' => '../controllers/template/'.$item.'/'.$item.'.png',
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
                    ?>"><div class="heading mb-[20px]"> <?= logo([
                            "src" => $g["img"]["logo"]
                        ])->render(); ?> <h1>Choose Your Template</h1></div> <?= filter([
                    'like' => '/@template?filter=like',
                    'industry' => '/@template?filter=industry',
                    'color' => '/@template?filter=color',
                    'popular' => '/@template?filter=popular'
                ])->render();?> </div><div class="swiper template_container show"><div class="swiper-wrapper"> <?php
                    $isBought = array_fill(0, 10, false);
                    foreach($purchased as $item) {
                        $isBought[$item - 1] = true;
                    }
                    TemplateComponent::style(".template_container.show");
                    for($i = 1; $i <= 10; $i++) {
                        templateComponent([
                            'id' => $i,
                            'img' => '../controllers/template/'.$i.'/'.$i.'.png',
                            'mode' => 'purchase',
                            'isBought' => $isBought[$i - 1]
                        ])->render();
                    }
                ?> </div></div></div> <?php
                    copyright([
                        "position" => "relative"
                    ])->render();
                ?> <script>var type = "template"
                var props = {
                    username: "<?=$username? $username : "";?>",
                    isSignedIn: "<?=($isSignedIn) ? "true" : "";?>"
                }</script></body></html>