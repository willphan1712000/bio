<?php
    require_once __DIR__."/../data/core.php";
    use config\SystemConfig;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    $g = SystemConfig::globalVariables();
    require_once __DIR__."/../controllers/components/button/forgot/ForgotSignup.php";
    use function component\button\forgot\forgotSignup;
    require_once __DIR__."/../controllers/components/Logo.php";
    use function component\logo;
    
    $error = "";
    $username = "";
    $password = "";

    SESSION_START();
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        if(Database::isUserExist($username)) {
            if($password === API::GET("user", "password", "username='$username'")) {
                header("Location: /".$username."/admin");
                $_SESSION[$username] = $username;
                $_SESSION['last_time_'.$username] = time();
            } else {
                $error = "The password is not correct";
            }
        } 
        else if ($username === $g['aicAccount']['username'] && $password === $g['aicAccount']['password']) {
            header("Location: /aic");
            $_SESSION[$username] = $username;
            $_SESSION['last_time_'.$username] = time();
        }
        else {
            $error = "The username does not exist";
        }
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwindd023bb991ce9cd120f0a.js"></script><script src="/dist/mainjs0a1e7cae19d8e79549f2.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/maindf3fac941aab013505c9.js"></script></head><body><div class="logo"><?= logo()->render();?></div><div class="signupParent"><div class="signupChild"><h1 class="text-[32px]">Restore you account</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" value="<?=$username;?>" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" value="<?=$password;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Retrieve</button></form><p class="signupChild__msg"><?=forgotSignup()->render();?></p></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'signin'</script></body></html>