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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs6e97ed374a039d423b62.js"></script><script src="/dist/prevjsfef3b9fd4103de3f1b43.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/main8afd369922045352e41e.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild"><h1>Sign In</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" value="<?=$username;?>" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" value="<?=$password;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Log in</button></form><p class="signupChild__msg">Not have an account? <a href="/signup">Sign up</a></p><p class="signupChild__msg"><a href="/forgot">Forgot password?</a></p><p class="signupChild__msg"><a href="/restoreSignin">Restore Account</a></p></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'signin'</script></body></html>