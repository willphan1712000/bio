<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();

    // Retrieve from the url
    $username = basename(parse_url($_SERVER['REQUEST_URI'])['path']);

    // Fetch theme
    $themeQuery = mysqli_query($conn, "SELECT *FROM theme WHERE username = '$username'");
    $themeArray = mysqli_fetch_assoc($themeQuery);
    $themeid = $themeArray['themeid'];
    
    // Fetch info
    $infoQuery = mysqli_query($conn, "SELECT *FROM info WHERE username = '$username'");
    $infoArray = mysqli_fetch_assoc($infoQuery);
    if(!empty($infoArray['image'])) {
        $imgPath = "/user/".$username."/".$infoArray['image']."?v=".$g['v'];
    } else {
        $imgPath = $g['img']['unknown'];
    }

    // Get url for the page with specific username
    $url = $g['domain']."/".$username;

    // Get some necessary arrays
    $socialNameArr = SystemConfig::socialNameArr();
    $socialIconArr = SystemConfig::socialIconArr();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/css/universal.css?v=<?=$g['v'];?>">
    <title><?=$g['userTitle'];?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
    <script src="/src/module/jQuery371.js"></script>
</head>
<body>
    <div id="container"><?php require 'theme/'.$themeid.'.php';?></div>
    <script src="/js/bundle.js?v=<?=$g['v'];?>"></script>
</body>
</html>