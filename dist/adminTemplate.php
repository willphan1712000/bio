<?php

use business\user\InfoAnchor;
use component\Back;
use component\Copyright;
use config\SystemConfig;

$g = SystemConfig::globalVariables();

use controllers\admin\AdminController;

$admin = new AdminController(); // get admin object
$admin->execute();

$username = $admin->get("username"); // get username
$themeid = $admin->get("themeid"); // Get themeid
$css = $admin->get("css"); // Get CSS for corresponding template
$url = $admin->get("url"); // Get url for the page with specific username

// This is information that gets passed down to the corresponsing template
$props = [
    'username' => $username,
    'icon' => SystemConfig::socialIconArr(),
    'info' => (new InfoAnchor($admin->get("info"))),
    'css' => $css,
    'mode' => 'a'
];

if (isset($_POST['signout'])) {
    unset($_SESSION[$username]);
    header("Location: /" . $username);
}
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['adminTitle']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwindf03965c2be8bc78494bd.js"></script><script src="/dist/universal338525335f3c1d0938f4.js"></script><script src="/dist/admin5c9da877814c70ad7150.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/adminjs5769c6739e2a81d60267.js"></script></head><body><div id="admin"><div id="notSupported"><p>Bio does not support wide screen!</p></div><div class="navigator"><a href="/<?= $username; ?>" class="back"><i class="fa-solid fa-arrow-left"></i></a><div class="save">Save</div></div><div class="card-container swiper"><div class="swiper-wrapper"><div id="container" class="front swiper-slide"><div class="label">Front</div> <?php
                    // template($themeid, $props)->execute()->html(); 
                    ?> </div><div class="back swiper-slide"><div class="label">Back</div> <?php
                    (new Back([
                        'container' => '.back',
                        'username' => $username,
                        'info' => $props['info']
                    ]))->render();
                    ?> </div></div></div><div id="setting"> <?php
            // setting([
            //     "username" => $username,
            //     "container" => "#setting"
            // ])->render();
            ?> </div> <?php (new Copyright([
            'position' => 'relative'
        ]))->render(); ?> </div><script>const type = "admin";
        const props = {
            username: "<?= $username; ?>",
            css: <?= json_encode($css); ?>,
            imgPath: "<?= $imgPath; ?>",
            imgName: "<?= $imgName; ?>",
        }</script></body></html>