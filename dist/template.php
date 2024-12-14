<?php

use component\Logo;
use component\Copyright;
use business\user\UserManagement;
use controllers\template\components\ChooseTemplate;
use controllers\template\TemplateController;
use controllers\template\components\TemplateDirector;
use controllers\template\components\TemplateComponent;
use controllers\template\components\YourTemplate;

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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script><script src="/dist/tailwindcae27d407160dc3a4d92.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/template337bc87c65daae01f00d.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/templatejs45d469ac81df7e62633b.js"></script></head><body><div id="container"><!-- Navigator --><div class="navigator"><div class="btn-box"> <?= (new TemplateDirector([
                    'isSignedIn' => $isSignedIn,
                    'username' => $username,
                    'img' => $imgPath,
                ]))->render(); ?> <a href="/cart" class="btn-ele cart"><i class="fa-solid fa-cart-shopping"></i> Cart</a></div></div><div class="logo"></div><!-- Purchased templates --> <?=
        (new YourTemplate([
            'username' => $username,
            'isSignedIn' => $isSignedIn,
            'purchased' => $purchased,
            'chosenTemplate' => $chosenTemplate,
            'g' => $g
        ]))->render();
        ?> <!-- Buy more template --> <?=
        (new ChooseTemplate([
            'isSignedIn' => $isSignedIn,
            'purchased' => $purchased,
            'TOTAL' => $TOTAL,
            'g' => $g
        ]))->render();
        ?> <!-- Copyright --> <?php
        (new Copyright([
            "position" => "relative"
        ]))->render();
        ?> </div><script>var type = "template"
        var props = {
            username: "<?= $username ? $username : ""; ?>",
            isSignedIn: "<?= ($isSignedIn) ? "true" : ""; ?>"
        }</script></body></html>