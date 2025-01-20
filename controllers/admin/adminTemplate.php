<?php

use component\Back;
use component\Copyright;
use config\SystemConfig;
use component\BioTemplateButton;
use business\info\display\Display;
use controllers\admin\AdminController;
use controllers\template\TemplateFactory;

$admin = new AdminController(); // get admin object
$admin->execute();

/** @var Display[] */
$infoArray = $admin->get("info");

$username = $admin->get("username"); // get username
$themeid = $admin->get("themeid"); // Get themeid
$css = $admin->get("css"); // Get CSS for corresponding template
$image = $infoArray['image']->getHTML() === null || $infoArray['image']->getHTML() === '' ? $g['img']['unknown'] : "/user/" . $username . "/" . $infoArray['image']->getHTML();
$g = $admin->get("g");


$imgPath = $image;
$imgName = '';

// This is information that gets passed down to the corresponsing template
// This is information that gets passed down to the corresponsing template
$props = [
    'username' => $username,
    'imgPath' => $image,
    'info' => $infoArray,
    'css' => $css
];

if (isset($_POST['signout'])) {
    unset($_SESSION[$username]);
    header("Location: /" . $username);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title><?= $g['adminTitle']; ?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <div id="admin">
        <div id="notSupported">
            <p>Bio does not support wide screen!</p>
        </div>

        <a href="/<?= $username; ?>" class="z-10 p-[15px] bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center no-underline text-black cursor-pointer fixed top-[0.5rem] left-[0.5rem]" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"><i class="fa-solid fa-arrow-left"></i></a>
        <div class="z-10 rounded-[20px] cursor-pointer p-[15px] bg-white fixed top-[0.5rem] right-[0.5rem]" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"></div>
        <div>
            <div class="card-container swiper" style="scrollbar-width: none;">
                <div class="swiper-wrapper">
                    <div id="container" class="front swiper-slide">
                        <div class="face-card-label">Front</div>
                        <?php
                        TemplateFactory::getInstance()->getTemplate($themeid)->html($props);
                        ?>
                    </div>
                    <div class="back swiper-slide">
                        <div class="face-card-label">Back</div>
                        <?=
                        (new Back([
                            'container' => '.back',
                            'username' => $username,
                            'info' => $props['info']
                        ]))->render();
                        ?>
                    </div>
                </div>
            </div>
            <div id="setting" class="sticky bottom-0 z-[10] w-full"></div>
        </div>
        <div class="bioBtn"><?= (new BioTemplateButton($username))->render(".bioBtn"); ?></div>
        <div class="flex justify-center items-center mt-[10px]">
            <form action="" method="POST">
                <button name="signout" class="ele logout typebox"><i class="fa-solid fa-right-from-bracket"></i> Log Out</button>
            </form>
        </div>
        <?php (new Copyright([
            'position' => 'relative'
        ]))->render(); ?>
    </div>
    <script>
        const type = "admin";
        const props = {
            username: "<?= $username; ?>",
            css: <?= json_encode($css); ?>,
            imgPath: "<?= $imgPath; ?>",
            imgName: "<?= $imgName; ?>",
        }
    </script>
</body>

</html>