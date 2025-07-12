<?php

use config\SystemConfig;
use component\Copyright;
use business\user\UserManagement;
use component\Logo;

$g = SystemConfig::globalVariables();
// SESSION_START();
$isSignedIn = UserManagement::isSignedIn($_SESSION, "Allinclicks");
if (!$isSignedIn) {
    header("Location: /@signin");
}
if (isset($_POST['aicLogout'])) {
    unset($_SESSION['Allinclicks']);
    header("Location: /");
}
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AIC Admin</title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind1edf565441a817fd8e4d.js"></script><script src="/dist/universal56b8682cfc65c1e46fec.js"></script><script src="/dist/main27655435eb708b25bab5.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/aicjs4696ccfe434e29a7a72a.js"></script></head><body><div class="warning__parent"><div class="warning__child"><i class="fa-solid fa-circle-exclamation"></i><p style="text-align: center">Warning, all information of this account will be deleted, are you sure you want to proceed?</p><div class="btn"><div class="btn__ele btn__confirm">Yes</div><div class="btn__ele btn__back">No</div></div></div></div><div id="aic"><div class="logo flex flex-row justify-between"><?= (new Logo())->render(); ?> <form action="" method="POST"><button name="aicLogout" class="aicBtn">Sign out <i class="fa-solid fa-right-from-bracket"></i></button></form></div><div class="search-area"><input type="text" placeholder="Search username or email" id="search"></div><div id="userData"></div><?php
                                    (new Copyright([
                                        'position' => 'relative'
                                    ]))->render();
                                    ?> </div><script>const type = 'aic';</script></body></html>