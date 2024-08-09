<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();

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
    $infoObject = infoProcess($infoArray);
    $props = [
        'username' => $username,
        'imgPath' => $imgPath,
        'social' => SystemConfig::socialNameArr(),
        'icon' => SystemConfig::socialIconArr(),
    ];
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['userTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="/dist/mainjs6e97ed374a039d423b62.js"></script><script src="/dist/prevjsfef3b9fd4103de3f1b43.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/adminbb028b60915efb71733f.js"></script></head><body><script>const type = "index";
        const url = "<?=$url;?>";
        const username = "<?=$username;?>";</script><div id="notSupported"><p>Bio does not support wide screen!</p></div><div id="container"><?php require 'dist/theme/'.$themeid.'.php';?></div><div id="userFooter"> <?php
        userFooter($props)->render("#userFooter");
    ?> </div> <?php copyright([
            'position' => 'relative'
    ])->render();?> </body></html>