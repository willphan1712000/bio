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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind78104726b74cd11ad4dd.js"></script><script src="/dist/universal7a528f12fa5fb93514d3.js"></script><script src="/dist/animationcc82e4f117de9532f8a4.js"></script><script src="/dist/main90cdc39fc1912d9e1afd.js"></script><script src="/dist/index86c5ae3fbbe0101b2e51.js"></script></head><body><div id="container"><div class="w-full hidden lg:flex flex-row justify-between p-[10px] bg-white"><div class="w-fit"><?= logo()->render(); ?></div><div class="flex flex-row gap-5 justify-start items-center flex-1 px-10"><a href="/@template" class="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Templates</a> <a href="/@about" class="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">About us</a> <a href="/@terms" class="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Terms & Privacy</a> <a href="/@blogs" class="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Blogs</a></div><div class="flex flex-row gap-2"><div class="w-[100px] h-[50px]"><?= signinMain()->render(); ?></div><div class="w-[100px] h-[50px]"><?= signupMain()->render(); ?></div></div></div><div class="flex flex-col relative"><div class="w-full lg:hidden flex flex-row justify-between p-[10px] bg-white"><div><?= logo()->render(); ?></div><div class="flex flex-col items-start justify-center text-[30px] cursor-pointer transition-all" id="navBtn"><i class="fa-solid fa-bars"></i></div><div class="flex-col items-start justify-center text-[30px] cursor-pointer transition-all hidden" id="navBtnClose"><i class="fa-solid fa-circle-xmark"></i></div></div><div class="bg-white p-5 rounded-[30px] absolute top-[110%] left-0 w-full z-[99] invisible" id="nav"><div class="flex flex-col gap-5 justify-start items-center flex-1 px-10"><a href="/@template" class="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Templates</a> <a href="/@about" class="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">About us</a> <a href="/@terms" class="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Terms & Privacy</a> <a href="/@blogs" class="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Blogs</a></div><div class="flex flex-row gap-2 justify-center py-5"><div class="w-[100px] h-[50px]"><?= signinMain()->render(); ?></div><div class="w-[100px] h-[50px]"><?= signupMain()->render(); ?></div></div></div></div><div class="heading my-10 rounded-[20px] bg-white"><div class="w-full min-w-[300px] gap-5 flex flex-col py-[50px] items-center px-[10px]"><div id="heading" class="w-full"></div><div class="flex flex-row justify-center gap-10 w-full max-w-[1000px] m-10"><div class="relative overflow-hidden shadow-2xl rounded-[7%]"><img draggable="false" src="/controllers/client/img/ip.png" alt="" class="size-full object-fill"></div><div class="translate-y-[50px] flex flex-col gap-5"><img draggable="false" src="/controllers/client/img/eBusiness01.png" alt="" class="object-fill shadow-xl"> <img draggable="false" src="/controllers/client/img/eBusiness02.png" alt="" class="object-fill shadow-xl"></div></div></div><div class="flex flex-row gap-10 w-full justify-center pb-10"><div class="bioBtn"><?= bioTemplateButton("")->render(".bioBtn"); ?></div><div class="w-[150px] h-[60px]"><?= (new SigninTrial())->render(); ?></div></div></div><div id="showcase"></div><div id="templates"></div><div id="footer"></div> <?php
        copyright([
            'position' => 'relative'
        ])->render();
        ?> </div></body></html>