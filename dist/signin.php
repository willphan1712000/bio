<?php
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
        if(Database::isUserExist($username)) {
            // check if password is correct
            if($password === API::GET("user", "password", "username='$username'")) {
                if($template === 'true') {
                    header("Location: /template?username=".$username);
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
            header("Location: /aic");
            $_SESSION[$username] = $username;
            $_SESSION['last_time_'.$username] = time();
        }
        else {
            $error = "The username does not exist";
        }
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs6aea2df1c89e84d6f7a5.js"></script><script src="/dist/prevjs051119bc8e2a2ef287f1.js"></script><script src="/dist/universala65ac2dbc01a46adc0ce.js"></script><script src="/dist/mainf113d1b5433e744d1d14.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild"><h1>Sign In</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" value="<?=$username;?>" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" value="<?=$password;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Log in</button></form><p class="signupChild__msg">Not have an account? <a href="/signup">Sign up</a></p><p class="signupChild__msg"><a href="/forgot">Forgot password?</a></p><p class="signupChild__msg"><a href="/restoreSignin">Restore Account</a></p></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'signin'</script></body></html>