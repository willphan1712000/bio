<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();

    // Retrieve from the url
    $username = SystemConfig::URLExtraction();

    // Fetch theme
    $themeQuery = mysqli_query($conn, "SELECT *FROM template WHERE username = '$username'");
    $themeArray = mysqli_fetch_assoc($themeQuery);
    $themeid = $themeArray['themeid'];
    
    // Fetch info
    $infoQuery = mysqli_query($conn, "SELECT *FROM info WHERE username = '$username'");
    $infoArray = mysqli_fetch_assoc($infoQuery);
    if(!empty($infoArray['image'])) {
        $imgPath = "/user/".$username."/".$infoArray['image']."?v=".time();
    } else {
        $imgPath = $g['img']['unknown'];
    }
    // Get url for the page with specific username
    $url = $g['domain']."/".$username;

    // This is information that gets passed down to the corresponsing template
    $infoObject = infoProcess($infoArray);
    $props = [
        'username' => $username,
        'url' => $url,
        'imgPath' => $imgPath,
        'g' => $g,
        'themeid' => $themeid
    ];
    ?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['userTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="/dist/mainjsec5b9ab1a17f97698fc7.js"></script><script src="/dist/prevjsf653a0680d67309c043e.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/admindfad6b7feede043f2872.js"></script></head><body><script>const type = "index";
        const url = "<?=$url;?>";
        const username = "<?=$username;?>";</script><div id="notSupported"><p>Bio does not support wide screen!</p></div><div id="container"><?php require 'dist/theme/'.$themeid.'.php';?></div></body></html>