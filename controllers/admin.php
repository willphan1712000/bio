<?php
    require_once __DIR__."/../data/core.php";
    use config\SystemConfig;
    require_once __DIR__."/../data/backend/business/TemplateManagement.php";
    use business\TemplateManagement;
    require_once __DIR__."/../data/backend/business/controllers/User.php";
    use business\controllers\user;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    $g = SystemConfig::globalVariables();

    // get User object
    $user = user();
    SystemConfig($user->getUsername());

    // Retrieve from the url
    $username = explode("/", parse_url($_SERVER['REQUEST_URI'])['path'])[1];
    
    // Fetch user info
    $infoArray = API::GET("info", null, "username='$username'");
    if(!empty($infoArray['image'])) {
        $imgPath = "/user/".$username."/".$infoArray['image']."?v=".time();
        $imgName = $infoArray['image'];
    } else {
        $imgPath = $g['img']['unknown'];
        $imgName = "unknown.png";
    }

    // Get themeid
    $themeid = TemplateManagement::shareTemplate($username, (int) SystemConfig::URLExtraction("tem"));
    // Get CSS for corresponding template
    $css = API::GET("style", null, "username = '$username' AND template_id = '$themeid'");

    // This is information that gets passed down to the corresponsing template
    $props = [
        'username' => $username,
        'imgPath' => $imgPath,
        'social' => SystemConfig::socialNameArr(),
        'icon' => SystemConfig::socialIconArr(),
        'info' => infoProcess($infoArray),
        'css' => $css,
        'mode' => 'div'
    ];

    // get deleteToken
    $deleteToken = API::GET("user", "deleteToken", "username='$username'");
    SESSION_START();
    // Check if user is signed in
    $isSignedIn = UserManagement::isSignedIn($_SESSION, $username);
    if($isSignedIn) {
        // Check if there is a deleteToken. If so, redirect to restore page
        if($deleteToken !== NULL && $deleteToken !== "") {
            if(time() - $deleteToken < $g["accountHoldPeriod"]) {
                header("Location: /restore?username=".$username);
            } else {
                if(DeleteAccount::delete($username)) {
                    header("Location: /signin");
                }
            }
        }
    } else {
        header("Location: /signin");
    }

    if(isset($_POST['signout'])) {
        unset($_SESSION[$username]);
        header("Location: /".$username);
    }
    $socialNameArr = SystemConfig::socialNameArr();
    $socialIconArr = SystemConfig::socialIconArr();
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