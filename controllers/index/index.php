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

use component\signin\SigninTrial;
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
    <div id="container">
        <div class="w-full flex flex-row justify-between p-[10px] bg-white">
            <div class="logo"><?= logo()->render(); ?></div>
            <div class="flex flex-row gap-2">
                <div class="w-[100px] h-[50px]"><?= signinMain()->render(); ?></div>
                <div class="w-[100px] h-[50px]"><?= signupMain()->render(); ?></div>
            </div>
        </div>
        <div class="heading my-10 rounded-[20px] bg-white">
            <div class="w-full min-w-[300px] gap-5 flex flex-col py-[50px] items-center px-[10px]">
                <div id="heading" class="w-full"></div>

                <div class="flex flex-row justify-center gap-10 w-full max-w-[1000px] m-10">
                    <div class="relative overflow-hidden shadow-2xl rounded-[7%]">
                        <img draggable="false" src="/controllers/client/img/ip.png" alt="" class="size-full object-fill" />
                    </div>
                    <div class="translate-y-[50px] flex flex-col gap-5">
                        <img draggable="false" src="/controllers/client/img/ebusiness01.png" alt="" class="object-fill shadow-xl " />
                        <img draggable="false" src="/controllers/client/img/ebusiness02.png" alt="" class="object-fill shadow-xl " />
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-10 w-full justify-center pb-10">
                <div class="bioBtn"><?= bioTemplateButton("")->render(".bioBtn"); ?></div>
                <div class="w-[150px] h-[60px]"><?= (new SigninTrial())->render(); ?></div>
            </div>
        </div>

        <div id="showcase"></div>
        <div id="templates"></div>

        <?php
        copyright([
            'position' => 'relative'
        ])->render();
        ?>
    </div>
</body>

</html>