<?php

use component\Back;
use component\Setting;
use component\Copyright;
use config\SystemConfig;
use business\info\display\Display;
use controllers\admin\AdminController;
use controllers\template\TemplateFactory;

$admin = new AdminController(); // get admin object
$admin->execute();

/** @var Display[] */
$infoArray = $admin->get("info");

$username = $admin->get("username"); // get username
$themeid = $admin->get("themeid"); // Get themeid
$css = $admin->get("css"); // Get CSS for corresponding template
$image = $infoArray['image']->getHTML() === null || $infoArray['image']->getHTML() === '' ? $g['img']['unknown'] : "/user/" . $username . "/" . $infoArray['image']->getHTML();
$g = $admin->get("g");


$imgPath = $image;
$imgName = '';

// This is information that gets passed down to the corresponsing template
// This is information that gets passed down to the corresponsing template
$props = [
    'username' => $username,
    'imgPath' => $image,
    'info' => $infoArray,
    'css' => $css
];

if (isset($_POST['signout'])) {
    unset($_SESSION[$username]);
    header("Location: /" . $username);
}
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['adminTitle']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwinddddccb60e431ec362469.js"></script><script src="/dist/universal338525335f3c1d0938f4.js"></script><script src="/dist/admin398b64701edf5c562166.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/adminjsdfd8cb939452f8a17303.js"></script></head><body><div id="admin"><div id="notSupported"><p>Bio does not support wide screen!</p></div><div class="navigator"><a href="/<?= $username; ?>" class="back"><i class="fa-solid fa-arrow-left"></i></a><div class="save">Save</div></div><div class="card-container swiper"><div class="swiper-wrapper"><div id="container" class="front swiper-slide"><div class="label">Front</div> <?php
                    TemplateFactory::getInstance()->getTemplate($themeid)->html($props);
                    ?> </div><div class="back swiper-slide"><div class="label">Back</div> <?=
                    (new Back([
                        'container' => '.back',
                        'username' => $username,
                        'info' => $props['info']
                    ]))->render();
                    ?> </div></div></div><div id="setting"> <?php
            (new Setting([
                "username" => $username,
                "container" => "#setting"
            ]))->render();
            ?> </div> <?php (new Copyright([
            'position' => 'relative'
        ]))->render(); ?> </div><script>const type = "admin";
        const props = {
            username: "<?= $username; ?>",
            css: <?= json_encode($css); ?>,
            imgPath: "<?= $imgPath; ?>",
            imgName: "<?= $imgName; ?>",
        }</script></body></html>