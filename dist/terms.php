<?php

use config\SystemConfig;

$g = SystemConfig::globalVariables();

require_once __DIR__ . "/../controllers/components/Logo.php";

use function component\logo;

require_once __DIR__ . "/../controllers/components/Copyright.php";

use function component\copyright;

require_once __DIR__ . "/../controllers/components/signup/SignupTerms.php";

use function component\signup\signupTerms;
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Terms and Conditions</title><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="/dist/tailwindf63dd34fe18146c17f3e.js"></script><script src="/dist/universala11dc2d6c81a1151b30c.js"></script><script src="/dist/terms2b340b0bdfb5751c895d.js"></script></head><body class="flex justify-center items-center flex-col"> <?= signupTerms()->render(); ?> <div class="m-2.5 w-[300px]"> <?= logo(["src" => $g["img"]["logo"]])->render(); ?> </div><div id="container" class="max-w-[700px] relative bg-gradient-to-r from-red-500 to-purple-500 p-[3px] m-[20px] rounded-[30px]" style="width: calc(100% - 40px)"><div class="content bg-white rounded-[30px] p-8"></div></div> <?php
    copyright([
        "position" => "relative"
    ])->render();
    ?> </body></html>