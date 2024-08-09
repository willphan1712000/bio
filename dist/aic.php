<?php
    $g = SystemConfig::globalVariables();
    SESSION_START();
    $isSignedIn = UserManagement::isSignedIn($_SESSION, "Allinclicks");
    if(!$isSignedIn) {
        header("Location: /signin");
    }
    if(isset($_POST['aicLogout'])) {
        unset($_SESSION['Allinclicks']);
        header("Location: /");
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AIC Admin</title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs1131e78e9868f0ce632e.js"></script><script src="/dist/prevjs363358df1fa53ed6f478.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/main8afd369922045352e41e.js"></script></head><body><div class="warning__parent"><div class="warning__child"><i class="fa-solid fa-circle-exclamation"></i><p>Warning, all information of this account will be deleted, are you sure you want to proceed?</p><div class="btn"><div class="btn__ele btn__confirm">Yes</div><div class="btn__ele btn__back">No</div></div></div></div><div id="container"><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""><form action="" method="POST"><button name="aicLogout" class="aicBtn">Sign out <i class="fa-solid fa-right-from-bracket"></i></button><button name="migration" class="aicBtn migration"><i class="fa-solid fa-database"></i></button></form></div><div class="search-area"><input type="text" placeholder="Search username or email" id="search"></div><div id="userData"></div><?php
copyright([
    'position' => 'relative'
])->render();
?></div><script>const type = 'aic';</script></body></html>