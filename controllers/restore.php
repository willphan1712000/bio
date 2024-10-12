<?php
    require_once __DIR__."/../data/core.php";
    use config\SystemConfig;
    require_once __DIR__."/../controllers/components/Copyright.php";
    use function component\copyright;
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    //===========================
    $username = SystemConfig::URLExtraction("username");
    SESSION_START();
    $isSignedIn = UserManagement::isSignedIn($_SESSION, $username);

    if(!$isSignedIn) {
        header("Location: /signin");
    }

    $deleteToken = API::GET("user", "deleteToken", "username = '$username'");
    $dayLeft = "";
    if(!empty($deleteToken)) {
        $dayLeft = ($g['accountHoldPeriod'] - time() + $deleteToken)/(24*60*60);
        $dayLeft = round($dayLeft);
    } else {
        header("Location: /");
    }
?>
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild <?=$inactive;?>"><h1>Restore Account</h1><p class="restore__msg"><?=$g['restoreWarningMsg']['msg1'];?></p><p class="restore__msg"><?=$g['restoreWarningMsg']['msg2'];?><?=$dayLeft;?><?=$g['restoreWarningMsg']['msg3'];?>"<?=$username;?>"</p><p class="restore__msg"><?=$g['restoreWarningMsg']['msg4'];?></p><div class="btn__restore"><div class="btn__ele btn__ele--restore">Restore Account</div><div class="btn__ele btn__ele--delete">Delete Permanently</div></div><p class="signupChild__msg"><a href="/signin">Go back to sign in</a></p></div></div>
    <?php
    copyright([
        'position' => 'absolute'
    ])->render();
    ?>
    <script>
        const type = 'restore'
        const props = {
            username: "<?=$username? $username : "";?>"
        }
    </script>
</body>
</html>