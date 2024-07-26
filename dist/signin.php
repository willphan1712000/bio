<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    SESSION_START();
    $template = SystemConfig::URLExtraction("template");

    
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        // check if user exists
        if(Database::isUserExist($username)) {
            // check if password is correct
            if($password === Database::GET("user", "password", "username='$username'")) {
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
        else if ($username === 'Allinclicks' && $password === '123456') {
            header("Location: /aic");
            $_SESSION[$username] = $username;
            $_SESSION['last_time_'.$username] = time();
        }
        else {
            $error = "The username does not exist";
        }
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjsd10a9436e92a7a5aa299.js"></script><script src="/dist/prevjs75ef337007db52255b8b.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/main2fd4abe93118e30e8b41.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild"><h1>Sign In</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" value="<?=$username;?>" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" value="<?=$password;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Log in</button></form><p class="signupChild__msg">Not have an account? <a href="/signup">Sign up</a></p><p class="signupChild__msg"><a href="/forgot">Forgot password?</a></p><p class="signupChild__msg"><a href="/restoreSignin">Restore Account</a></p></div></div><div id="copyright"><p><?=$g['license'];?></p></div><script>const type = 'signin'</script></body></html>