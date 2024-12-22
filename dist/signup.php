<?php

use config\SystemConfig;

require_once __DIR__ . "/../controllers/components/Copyright.php";

use function component\copyright;

require_once __DIR__ . "/../controllers/components/TermsCheckBox.php";

use function component\termsCheckBox;

require_once __DIR__ . "/../controllers/components/Logo.php";

use function component\logo;

$g = SystemConfig::globalVariables();

require_once __DIR__ . "/../controllers/components/signin/SigninSignup.php";

use function component\signin\signinSignup;

require_once __DIR__ . "/../controllers/components/signin/SigninOriginal.php";

use function component\signin\signinOriginal;

require_once __DIR__ . "/../controllers/components/signup/SignupAgain.php";

use function component\signup\signupAgain;
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= $g['title']; ?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind47405e76c3bc0414eb3f.js"></script><script src="/dist/universal338525335f3c1d0938f4.js"></script><script src="/dist/maindf3fac941aab013505c9.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/signupjs59da90c83b1b1e69d06b.js"></script></head><body><div class="logo"><?= logo(["src" => $g["img"]["logo"]])->render(); ?></div><div class="signupParent"><div class="passRequirements"><p><i class="fa-solid fa-arrow-down" style="margin-right: 2px"></i> PASSWORD REQUIREMENTS</p><p><br><br></p><p>Password must have at least 12 characters</p><br><br><p>Password must have at least 1 upper case</p><br><br><p>Password must have at least 1 digit</p><!-- <br></br>
            <p>Password must have at least 1 special character</p> --></div><div class="signupChild"><h1 style="font-size:32px;">Sign Up</h1><span class="signupChild__error">Please fill in all information!</span><form action="" id="signup" method=""><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" required></div><div class="inputField"><label for="email">Email</label> <input type="text" id="email" name="email" autocomplete="on" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" required></div><div class="terms"> <?= termsCheckBox([])->render(); ?> </div><button type="submit" class="signupChild__confirm">Register</button></form><p class="signupChild__msg">Already have an account? <?= signinSignup()->render(); ?></p></div><div class="signupChild signupSuccess"><div class="signupSuccess__logo"><i class="fa-solid fa-check"></i></div><div class="signupSuccess__text"><h1 class="text-[30px]">You have signed up successfully</h1></div><div class="signupSuccess__btn"><?= signinOriginal()->render(); ?> <?= signupAgain()->render(); ?></div></div></div><?php
            copyright([
                'position' => 'absolute'
            ])->render();
            ?> <script>const type = 'signup'</script></body></html>