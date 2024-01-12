<?php
    $g = SystemConfig::globalVariables();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/css/universal.css?v=<?=$g['v'];?>">
    <link rel="stylesheet" type="text/css" href="/css/main.css?v=<?=$g['v'];?>">
    <link rel="stylesheet" type="text/css" href="/css/animation.css?v=<?=$g['v'];?>">
    <title><?=$g['title'];?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
</head>
<body>
    <div id="container">
        <div class="logo">
            <img src="<?=$g['img']['logo']?>" alt="">
        </div>
        <div class="heading">
            <h1>Create Your Bio</h1>
            <img src="<?=$g['img']['bio']?>" alt="">
        </div>
        <div class="register">
            <a class="register__btn register__btn--signin" href="/signin"><i class="fa-solid fa-right-to-bracket"></i>Sign in</a>
            <a class="register__btn register__btn--signup" href="/signup"><i class="fa-brands fa-stumbleupon"></i>Sign up</a>
        </div>
        <div id="copyright">
        <p><?=$g['license'];?></p>
        </div>
    </div>
    <script src="/src/module/jQuery371.js"></script>
</body>
</html>