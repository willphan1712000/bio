<?php
    require_once __DIR__."/../data/core.php";
    use config\SystemConfig;
    require_once __DIR__."/../data/backend/business/UserManagement.php";
    use business\UserManagement;
    require_once __DIR__."/../data/backend/persistence/API.php";
    use persistence\API;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    require_once __DIR__."/../controllers/components/Logo.php";
    use function component\logo;
    require_once __DIR__."/../controllers/components/signup/SignupSignin.php";
    use function component\signup\signupSignin;
    require_once __DIR__."/../controllers/components/button/forgot/ForgotSignup.php";
    use function component\button\forgot\forgotSignup;


    $g = SystemConfig::globalVariables();
    SESSION_START();
    $template = SystemConfig::URLExtraction("template");
    
    $error = "";
    $username = "";
    $password = "";
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        // check if user exists
        if(UserManagement::isUserExist($username)) {
            // check if password is correct
            if($password === API::GET("user", "password", "username='$username'")) {
                if($template === 'true') {
                    header("Location: /@template?username=".$username);
                } else {
                    header("Location: /".$username."/admin");
                }
                $_SESSION[$username] = $username;
                $_SESSION['last_time_'.$username] = time();
            } else {
                $error = "The password is not correct";
            }
        } 
        else if ($username === $g['aicAccount']['username'] && $password === $g['aicAccount']['password']) {
            header("Location: /@aic");
            $_SESSION[$username] = $username;
            $_SESSION['last_time_'.$username] = time();
        }
        else {
            $error = "The username does not exist";
        }
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind980897a7c3c2117e8977.js"></script><script src="/dist/mainjsf4784fdc304bace1820b.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/maindf3fac941aab013505c9.js"></script></head><body><div class="logo"> <?=logo(["src" => $g["img"]["logo"]])->render();?> </div><div class="signupParent flex justify-center items-center h-[75vh]"><div class="signupChild w-[80%] max-w-[500px] h-[90%] rounded-[20px] bg-white flex justify-center items-center flex-col" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"><h1 style="font-size: 32px;">Sign In</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" value="<?=$username;?>" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" value="<?=$password;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Log in</button></form><p class="signupChild__msg">Not have an account? <?=signupSignin()->render();?></p><p class="signupChild__msg"><?=forgotSignup()->render();?></p><p class="signupChild__msg"><a class="shadow rounded-[10px] bg-white p-[6px]" href="/@restoreSignin">Restore Account</a></p></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'signin'</script></body></html>