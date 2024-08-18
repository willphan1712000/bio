<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();

    $error = "";
    $email = "";

    if(isset($_POST['submit'])) {
        $email = $_POST['email'];
        $emailQuery = mysqli_query($conn, "SELECT username FROM user WHERE email = '$email'");
        $accStr = "";
        $count = 0;
        while($row = mysqli_fetch_assoc($emailQuery)) {
            $count++;
            $accStr .= "<h3>".$row['username']."</h3>";
        }
        if(empty($accStr)) {
            $error = "The email does not exist";
        } else {
            $error = "";
            $inactive = "inactive";
            $active = "active";
        }
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs3d99126ee196a9dec83c.js"></script><script src="/dist/prevjsaf96a7828228cba12375.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/maindbc952ffa3a0d6096c5a.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild <?=$inactive;?>"><h1>Find Username</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="email">Email</label> <input type="text" id="email" name="email" autocomplete="email" value="<?=$email?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Find</button></form><p class="signupChild__msg"><a href="/forgot">Go back</a></p></div><div class="signupChild result <?=$active;?>"><h2>You've got <?=$count;?> account(s)</h2><br> <?=$accStr;?> <p class="signupChild__msg"><a href="/forgot">Go back to forgot password</a></p></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'forgotUsername'</script></body></html>