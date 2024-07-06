<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    //===========================
    parse_str(parse_url($_SERVER['REQUEST_URI'])['query'], $username);
    $username = $username['username'];
    SESSION_START();
    if(isset($_SESSION[$username])) {
        if(time() - $_SESSION['last_time_'.$username] > $g['timeSession']) {
            unset($SESSION[$username]);
            header("Location: /signin");
        } else {
            $_SESSION['last_time_'.$username];
        }
    }
    //===========================
    $deleteTokenQuery = mysqli_query($conn, "SELECT deleteToken FROM user WHERE username = '$username'");
    $deleteToken = mysqli_fetch_assoc($deleteTokenQuery)['deleteToken'];
    if($deleteToken !== '') {
        $dayLeft = ($g['accountHoldPeriod'] - time() + $deleteToken)/(24*60*60);
        $dayLeft = round($dayLeft);
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs9eecd35401945f04b14f.js"></script><script src="/dist/universal056b5415057854568042.js"></script><script src="/dist/maine1cd11ce5daa50672bcb.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild <?=$inactive;?>"><h1>Restore Account</h1><p class="restore__msg">Your account has been deactivated</p><p class="restore__msg">You have <?=$dayLeft;?> days left to restore your account for the username "<?=$username;?>"</p><p class="restore__msg">Otherwise, your account will be permanently deleted</p><div class="btn__restore"><div class="btn__ele btn__ele--restore">Restore Account</div><div class="btn__ele btn__ele--delete">Delete Permanently</div></div><p class="signupChild__msg"><a href="/signin">Go back to sign in</a></p></div></div><div id="copyright"><p><?=$g['license'];?></p></div><script>const type = 'restore'
        const username = '<?=$username;?>'</script></body></html>