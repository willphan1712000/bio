<?php

use config\SystemConfig;
use component\Copyright;
use component\Logo;
use component\signin\SigninGoBack;
use controllers\resetPass\ResetPassword;

$reset = new ResetPassword();
$password = $reset->get("password");
$verifyPassword = $reset->get("verifyPassword");
$error = $reset->get("error");

$g = SystemConfig::globalVariables();

if (isset($_POST['submit'])) {
    $reset->set("password", $_POST['password']);
    $reset->set("verifyPassword", $_POST['verifyPassword']);

    $reset->execute();

    $inactive = $reset->get("inactive");
    $active = $reset->get("active");
    $password = $reset->get("password");
    $verifyPassword = $reset->get("verifyPassword");
    $error = $reset->get("error");
}
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwindea3b3d5f368e894187cf.js"></script><script src="/dist/universal8143aa27cdd7d1109c51.js"></script><script src="/dist/main62ef5c04effaf1811d86.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script></head><body><div class="logo"><?= (new Logo())->render(); ?></div><div class="signupParent"><div class="signupChild <?= $inactive; ?>"><h1 class="text-[30px]">Reset Password</h1><span class="signupChild__error"><?= $error; ?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="password" value="<?= $password; ?>" required></div><div class="inputField"><label for="verifyPassword">Verify Password</label> <input type="password" id="verifyPassword" name="verifyPassword" autocomplete="verifyPassword" value="<?= $verifyPassword; ?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Change</button></form></div><div class="signupChild passwordResetSuccess <?= $active; ?>"><div><i class="fa-solid fa-check" style="font-size: 40px;color: green;border: solid 2px green;border-radius: 50%;padding: 20px;margin-bottom: 10px;"></i></div><h2>Password has been reset successfully</h2><?= (new SigninGoBack())->render(); ?> </div></div><?php
            (new Copyright([
                'position' => 'absolute'
            ]))->render();
            ?><script>const type = 'resetPass';</script></body></html>