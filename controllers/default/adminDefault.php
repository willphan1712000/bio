<?php

use controllers\admin\AdminController;

$admin = new AdminController();
$admin->execute();

$g = $admin->get("g");
$info = $admin->get("info");
$username = $admin->get("username");

if (isset($_POST['signout'])) {
    unset($_SESSION[$username]);
    header("Location: /" . $username);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/controllers/default/css/user.css?v=<?= $g['v']; ?>">
    <title><?= $g['adminTitle']; ?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <div id="container">
        <div class="adminSection">
            <div class="backToBio">
                <a href="/<?= $username; ?>"><i class="fa-solid fa-arrow-left"></i></a>
            </div>
            <div id="info__wrapper"></div>
        </div>
        <div class="adminBtn">
            <div class="adminBtn__ele adminBtn__index">
                <a href="/<?= $username; ?>" class="w-full h-full p-[20px] flex justify-center"><span>Go To Bio <i class="fa-solid fa-arrow-right"></i></span></a>
            </div>
            <form action="" method="POST" style="width: 100%;">
                <button style="border: none; color: #000;" name="signout" class="adminBtn__ele adminBtn__index"><span>Sign out</span><i class="fa-solid fa-right-from-bracket"></i></button>
            </form>
        </div>
        <div id="copyright">
            <p><?= $g['license']; ?></p>
        </div>
    </div>

    <script>
        const username = "<?= $username ?>"
        const defaultImgPath = '<?= $g['img']['unknown']; ?>'
    </script>
</body>

</html>