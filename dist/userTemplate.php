<?php

use config\SystemConfig as c;
use controllers\user\UserController;
use component\Copyright;
use component\UserFooter;
use controllers\template\TemplateFactory;

// get User object
$user = new UserController();
$user->execute();

$infoArray = $user->get("info");

// $socialIconArr = $user->get("socialIconArr");
$username = $user->get("username");
$themeid = $user->get("themeid");
$g = $user->get("g");
$image = $infoArray['image']->getHTML() === null || $infoArray['image']->getHTML() === '' ? $g['img']['unknown'] : "/user/" . $username . "/" . $infoArray['image']->getHTML();
$css = $user->get("css");

// c::dd($css);

// This is information that gets passed down to the corresponsing template
$props = [
    'imgPath' => $image,
    'info' => $infoArray,
    'css' => $css
];

?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $username; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind523676743dbf1f771b92.js"></script><script src="/dist/universal51508d30c024a5397c13.js"></script><script src="/dist/admin45d6ba7459c0a1b22f0c.js"></script><script src="/dist/userjs6cac61247294e9ad00b3.js"></script></head><body><div id="notSupported"><p>Bio does not support wide screen!</p></div><div id="container"> <?php
        TemplateFactory::getInstance()->getTemplate($themeid)->html($props);
        ?> </div><div id="userFooter"> <?php
        (new UserFooter())->render("#userFooter");
        ?> </div> <?php (new Copyright([
        'position' => 'relative'
    ]))->render(); ?> </body></html>