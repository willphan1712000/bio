<?php

use config\SystemConfig;

require_once __DIR__ . "/../controllers/components/Logo.php";

use function component\logo;

require_once __DIR__ . "/../controllers/components/Copyright.php";

use function component\copyright;

$g = SystemConfig::globalVariables();
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind7c4b8c62ec3e53eac047.js"></script><script src="/dist/universal2ba20df9b06e3d2d0bf4.js"></script><script src="/dist/maine07987f6d90b98ed7b00.js"></script></head><body><div id="container"><div class="logo mt-[20px]"><?= logo(["src" => $g["img"]["logo"]])->render(); ?></div><div id="code404"><img draggable="false" src="<?= $g['img']['404'] ?>" alt=""> <a href="/">Go back</a></div><?php
                                                                                                                    copyright([
                                                                                                                        'position' => 'absolute'
                                                                                                                    ])->render();
                                                                                                                    ?> </div></body></html>