<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    SESSION_START();
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
                header("Location: /".$username."/admin");
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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/css/universal.css?v=<?=$g['v'];?>">
    <link rel="stylesheet" type="text/css" href="/css/main.css?v=<?=$g['v'];?>">
    <title><?=$g['title'];?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="logo">
        <img src="<?=$g['img']['logo']?>" alt="">
    </div>
    <div class="signupParent">
        <div class="signupChild">
            <h1>Restore you account</h1>
            <span class="signupChild__error"><?=$error;?></span>
            <form action="" id="signup" method="POST">
                <div class="inputField">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" autocomplete="on" value="<?=$username;?>" required>
                </div>
                <div class="inputField">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" autocomplete="on" value="<?=$password;?>" required>
                </div>
                <button type="submit" name="submit" class="signupChild__confirm--php">Retrieve</button>
            </form>
            <p class="signupChild__msg"><a href="/forgot">Forgot password?</a>
        </div>
    </div>
    <div id="copyright">
    <p><?=$g['license'];?></p>
	</div>
    <script>const type = 'signin'</script>
    <script src="/src/module/jQuery371.js"></script>
    <script src="/js/bundle.js?v=<?=$g['v'];?>"></script>
</body>
</html>