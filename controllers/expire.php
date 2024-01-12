<?php
    $g = SystemConfig::globalVariables();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/css/universal.css?v=<?=$v;?>">
    <link rel="stylesheet" type="text/css" href="/css/main.css?v=<?=$v;?>">
    <title><?=$title;?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
</head>
<body>
    <div id="container">
        <div class="logo">
            <img src="<?=$g['img']['logo']?>" alt="">
        </div>
        <div id="code404">
            <img src="<?=$g['img']['expire']?>" alt="">
            <a href="/">Go back</a>
        </div>
        <div id="copyright">
            <p><?=$g['license'];?></p>
        </div>
    </div>
    <script src="/src/module/jQuery371.js"></script>
</body>
</html>