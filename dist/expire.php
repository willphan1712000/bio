<?php

use config\SystemConfig;
use component\Copyright;
use component\Logo;

$g = SystemConfig::globalVariables();
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind450ab20ce04033f7cf14.js"></script><script src="/dist/universalcd9b0fe72e36233b9716.js"></script><script src="/dist/main7ce0f0e4043b4b1c5bc1.js"></script></head><body><div id="container"><div class="logo"><?= (new Logo())->render(); ?></div><div id="code404"><img src="<?= $g['img']['expire'] ?>" alt=""> <a href="/">Go back</a></div><?php
                                                                                                        (new Copyright([
                                                                                                            'position' => 'absolute'
                                                                                                        ]))->render();
                                                                                                        ?> </div></body></html>