<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();

    // Retrieve from the url
    $username = SystemConfig::URLExtraction();

    // Get themeid
    $themeid = TemplateManagement::shareTemplate($username, (int) SystemConfig::URLExtraction("tem"));
    
    // Fetch user info
    $infoArray = Database::GET("info", null, "username='$username'");
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
        'url' => $url,
        'imgPath' => $imgPath,
        'g' => $g,
        'themeid' => $themeid
    ];
    ?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['userTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="/dist/mainjsd10a9436e92a7a5aa299.js"></script><script src="/dist/prevjsa274e09fc8db800bb6b5.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/admin13b0ae32e26ed92071d2.js"></script></head><body><script>const type = "index";
        const url = "<?=$url;?>";
        const username = "<?=$username;?>";</script><div id="notSupported"><p>Bio does not support wide screen!</p></div><div id="container"><?php require 'dist/theme/'.$themeid.'.php';?></div></body></html>