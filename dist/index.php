<?php

use config\SystemConfig;

require_once __DIR__ . "/../controllers/components/Copyright.php";

use function component\copyright;

require_once __DIR__ . "/../controllers/components/Logo.php";

use function component\logo;

require_once __DIR__ . "/../controllers/components/BioTemplateButton.php";

use function component\bioTemplateButton;

$g = SystemConfig::globalVariables();
require_once __DIR__ . "/../controllers/components/signin/SigninMain.php";

use function component\signin\signinMain;

require_once __DIR__ . "/../controllers/components/signup/SignupMain.php";

use function component\signup\signupMain;
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwinde48bfd9e5735152e0c0c.js"></script><script src="/dist/universalcd9b0fe72e36233b9716.js"></script><script src="/dist/animation3631b5661b8faf39c0d2.js"></script><script src="/dist/main4e456a3f042012daf338.js"></script></head><body><div id="container"><div class="logo"><?= logo()->render(); ?></div><div class="heading"><h1>Create Your Bio</h1><img src="<?= $g['img']['bio'] ?>" alt=""></div><div class="register"> <?= signinMain()->render(); ?> <?= signupMain()->render(); ?> </div><div class="bioBtn"><?= bioTemplateButton("")->render(".bioBtn"); ?></div> <?php
        copyright([
            'position' => 'absolute'
        ])->render();
        ?> </div></body></html>