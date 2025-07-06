<?php

use component\BioTemplateButton;
use component\signup\SignupAgain;
use controllers\admin\AdminController;

$admin = new AdminController();
$admin->execute();

$g = $admin->get("g");
$username = $admin->get("username");

if (isset($_POST['signout'])) {
    unset($_SESSION[$username]);
    header("Location: /" . $username);
}
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" type="text/css" href="/controllers/default/css/user.css?v=<?= $g['v']; ?>"><title><?= $g['adminTitle']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind43d2f876c5813fde811a.js"></script><script src="/dist/universal412383bc723d1cec4f85.js"></script><script src="/dist/adminDefaultjs5708b0473b9fb65766fa.js"></script></head><body><div id="container"><div id="uploadImage"></div><div class="adminSection"><div class="mt-[20px]"><div id="template1"><?= (new BioTemplateButton($username))->render('#template1'); ?></div></div><div class="backToBio"><a href="/<?= $username; ?>">Go to bio<i class="fa-solid fa-arrow-left"></i></a></div><div id="info__wrapper"></div></div><div class="mb-[15px]"><div id="template2"><?= (new BioTemplateButton($username))->render('#template2'); ?></div></div><div class="adminBtn"><div class="adminBtn__ele adminBtn__index"><a href="/<?= $username; ?>" class="w-full h-full p-[20px] flex justify-center"><span>Go To Bio <i class="fa-solid fa-arrow-right"></i></span></a></div><form action="" method="POST" style="width: 100%;"><button style="border: none; color: #000;" name="signout" class="adminBtn__ele adminBtn__index"><span>Sign out</span><i class="fa-solid fa-right-from-bracket"></i></button></form></div><div class="mt-4"> <?= (new SignupAgain())->render(); ?> </div><div id="delete" class="mt-[20px]"></div><div id="copyright"><p><?= $g['license']; ?></p></div></div></body></html>