<?php

use config\SystemConfig as c;
use component\UserFooter;
use business\info\display\Display;
use controllers\user\UserController;
use component\Copyright;

$user = new UserController();
$user->execute();

$infoArray = $user->get("info");

$socialIconArr = $user->get("socialIconArr");
$username = $user->get("username");
$g = $user->get("g");
$image = $infoArray['image']->getHTML() === null || $infoArray['image']->getHTML() === '' ? $g['img']['unknown'] : "/user/" . $username . "/" . $infoArray['image']->getHTML();
$orders = ['Email', 'Address', 'Mobile', 'Work', 'Viber', 'Whatsapp', 'HotLine', 'Menu', 'Booking', 'Website', 'OrderOnline', 'HotSale'];
$exclude1 = ['username', 'name', 'image', 'position', 'organization', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode', 'HotLineFlag', 'HotLineCode', 'ViberFlag', 'ViberCode', 'WhatsappFlag', 'WhatsappCode'];
$exclude = array_merge($orders, $exclude1);
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" type="text/css" href="/controllers/default/css/universal.css?v=<?= $g['v']; ?>"><link rel="stylesheet" type="text/css" href="/controllers/default/css/user.css?v=<?= $g['v']; ?>"><title><?= $username; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><style>#des::-webkit-scrollbar {
            display: none;
        }</style><script src="/dist/userjs6a7b0aff2edd73b30473.js"></script></head><body><div id="container"><div class="adminSection"><div class="info"><div class="info__img"><div class="info__img--location"><img src="<?= $image; ?> " alt="bio_user_avatar" draggable="false" style="width: 100%; height: 100%;"></div></div><div class="info__about"><div class="info__name"><div><h1 style="text-align: center;"><?= $infoArray['name']->getHTML(); ?></h1></div></div><div class="info__position"><div><p style="text-align: center; font-size: 18px; margin-top: 10px;"><?= $infoArray['position']->getHTML(); ?></p></div></div><div class="info__org"><div><h2><?= $infoArray['organization']->getHTML(); ?></h2></div></div><div class="info__des"><div><textarea id="des" rows="5" cols="15" style="border: none; resize: none; outline: none; font-size: 18px; text-align: center; scrollbar-width: none; -ms-overflow-style: none;"><?= $infoArray['description']->getHTML(); ?></textarea></div></div></div></div><div id="social-media"> <?php
                foreach ($orders as $prop) {
                    /** @var Display */
                    $element = $infoArray[$prop];
                    echo $element->getHTML('<div class="social ' . $prop . '" style="width: 100%;">
                        <div class="social__img info__img">' . $socialIconArr[$prop] . '</div>
                        <div class="social__info info__about">
                            <div class="info__name">
                                <div>
                                    <p>' . $element->getLabel() . '</p>
                                    <p>' . $element->getValue() . '</p>
                                </div>
                            </div>
                        </div>
                    </div>');
                }
                foreach ($infoArray as $prop => $info) {
                    if (!in_array($prop, $exclude)) {
                        /** @var Display */
                        $element = $infoArray[$prop];
                        echo $element->getHTML('<div class="social ' . $prop . '" style="width: 100%;">
                            <div class="social__img info__img">' . $socialIconArr[$prop] . '</div>
                            <div class="social__info info__about">
                                <div class="info__name">
                                    <div>
                                        <p>' . $element->getLabel() . '</p>
                                        <p>' . $element->getValue() . '</p>
                                    </div>
                                </div>
                            </div>
                        </div>');
                    }
                }
                ?> </div></div><div id="share"> <?= (new UserFooter())->render("#share"); ?> </div> <?php (new Copyright([
            'position' => 'relative'
        ]))->render(); ?> </div></body></html>