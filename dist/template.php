<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    $query = parse_url($_SERVER['REQUEST_URI'])['query'];
    parse_str($query, $query_params);
    $username = isset($query_params['username']) ? $query_params['username'] : null;
    SESSION_START();
    $isSigndin = "false";
    if($_SESSION[$username]) {
        $isSigndin = "true";
        // Fetch info
        $infoQuery = mysqli_query($conn, "SELECT *FROM info WHERE username = '$username'");
        $infoArray = mysqli_fetch_assoc($infoQuery);
        if(!empty($infoArray['image'])) {
            $imgPath = "/user/".$username."/".$infoArray['image']."?v=".time();
        } else {
            $imgPath = $g['img']['unknown'];
        }
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs9eecd35401945f04b14f.js"></script><script src="/dist/universal056b5415057854568042.js"></script><script src="/dist/template858b4de8f9537ffa3faf.js"></script></head><body><div id="container"><div class="logo"><div class="logo-box"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="btn-box"> <?php
                    if($isSigndin === "true") {
                        echo '
                            <a class="btn-ele signin" href="/'.$username.'/admin"><div class="img"><img draggable="false" src="'.$imgPath.'"></div><p>'.$username.'</p></a>
                        ';
                    } else {
                        echo '
                            <a class="btn-ele signin" href="/signin"><i class="fa-solid fa-user"></i> Sign in</a>
                        ';
                    }
                ?> <a href="/cart" class="btn-ele cart"><i class="fa-solid fa-cart-shopping"></i> Cart</a></div></div><div class="heading"><h1>Choose Your Template</h1></div><div class="template-wrapper"><div class="filter"><h2>Filter</h2><div class="type"><div class="typebox popular"><a href="/">Popular</a></div><div class="typebox industry"><a href="/">Industry</a></div><div class="typebox color"><a href="/">Color</a></div><div class="typebox color"><a href="/">Like</a></div></div></div><div class="template_container one"> <?php
                    Template::style("template_container");
                    for($i = 1; $i <= 10; $i++) {
                        template([
                            'id' => $i,
                            'img' => '../img/template/'.$i.'/'.$i.'.png',
                            'container' => 'template_container'
                        ])->render();
                    }
                ?> </div><div class="template_container two"> <?php
                    // for($i = 21; $i <= 40; $i++) {
                    //     template([
                    //         'id' => $i,
                    //         'img' => '../img/template/2/2.png',
                    //         'container' => 'template_container'
                    //     ])->render();
                    // }
                ?> </div></div><div id="copyright"><p><?=$g['license'];?></p></div></div><script>var type = "template"
        var props = {
            username: "<?=$username;?>",
            isSignedin: "<?=$isSigndin;?>"
            }</script></body></html>