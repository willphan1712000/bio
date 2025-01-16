<?php

use component\Copyright;
use controllers\template\components\ChooseTemplate;
use controllers\template\TemplateController;
use controllers\template\components\TemplateDirector;
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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script><script src="/dist/tailwind6ccb42f1422bd39f0160.js"></script><script src="/dist/universal338525335f3c1d0938f4.js"></script><script src="/dist/template337bc87c65daae01f00d.js"></script><script src="/dist/templatejs9805e4b40c1c6b0526ef.js"></script></head><body><div id="container"><!-- Navigator --><div class="navigator"><div class="btn-box"> <?= (new TemplateDirector([
                    'isSignedIn' => $isSignedIn,
                    'username' => $username,
                    'img' => $imgPath,
                ]))->render(); ?> <div id="cart"></div></div></div><div class="logo"></div><!-- Purchased templates --> <?=
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
        ?> <!-- Go back to original --><div class="flex flex-row justify-center items-center mt-5"><div data-id="0" class="select p-[10px] rounded-[10px] bg-[#f0f0f0] cursor-pointer" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">Go back to basic template</div></div><!-- Copyright --> <?php
        (new Copyright([
            "position" => "relative"
        ]))->render();
        ?> </div><script>var type = "template"
        var props = {
            isSignedIn: "<?= ($isSignedIn) ? "true" : "false"; ?>"
        }</script></body></html>