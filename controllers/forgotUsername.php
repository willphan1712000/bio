<?php

use business\controllers\FindUsername;
use config\SystemConfig;

require_once __DIR__ . "/../controllers/components/Copyright.php";

use function component\copyright;

$g = SystemConfig::globalVariables();

require_once __DIR__ . '/../data/backend/persistence/Database.php';

require_once __DIR__ . "/../controllers/components/button/forgot/ForgotGoBack.php";

use function component\button\forgot\forgotGoBack;

require_once __DIR__ . "/../controllers/components/Logo.php";

use function component\logo;

$find = new FindUsername();

if (isset($_POST['submit'])) {
    $find->set("email", $_POST['email']);
    $find->execute();
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
    <div class="logo"><?= logo()->render(); ?></div>
    <div class="signupParent">
        <div class="signupChild <?= $find->get("inactive"); ?>">
            <h1 class="text-[32px]">Find Username</h1><span class="signupChild__error"><?= $find->get("error"); ?></span>
            <form action="" id="signup" method="POST">
                <div class="inputField"><label for="email">Email</label> <input type="text" id="email" name="email" autocomplete="email" value="<?= $find->get("email") ?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Find</button>
            </form>
            <p class="signupChild__msg"><?= forgotGoBack()->render(); ?></p>
        </div>
        <div class="signupChild result <?= $find->get("active"); ?>">
            <h2 class="text-[24px]">You have <?= $find->get("count"); ?> account(s)</h2><br> <?= $find->get("accStr"); ?> <p class="signupChild__msg"><?= forgotGoBack()->render(); ?></p>
        </div>
    </div><?php
            copyright([
                'position' => 'absolute'
            ])->render();
            ?><script>
        const type = 'forgotUsername'
    </script>
</body>

</html>