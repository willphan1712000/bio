<?php
    use config\SystemConfig;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    use business\UserManagement;
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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AIC Admin</title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind91522c2f842a4d2d1c27.js"></script><script src="/dist/mainjsdfb22f6e78fce5f1b6a0.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/maindf3fac941aab013505c9.js"></script></head><body><div class="warning__parent"><div class="warning__child"><i class="fa-solid fa-circle-exclamation"></i><p style="text-align: center">Warning, all information of this account will be deleted, are you sure you want to proceed?</p><div class="btn"><div class="btn__ele btn__confirm">Yes</div><div class="btn__ele btn__back">No</div></div></div></div><div id="aic"><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""><form action="" method="POST"><button name="aicLogout" class="aicBtn">Sign out <i class="fa-solid fa-right-from-bracket"></i></button></form></div><div class="search-area"><input type="text" placeholder="Search username or email" id="search"></div><div id="userData"></div><?php
copyright([
    'position' => 'relative'
])->render();
?></div><script>const type = 'aic';</script></body></html>