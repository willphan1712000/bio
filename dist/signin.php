<?php

use controllers\signin\SigninController;

use component\Copyright;
use component\Logo;
use component\signup\SignupSignin;
use component\button\forgot\ForgotSignup;

$signin = new SigninController();

$g = $signin->get('g');
$title = $signin->get('title');
$error = $signin->get('error');
$username = $signin->get('username');
$password = $signin->get('password');

if (isset($_POST['submit'])) {
    $signin->signin($_POST['username'], $_POST['password']);

    $username = $signin->get('username');
    $password = $signin->get('password');
    $error = $signin->get('error');
}

?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind2c2ee72c5b1c6ff3c3a5.js"></script><script src="/dist/universal338525335f3c1d0938f4.js"></script><script src="/dist/main62ef5c04effaf1811d86.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script></head><body><div class="logo"> <?= (new Logo(["src" => $g["img"]["logo"]]))->render(); ?> </div><div class="signupParent flex justify-center items-center h-[75vh]"><div class="signupChild w-[80%] max-w-[500px] h-[90%] rounded-[20px] bg-white flex justify-center items-center flex-col" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"><h1 style="font-size: 32px;"><?= $title; ?></h1><span class="signupChild__error"><?= $error; ?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" value="<?= $username; ?>" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" value="<?= $password; ?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Log in</button></form><p class="signupChild__msg">Not have an account? <?= (new SignupSignin())->render(); ?></p><p class="signupChild__msg"><?= (new ForgotSignup())->render(); ?></p><p class="signupChild__msg"><a class="shadow rounded-[10px] bg-white p-[6px]" href="/@signin?restore=true">Restore Account</a></p></div></div><div id="root"></div><div id="root1"></div> <?php
    (new Copyright([
        'position' => 'absolute'
    ]))->render();
    ?><script>const type = 'signin'</script></body></html>