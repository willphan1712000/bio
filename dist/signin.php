<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    SESSION_START();
    $query = parse_url($_SERVER['REQUEST_URI'])['query'];
    parse_str($query, $query_params);
    $checkout = isset($query_params['checkout']) ? $query_params['checkout'] : null;
    $itemid = isset($query_params['itemid']) ? $query_params['itemid'] : null;
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $userQuery = mysqli_query($conn, "SELECT *FROM user");
        while($row = mysqli_fetch_assoc($userQuery)) {
            if($row['username'] === $username) {
                $usernameExist = true;
                break;
            }
        }
        if($usernameExist) {
            $passwordQuery = mysqli_query($conn, "SELECT password FROM user WHERE username = '$username'");
            $passwordFetched = mysqli_fetch_assoc($passwordQuery)['password'];
            if($passwordFetched === $password) {
                if($checkout === "true") {
                    header("Location: /checkout?username=".$username."&itemid=".$itemid."");
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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjsec5b9ab1a17f97698fc7.js"></script><script src="/dist/prevjsf653a0680d67309c043e.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/main2fd4abe93118e30e8b41.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild"><h1>Sign In</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="on" value="<?=$username;?>" required></div><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="on" value="<?=$password;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Log in</button></form><p class="signupChild__msg">Not have an account? <a href="/signup">Sign up</a></p><p class="signupChild__msg"><a href="/forgot">Forgot password?</a></p><p class="signupChild__msg"><a href="/restoreSignin">Restore Account</a></p></div></div><div id="copyright"><p><?=$g['license'];?></p></div><script>const type = 'signin'</script></body></html>