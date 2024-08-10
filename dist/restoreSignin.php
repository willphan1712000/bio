<?php
    $g = SystemConfig::globalVariables();

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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjsf9b20177fb1c38855b4b.js"></script><script src="/dist/prevjs384aca48b6a6f564908b.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/main8afd369922045352e41e.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild"><h1>Restore you account</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" value="<?=$username;?>" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" value="<?=$password;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Retrieve</button></form><p class="signupChild__msg"><a href="/forgot">Forgot password?</a></p></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'signin'</script></body></html>