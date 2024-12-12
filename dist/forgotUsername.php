<?php

use controllers\forgotUsername\FindUsername;
use config\SystemConfig;

$g = SystemConfig::globalVariables();

use component\Copyright;
use component\button\forgot\ForgotGoBack;
use component\Logo;

$find = new FindUsername();

if (isset($_POST['submit'])) {
    $find->set("email", $_POST['email']);
    $find->execute();
}
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwinda59db76ed6d3558e92ef.js"></script><script src="/dist/mainjs7e7efdf62c6dc2b315df.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/maindf3fac941aab013505c9.js"></script></head><body><div class="logo"><?= (new Logo())->render(); ?></div><div class="signupParent"><div class="signupChild <?= $find->get("inactive"); ?>"><h1 class="text-[32px]">Find Username</h1><span class="signupChild__error"><?= $find->get("error"); ?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="email">Email</label> <input type="text" id="email" name="email" autocomplete="email" value="<?= $find->get("email") ?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Find</button></form><p class="signupChild__msg"><?= (new ForgotGoBack())->render(); ?></p></div><div class="signupChild result <?= $find->get("active"); ?>"><h2 class="text-[24px]">You have <?= $find->get("count"); ?> account(s)</h2><br> <?= $find->get("accStr"); ?> <p class="signupChild__msg"><?= (new ForgotGoBack())->render(); ?></p></div></div> <?php
    (new Copyright([
        'position' => 'absolute'
    ]))->render();
    ?> <script>const type = 'forgotUsername';</script></body></html>