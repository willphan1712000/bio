<?php
    use config\SystemConfig;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    $g = SystemConfig::globalVariables();

    require_once __DIR__.'/../data/backend/persistence/Database.php';
    use persistence\Database;
    $conn = Database::connection();

    require_once __DIR__."/../controllers/components/button/forgot/ForgotGoBack.php";
    use function component\button\forgot\forgotGoBack;

    require_once __DIR__."/../controllers/components/Logo.php";
    use function component\logo;

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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind91522c2f842a4d2d1c27.js"></script><script src="/dist/mainjsdfb22f6e78fce5f1b6a0.js"></script><script src="/dist/prevjs193bd9fc95f6c951fbc2.js"></script><script src="/dist/universal1ed11b7151cd51cfb9c6.js"></script><script src="/dist/maindf3fac941aab013505c9.js"></script></head><body><div class="logo"><?= logo()->render();?></div><div class="signupParent"><div class="signupChild <?=$inactive;?>"><h1 class="text-[32px]">Find Username</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="email">Email</label> <input type="text" id="email" name="email" autocomplete="email" value="<?=$email?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Find</button></form><p class="signupChild__msg"><?=forgotGoBack()->render();?></p></div><div class="signupChild result <?=$active;?>"><h2 class="text-[24px]">You have <?=$count;?> account(s)</h2><br> <?=$accStr;?> <p class="signupChild__msg"><?=forgotGoBack()->render();?></p></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'forgotUsername'</script></body></html>