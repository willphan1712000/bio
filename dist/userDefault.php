<?php

use config\SystemConfig as c;
use component\UserFooter;
use business\info\display\Display;
use controllers\user\UserController;

$user = new UserController();
$user->execute();

$infoArray = $user->get("info");
// c::dd($infoArray['HotLine']->getHTML());

$socialIconArr = $user->get("socialIconArr");
$url = $user->get("url");
$username = $user->get("username");
$g = $user->get("g");
$image = $infoArray['image']->getHTML() === null || $infoArray['image']->getHTML() === '' ? $g['img']['unknown'] : $infoArray['image'];

?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" type="text/css" href="/controllers/default/css/universal.css?v=<?= $g['v']; ?>"><link rel="stylesheet" type="text/css" href="/controllers/default/css/user.css?v=<?= $g['v']; ?>"><title><?= $g['userTitle']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/userjsbb8aa0227c07c66426c9.js"></script></head><body><div id="container"><div class="adminSection"><div class="info"><div class="info__img"><div class="info__img--location"><img src="<?= $image; ?> " alt="bio_user_avatar"></div></div><div class="info__about"><div class="info__name"><div><h1><?= $infoArray['name']->getHTML(); ?></h1></div></div><div class="info__org"><div><h2><?= $infoArray['organization']->getHTML(); ?></h2></div></div><div class="info__des"><div><h3><?= $infoArray['description']->getHTML(); ?></h3></div></div></div></div><div id="social-media"> <?php
                foreach ($infoArray as $prop => $info) {
                    if (!in_array($prop, ['username', 'name', 'image', 'organization', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode', 'HotLineFlag', 'HotLineCode', 'ViberFlag', 'ViberCode'])) {

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
                ?> </div></div><div id="share"> <?= (new UserFooter())->render("#share"); ?> </div><script>const url = "<?= $url; ?>"
            const type = "index"</script><div id="copyright"><p><?= $g['license']; ?></p></div></div><script>const props = {
            url: "<?= $url; ?>",
            username: "<?= $username; ?>"
        }</script></body></html>