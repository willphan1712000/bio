<?php

use config\SystemConfig;

$g = SystemConfig::globalVariables();

use business\user\InfoAnchor;

use business\controllers\User;
use function component\template;

require_once __DIR__ . "/../controllers/components/Copyright.php";

use function component\copyright;

require_once __DIR__ . "/../controllers/components/Template.php";

use function business\infoProcess;

require_once __DIR__ . "/../controllers/components/UserFooter.php";

use function component\userFooter;


// get User object
$user = new User();

// get username
$username = $user->getUsername();
// Get themeid
$themeid = $user->getThemeid();
// Get CSS for corresponding template
$css = $user->getCSS();
// Get url for the page with specific username
$url = $user->getURL();

// This is information that gets passed down to the corresponsing template
$props = [
    'username' => $username,
    'social' => SystemConfig::socialNameArr(),
    'icon' => SystemConfig::socialIconArr(),
    'info' => new InfoAnchor($user->getInfo()),
    'css' => $css,
    'mode' => 'a'
];
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['userTitle']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwinda59db76ed6d3558e92ef.js"></script><script src="/dist/mainjs7e7efdf62c6dc2b315df.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/admin5c9da877814c70ad7150.js"></script></head><body><div id="notSupported"><p>Bio does not support wide screen!</p></div><div id="container"> <?php
        template($themeid, $props)->execute()->html(); ?> </div><div id="userFooter"> <?php
        userFooter($props)->render("#userFooter");
        ?> </div> <?php copyright([
        'position' => 'relative'
    ])->render(); ?> <script>const type = "index";
        const props = {
            url: "<?= $url; ?>",
            username: "<?= $username; ?>"
        }</script></body></html>