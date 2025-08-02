<?php

use component\Logo;
use component\Copyright;
use component\signin\SigninGoBack;
use config\SystemConfig;
use controllers\restore\RestoreAccount;

$restore = new RestoreAccount();
$restore->execute();
$dayLeft = $restore->get("dayLeft");
$username = $restore->get("username");
$g = SystemConfig::globalVariables();
$inactive = "active";
$error = $restore->get("error");

if (isset($_POST['restore'])) {
    $restore->restore();
    $error = $restore->get("error");
}

if (isset($_POST['delete'])) {
    $restore->delete();
    $error = $restore->get("error");
}
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind2d0ebcb25c920814e8d3.js"></script><script src="/dist/universala11dc2d6c81a1151b30c.js"></script><script src="/dist/mainbc04966ddf355a8e3efc.js"></script></head><body><div class="logo"><?= (new Logo())->render(); ?></div><div class="signupParent"><div class="relative pt-4 signupChild <?= $inactive; ?>"><h1 class="absolute top-[-20px] p-2 bg-white rounded-2xl shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">Restore Account</h1><p class="restore__msg"><?= $g['restoreWarningMsg']['msg1']; ?></p><p class="restore__msg"><?= $g['restoreWarningMsg']['msg2']; ?><?= $dayLeft; ?><?= $g['restoreWarningMsg']['msg3']; ?>"<?= $username; ?>"</p><p class="restore__msg"><?= $g['restoreWarningMsg']['msg4']; ?></p><div class="btn__restore"><form action="" method="POST"><button type="submit" name="restore" class="btn__ele btn__ele--restore">Restore Account</button><p class="mt-3 text-[red]"><?= $error; ?></p><button type="submit" name="delete" class="p-0 w-[150px] h-[40px] text-[12px] !bg-[#f0f0f0] btn__ele btn__ele--delete">Delete Permanently</button></form></div><div class="signupChild__msg absolute bottom-[-20px]"><?= (new SigninGoBack())->render(); ?></div></div></div> <?php
    (new Copyright([
        'position' => 'absolute'
    ]))->render();
    ?> </body></html>