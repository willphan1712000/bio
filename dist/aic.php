<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    SESSION_START();
    if(isset($_SESSION['Allinclicks'])) {
        if(time() - $_SESSION['last_time_Allinclicks'] > $g['timeSession']) {
            unset($_SESSION['Allinclicks']);
            header("Location: /signin");
        } else {
            $_SESSION['Allinclicks'] = time();
        }
    } else {
        header("Location: /signin");
    }
    if(isset($_POST['aicLogout'])) {
        unset($_SESSION['Allinclicks']);
        header("Location: /");
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AIC Admin</title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjsec5b9ab1a17f97698fc7.js"></script><script src="/dist/prevjsf653a0680d67309c043e.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/main2fd4abe93118e30e8b41.js"></script></head><body><div class="warning__parent"><div class="warning__child"><i class="fa-solid fa-circle-exclamation"></i><p>Warning, all information of this account will be deleted, are you sure you want to proceed?</p><div class="btn"><div class="btn__ele btn__confirm">Yes</div><div class="btn__ele btn__back">No</div></div></div></div><div id="container"><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""><form action="" method="POST"><button name="aicLogout" class="aicLogout">Sign out <i class="fa-solid fa-right-from-bracket"></i></button></form></div><div id="userData"></div><div id="copyright"><p><?=$g['license'];?></p></div></div><script>const type = 'aic';</script></body></html>