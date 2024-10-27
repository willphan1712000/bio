<?php
    use config\SystemConfig;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    $g = SystemConfig::globalVariables();
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script></head><body><div id="container"><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div id="code404"><img src="<?=$g['img']['expire']?>" alt=""> <a href="/">Go back</a></div><?php
copyright([
    'position' => 'absolute'
])->render();
?></div></body></html>