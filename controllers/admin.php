<?php
    use config\SystemConfig;
    $g = SystemConfig::globalVariables();
    require_once __DIR__."/../data/backend/business/TemplateManagement.php";
    use business\TemplateManagement;
    require_once __DIR__."/../data/backend/business/controllers/User.php";
    use function business\controllers\user;
    require_once __DIR__."/../data/backend/business/controllers/Admin.php";
    use function business\controllers\admin;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    require_once __DIR__."/../data/backend/business/InfoProcess.php";
    use function business\infoProcess;
    

    // get User object
    $user = user(true);

    // get username
    $username = $user->getUsername();
    // Get themeid
    $themeid = $user->getThemeid();
    // Get CSS for corresponding template
    $css = $user->getCSS();
    // Get url for the page with specific username
    $url = $user->getURL();

    // This is information that gets passed down to the corresponsing template
    $props = [
        'username' => $username,
        'imgPath' => $user->getImgPath(),
        'social' => SystemConfig::socialNameArr(),
        'icon' => SystemConfig::socialIconArr(),
        'info' => infoProcess($user->getInfo()),
        'css' => $css,
        'mode' => 'a'
    ];

    // Get admin object
    $admin = admin($username, $themeid);
    // Theme redirect
    $admin->themeRedirect();

    if(isset($_POST['signout'])) {
        unset($_SESSION[$username]);
        header("Location: /".$username);
    }
?>
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['adminTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <div id="admin">
        <div id="notSupported">
            <p>Bio does not support wide screen!</p>
        </div>
        <div class="navigator">
            <a href="/<?=$username;?>" class="back"><i class="fa-solid fa-arrow-left"></i></a>
            <div class="save">Save</div>
        </div>
        <div class="card-container swiper">
            <div class="swiper-wrapper">
                <div id="container" class="front swiper-slide">
                    <div class="label">Front</div>
                    <?php
                        template($themeid, $props)->execute()->html();
                    ;?>
                </div>
                <div class="back swiper-slide">
                    <div class="label">Back</div>
                    <?php
                        back([
                            'container' => '.back',
                            'username' => $username,
                            'info' => infoProcess($infoArray)
                        ])->render();
                    ?>
                </div>
            </div>
        </div>
        <div id="setting">
            <?php
                setting([
                    "username" => $username,
                    "container" => "#setting"
                ])->render();
            ?>
        </div>
        <?php copyright([
                'position' => 'relative'
        ])->render();?>
    </div>
    <script>
        const type = "admin";
        const props = {
            username: "<?=$username;?>",
            css: <?= json_encode($css); ?>,
            imgPath: "<?=$imgPath;?>",
            imgName: "<?=$imgName;?>",
        }
    </script>
</body>
</html>