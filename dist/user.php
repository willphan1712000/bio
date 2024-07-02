<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();

    // Retrieve from the url
    $username = basename(parse_url($_SERVER['REQUEST_URI'])['path']);

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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['userTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="/dist/mainjscaf15e31e326def9a2a2.js"></script><script src="/dist/universal056b5415057854568042.js"></script><script src="/dist/admin3555b57f2e1256a77c51.js"></script></head><body><script>const type = "index";
        const url = "<?=$url;?>"</script><div id="container"><?php require 'dist/theme/'.$themeid.'.php';?></div></body></html>