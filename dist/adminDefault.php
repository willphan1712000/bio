<?php

use controllers\admin\AdminController;

$admin = new AdminController();
$admin->execute();

$g = $admin->get("g");
$info = $admin->get("info");
$socialNameArr = [];
$username = $admin->get("username");

foreach ($info as $k => $v) {
    $socialNameArr[] = $k;
}
if (isset($_POST['signout'])) {
    unset($_SESSION[$username]);
    header("Location: /" . $username);
}
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" type="text/css" href="/controllers/default/css/user.css?v=<?= $g['v']; ?>"><title><?= $g['adminTitle']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind01cdca0d51a92739a06f.js"></script><script src="/dist/universal85b9f1cc8a4751304c9b.js"></script><script src="/dist/adminDefaultjs048a44f1b64b1f616f97.js"></script></head><body><div id="container"><div class="msg successMsg"><i class="fa-solid fa-check"></i><p>Updated!</p></div><div class="msg errorMsg"><i class="fa-solid fa-x"></i><p>Internal Error!</p></div><div class="msg notValidForm"><i class="fa-solid fa-x"></i><p>Some information is not valid, try again!</p></div><div class="warning__parent"><div class="warning__child"><i class="fa-solid fa-circle-exclamation"></i><p><?= $g['deleteWarningMsg']['msg1']; ?></p><br><p><?= $g['deleteWarningMsg']['msg2']; ?></p><br><p><?= $g['deleteWarningMsg']['msg3']; ?></p><br><p><?= $g['deleteWarningMsg']['msg4']; ?></p><br><div class="btn"><div class="btn__ele btn__confirm">Yes</div><div class="btn__ele btn__back">No</div></div></div></div><div class="adminSection"><div class="backToBio"><a href="/<?= $username; ?>"><i class="fa-solid fa-arrow-left"></i></a></div><div class="info"><div class="info__img info__img--ava"><input type="file" class="uploadImg" accept="image/*" name="uploadImg" hidden> <input type="text" class="uploadImg__filename" name="uploadImg__filename" hidden><div class="info__img--remove"><i class="fa-solid fa-x"></i></div><div class="info__img--location"><img src="" alt=""></div></div><div class="info__img--modify"><div class="info__img--choose">Choose picture</div></div><div class="info__about"><div class="info__name"><form action=""><label for="name">Name</label> <input type="text" id="name" name="name" autocomplete="on"></form></div><div class="info__org"><form action=""><label for="org">Organization</label> <input type="text" id="org" name="org" autocomplete="on"></form></div><div class="info__des admin"><label for="des">Description</label> <textarea name="des" id="des"></textarea></div></div></div><div id="social-media"></div></div><div class="adminBtn"><div class="adminBtn__ele adminBtn__save"><span><i class="fa-solid fa-check"></i> Save</span></div><div class="adminBtn__ele adminBtn__index"><span>Go To Bio <i class="fa-solid fa-arrow-right"></i></span></div><form action="" method="POST" style="width: 100%;"><button style="border: none; color: #000;" name="signout" class="adminBtn__ele adminBtn__index"><span>Sign out</span><i class="fa-solid fa-right-from-bracket"></i></button></form><div class="adminBtn__ele adminBtn__delete"><span><i class="fa-solid fa-trash"></i> Delete Account</span></div></div><div id="copyright"><p><?= $g['license']; ?></p></div></div><script>const socialName = (<?= json_encode($socialNameArr); ?>)
        const time = (<?= time(); ?>)
        const username = "<?= $username ?>"
        const defaultImgPath = '<?= $g['img']['unknown']; ?>'</script></body></html>