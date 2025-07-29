<?php

use component\Logo;
use component\Copyright;
use component\signin\SigninGoBack;
use config\SystemConfig;

$img = SystemConfig::globalVariables()['img']['deactivate'];

?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Document</title><script src="/dist/tailwind0240c3d16c0012a88d88.js"></script><script src="/dist/universala11dc2d6c81a1151b30c.js"></script></head><body><div class="logo mt-[20px]"><?= (new Logo())->render(); ?></div><div id="container" class="flex flex-col justify-center items-center"><div class="p-[30px]"><h1 class="text-[20px] shadow-xs rounded-[30px] bg-[#f0f0f0] p-[20px] text-center">Your account is being deactivated, go to sign in to restore your account now</h1></div><div id="code404" class="max-w-[500px]"><img draggable="false" src="<?= $img ?>"></div> <?= (new SigninGoBack())->render(); ?> </div> <?php
    (new Copyright([
        'position' => 'absolute'
    ]))->render();
    ?> </body></html>