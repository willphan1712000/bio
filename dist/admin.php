<?php
    $g = SystemConfig::globalVariables();
    // get username
    $username = explode("/", parse_url($_SERVER['REQUEST_URI'])['path'])[1];
    // Get user info
    $info = API::GET("info", null, "username = '$username'");
    // Get user style
    $style = API::GET("style", null, "username = '$username'");
    // Get themeid
    $themeid = TemplateManagement::shareTemplate($username, (int) SystemConfig::URLExtraction("tem"));
    // Fetch user info
    $infoArray = API::GET("info", null, "username='$username'");
    if(!empty($infoArray['image'])) {
        $imgPath = "/user/".$username."/".$infoArray['image']."?v=".time();
    } else {
        $imgPath = $g['img']['unknown'];
    }

    // Get CSS for corresponding template
    $css = API::GET("style", null, "username = '$username' AND template_id = '$themeid'");

    // This is information that gets passed down to the corresponsing template
    $props = [
        'username' => $username,
        'imgPath' => $imgPath,
        'social' => SystemConfig::socialNameArr(),
        'icon' => SystemConfig::socialIconArr(),
        'info' => infoProcess($infoArray),
        'css' => $css,
        'mode' => 'div'
    ];

    // get deleteToken
    $deleteToken = API::GET("user", "deleteToken", "username='$username'");
    SESSION_START();
    // Check if user is signed in
    $isSignedIn = UserManagement::isSignedIn($_SESSION, $username);
    if($isSignedIn) {
        // Check if there is a deleteToken. If so, redirect to restore page
        if($deleteToken !== NULL && $deleteToken !== "") {
            if(time() - $deleteToken < $g["accountHoldPeriod"]) {
                header("Location: /restore?username=".$username);
            } else {
                if(DeleteAccount::delete($username)) {
                    header("Location: /signin");
                }
            }
        }
    } else {
        header("Location: /signin");
    }

    if(isset($_POST['signout'])) {
        unset($_SESSION[$username]);
        header("Location: /".$username);
    }
    $socialNameArr = SystemConfig::socialNameArr();
    $socialIconArr = SystemConfig::socialIconArr();
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['adminTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><style>#colorBox {
            width: 200px;
            height: 200px;
            border: 1px solid #000;
            background-color: hsl(0, 100%, 50%);
        }

        #hueSlider {
            width: 100%;
            -webkit-appearance: none;
            appearance: none;
            height: 15px;
            border-radius: 5px;
            background: linear-gradient(to right, 
                hsl(0, 100%, 50%), 
                hsl(60, 100%, 50%), 
                hsl(120, 100%, 50%), 
                hsl(180, 100%, 50%), 
                hsl(240, 100%, 50%), 
                hsl(300, 100%, 50%), 
                hsl(360, 100%, 50%)
            );
            outline: none;
            opacity: 0.9;
            transition: opacity 0.2s;
        }

        #hueSlider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }

        #hueSlider::-moz-range-thumb {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }</style><script src="/dist/mainjs6aea2df1c89e84d6f7a5.js"></script><script src="/dist/prevjs051119bc8e2a2ef287f1.js"></script><script src="/dist/universala65ac2dbc01a46adc0ce.js"></script><script src="/dist/admin8a3be923deff20d8b97c.js"></script></head><body><div id="admin"><div id="notSupported"><p>Bio does not support wide screen!</p></div><div class="navigator"><a href="/<?=$username;?>" class="back"><i class="fa-solid fa-arrow-left"></i></a><div class="save">Save</div></div><div class="card-container swiper"><div class="swiper-wrapper"><div id="container" class="front swiper-slide"><div class="label">Front</div><div class="label upload"><i class="fa-solid fa-arrow-up"></i> Upload</div><div class="label delete"><i class="fa-solid fa-x"></i></div> <?php
                        template($themeid, $props)->execute()->html();
                    ;?> </div><div class="back swiper-slide"><div class="label">Back</div> <?php
                        back([
                            'container' => '.back',
                            'username' => $username,
                            'info' => infoProcess($infoArray)
                        ])->render();
                    ?> </div></div></div><div id="setting"> <?php
                setting([
                    "username" => $username,
                    "container" => "#setting"
                ])->render();
            ?> </div> <?php copyright([
                'position' => 'relative'
        ])->render();?> </div><script>const type = "admin";
        const props = {
            css: <?= json_encode($css); ?> }</script></body></html>