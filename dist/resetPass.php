<?php
    use config\SystemConfig;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    parse_str(parse_url($_SERVER['REQUEST_URI'])['query'], $info);
    if(!empty($info)) {
        $username = $info['username'];
        $time = str_replace("/", "", parse_url($_SERVER['REQUEST_URI'])['path']);
        if(time() - $time > $g['resetExpire']) {
            header("Location: /emailExpire");
            mysqli_query($conn, "UPDATE user SET token='' WHERE username='$username'");
        } else {
            if(isset($_POST['submit'])) {
                $password = $_POST['password'];
                $verifyPassword = $_POST['verifyPassword'];
                $valid = SystemConfig::isPassVaild($password);
                if(!$valid) {
                    $error = "The password is not valid";
                } else {
                    if(!($password === $verifyPassword)) {
                        $error = "The verified password does not match";
                    } else {
                        if(mysqli_query($conn, "UPDATE user SET password = '$password' WHERE username = '$username'")) {
                            mysqli_query($conn, "UPDATE user SET token='' WHERE username='$username'");
                            $inactive = "inactive";
                            $active = "active";
                        }
                    }
                }
            }
        }
    } else {
        header("Location: /emailExpire");
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwindfc97e7eb53cc1abd30b6.js"></script><script src="/dist/mainjs8acb8b78f2db2c5348d8.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/maindf3fac941aab013505c9.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild <?=$inactive;?>"><h1>Reset Password</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="password">Password</label> <input type="password" id="password" name="password" autocomplete="password" value="<?=$password;?>" required></div><div class="inputField"><label for="verifyPassword">Verify Password</label> <input type="password" id="verifyPassword" name="verifyPassword" autocomplete="verifyPassword" value="<?=$verifyPassword;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Change</button></form></div><div class="signupChild passwordResetSuccess <?=$active;?>"><div><i class="fa-solid fa-check" style="font-size: 40px;color: green;border: solid 2px green;border-radius: 50%;padding: 20px;margin-bottom: 10px;"></i></div><h2>Password has been reset successfully</h2><a style="text-decoration: none;" href="/signin">Go back to sign in</a></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'resetPass';</script></body></html>