<?php

use config\SystemConfig;
use component\Copyright;
use component\Logo;

$g = SystemConfig::globalVariables();
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind0666e23e4a4885b6ac6f.js"></script><script src="/dist/universal7a528f12fa5fb93514d3.js"></script><script src="/dist/maineb1da2c20ca10011f016.js"></script></head><body><div id="container"><div class="logo"><?= (new Logo())->render(); ?></div><div id="code404"><img src="<?= $g['img']['expire'] ?>" alt=""> <a href="/">Go back</a></div><?php
                                                                                                        (new Copyright([
                                                                                                            'position' => 'absolute'
                                                                                                        ]))->render();
                                                                                                        ?> </div></body></html>