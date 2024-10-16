<?php
    require_once __DIR__."/../data/core.php";
    use config\SystemConfig;
    $g = SystemConfig::globalVariables();
    require_once __DIR__."/../data/backend/business/controllers/User.php";
    use function business\controllers\user;
    require_once __DIR__."/../data/backend/business//InfoProcess.php";
    use function business\infoProcess;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    require_once __DIR__."/../controllers/components/Template.php";
    use function component\template;
    
    // get User object
    $user = user();
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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['userTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind980897a7c3c2117e8977.js"></script><script src="/dist/mainjsf4784fdc304bace1820b.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/admin5c9da877814c70ad7150.js"></script></head><body><div id="notSupported"><p>Bio does not support wide screen!</p></div><div id="container"> <?php 
            template($themeid, $props)->execute()->html();
        ;?> </div><div id="userFooter"> <?php
        userFooter($props)->render("#userFooter");
    ?> </div> <?php copyright([
            'position' => 'relative'
    ])->render();?> <script>const type = "index";
        const props = {
            url: "<?=$url;?>",
            username: "<?=$username;?>"
        }</script></body></html>