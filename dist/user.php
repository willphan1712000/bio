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
    
    $props = SystemConfig::infoProcess($infoArray);
    $props['config'] = [
        'username' => $username,
        'url' => $url,
        'imgPath' => $imgPath,
        'g' => $g,
    ];
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['userTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjsc3e4a6f26f8d2dc7741e.js"></script><script src="/dist/universal056b5415057854568042.js"></script><script src="/dist/admin538d6b540e2f698d2eb4.js"></script></head><body><script>const type = "index";
        const url = "<?=$url;?>"</script><div id="container"><?php require 'dist/theme/'.$themeid.'.php';?></div></body></html>