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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind8db27292dfc212ed23d3.js"></script><script src="/dist/universal7a528f12fa5fb93514d3.js"></script><script src="/dist/animationcc82e4f117de9532f8a4.js"></script><script src="/dist/maineb1da2c20ca10011f016.js"></script><script src="/dist/index72e96602a50873ae3125.js"></script></head><body><div id="container"><div class="w-full flex flex-row justify-between p-[10px]"><div class="logo"><?= logo()->render(); ?></div><div class="flex flex-row gap-2"><div class="w-[100px] h-[50px]"><?= signinMain()->render(); ?></div><div class="w-[100px] h-[50px]"><?= signupMain()->render(); ?></div></div></div><div class="heading"><div class="w-[60%] min-w-[300px] gap-5 flex flex-col py-[50px] items-center"><div class="logo"><?= logo()->render(); ?></div><div class="flex flex-col justify-center"><h1 class="text-center text-[50px]"><?= SystemConfig::globalVariables()['heading']['title']; ?></h1><h2 class="text-center text-white bg-[--primary] px-[15px] py-[5px] rounded-[40px] text-[40px]"><?= SystemConfig::globalVariables()['heading']['title_span']; ?></h2></div><h3 class="text-center text-[20px]"><?= SystemConfig::globalVariables()['heading']['description']; ?></h3><div class="flex flex-row justify-center gap-10 w-full max-w-[1000px] m-10"><div class="relative"><img draggable="false" src="/controllers/client/img/ip.png" alt="" class="size-full object-fill"><div class="size-full absolute top-0 left-0 px-[10px] py-[70px] flex flex-col items-center"><div class="rounded-[20px] overflow-hidden"><img draggable="false" src="/controllers/client/img/aboveIp.png" alt="" class="object-fill"></div></div></div><div class="translate-y-[50px] shadow-xl"><img draggable="false" src="/controllers/client/img/ebusiness.png" alt="" class="size-full object-fill"></div></div></div></div><div class="flex flex-row gap-10 w-full justify-center"><div class="bioBtn"><?= bioTemplateButton("")->render(".bioBtn"); ?></div><div class="w-[150px] h-[60px]"><?= (new SigninTrial())->render(); ?></div></div><div id="showcase"></div><div class="w-full"><div><img draggable="false" src="/controllers/client/img/eBusiness1.jpg"></div><div><img draggable="false" src="/controllers/client/img/eBusiness2.jpg"></div></div> <?php
        copyright([
            'position' => 'relative'
        ])->render();
        ?> </div></body></html>