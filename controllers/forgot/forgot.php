<?php

use config\SystemConfig;

$g = SystemConfig::globalVariables();

use component\Copyright;
use component\signin\SigninGoBack;
use component\Logo;
use controllers\forgot\ForgotController;

$forgotController = new ForgotController();

$error = $forgotController->get("error");
$username = $forgotController->get("username");
$email = $forgotController->get("email");

if (isset($_POST['submit'])) {
    $forgotController->set('username', $_POST['username']);
    $forgotController->set('email', $_POST['email']);
    $forgotController->execute();

    $inactive = $forgotController->get("inactive");
    $active = $forgotController->get("active");
    $error = $forgotController->get("error");
    $username = $forgotController->get("username");
    $email = $forgotController->get("email");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title><?= $g['title']; ?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <div class="logo"><?= (new Logo())->render(); ?></div>
    <div class="signupParent">
        <div class="signupChild <?= $inactive; ?>">
            <h1 class="text-[32px]">Forgot Password</h1><span class="signupChild__error"><?= $error; ?></span>
            <form action="" id="signup" method="POST">
                <div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="username" value="<?= $username; ?>" required></div>
                <div class="inputField"><label for="email">Email</label> <input type="email" id="email" name="email" autocomplete="email" value="<?= $email; ?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Send</button>
            </form>
            <p class="signupChild__msg">Forgot username? <a href="/@forgotUsername">Click here</a></p>
            <p class="signupChild__msg"><?= (new SigninGoBack())->render(); ?></p>
        </div>
        <div class="signupChild emailSent <?= $active; ?>">
            <div><i class="fa-solid fa-check" style="font-size: 40px;color: green;border: solid 2px green;border-radius: 50%;padding: 20px;margin-bottom: 10px;"></i></div>
            <h2>Reset Password Link has been sent to your email</h2>
            <h5>If you do not see the email, please check spam or junk email!</h5>
            <p class="signupChild__msg"><?= (new SigninGoBack())->render(); ?></p>
        </div>
    </div><?php
            (new Copyright([
                'position' => 'absolute'
            ]))->render();
            ?><script>
        const type = 'forgot'
    </script>
</body>

</html>