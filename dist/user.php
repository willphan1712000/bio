<?php
    // Retrieve global variables
    $g = SystemConfig::globalVariables();

    // Retrieve from the url
    $username = SystemConfig::URLExtraction();
    // Get themeid
    $themeid = TemplateManagement::shareTemplate($username, (int) SystemConfig::URLExtraction("tem"));
    
    // Fetch user info
    $infoArray = API::GET("info", null, "username='$username'");
    if(!empty($infoArray['image'])) {
        $imgPath = "/user/".$username."/".$infoArray['image']."?v=".time();
    } else {
        $imgPath = $g['img']['unknown'];
    }
    // Get url for the page with specific username
    $url = UserManagement::URLGenerator($username, "share");

    // This is information that gets passed down to the corresponsing template
    $props = [
        'username' => $username,
        'imgPath' => $imgPath,
        'social' => SystemConfig::socialNameArr(),
        'icon' => SystemConfig::socialIconArr(),
        'info' => infoProcess($infoArray),
        'css' => ''
    ];
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['userTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs98c98bc328c72b30b9cf.js"></script><script src="/dist/prevjscfd778853ecbd1ec7e76.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/admin1d4ab13e5ac317247590.js"></script></head><body><div id="notSupported"><p>Bio does not support wide screen!</p></div><div id="container"> <?php 
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