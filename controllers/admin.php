<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    $username = explode("/", parse_url($_SERVER['REQUEST_URI'])['path'])[1];
    // Check if there is a deleteToken. If so, redirect to restore page
    $deleteTokenQuery = mysqli_query($conn, "SELECT deleteToken FROM user WHERE username = '$username'");
    $deleteToken = mysqli_fetch_assoc($deleteTokenQuery)['deleteToken'];
    SESSION_START();
    if(isset($_SESSION[$username])) {
        if(time() - $_SESSION['last_time_'.$username] > $g['timeSession']) {
            unset($_SESSTION[$username]);
            header("Location: /signin");
        } else {
            if($deleteToken !== "") {
                if(time() - $deleteToken < $g["accountHoldPeriod"]) {
                    header("Location: /restore?username=".$username);
                } else {
                    header("Location: /signin");
                }
            }
            $_SESSION['last_time_'.$username] = time();
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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/css/universal.css?v=<?=$g['v'];?>">
    <link rel="stylesheet" type="text/css" href="/css/user.css?v=<?=$g['v'];?>">
    <title><?=$g['adminTitle'];?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
    <script src="/src/module/jQuery371.js"></script>
</head>
<body>
    <div id="container">
        <div class="msg successMsg">
            <i class="fa-solid fa-check"></i>
            <p>Updated!</p>
        </div>
        <div class="msg errorMsg">
            <i class="fa-solid fa-x"></i>
            <p>Internal Error!</p>
        </div>
        <div class="msg notValidForm">
            <i class="fa-solid fa-x"></i>
            <p>Some information is not valid, try again!</p>
        </div>
        <div class="warning__parent">
            <div class="warning__child">
                <i class="fa-solid fa-circle-exclamation"></i>
                <p><?=$g['deleteWarningMsg']['msg1'];?></p></br>
                <p><?=$g['deleteWarningMsg']['msg2'];?></p></br>
                <p><?=$g['deleteWarningMsg']['msg3'];?></p></br>
                <p><?=$g['deleteWarningMsg']['msg4'];?></p></br>
                <div class="btn">
                    <div class="btn__ele btn__confirm">Yes</div>
                    <div class="btn__ele btn__back">No</div>
                </div>
            </div>
        </div>
        <div class="adminSection">
            <div class="backToBio">
                <a href="/<?=$username;?>"><i class="fa-solid fa-arrow-left"></i></a>
            </div>
            <div class="info">
                <div class="info__img info__img--ava">
                    <div class="info__img--remove"><i class="fa-solid fa-x"></i></div>
                    <input type="file" class="uploadImg" accept="image/*" name="uploadImg" hidden>
                    <input type="text" class="uploadImg__filename" name="uploadImg__filename" hidden>
                    <div class="info__img--location">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="info__img--modify">
                    <h3>Drag, Rotate, or Zoom</h3>
                    <div class="info__img--choose">Choose picture</div>
                </div>
                <div class="info__about">
                    <div class="info__name">
                        <form action="">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" autocomplete="on">
                        </form>
                    </div>
                    <div class="info__org">
                        <form action="">
                            <label for="org">Organization</label>
                            <input type="text" id="org" name="org" autocomplete="on">
                        </form>
                    </div>
                    <div class="info__des admin">
                        <label for="des">Description</label>
                        <textarea name="des" id="des"></textarea>
                    </div>
                </div>
            </div>
            <div id="social-media"></div>
            <script>
                const socialName = (<?=json_encode($socialNameArr);?>)
                const icon = (<?=json_encode($socialIconArr);?>)
                const time = (<?=time();?>)
                
                for(let i = 0; i < socialName.length; i++) {
                    let string = socialName[i], displayString = string[0]
                    for(let j = 1; j < string.length; j++) {
                        displayString += (string[j] === string[j].toUpperCase()) ? ' ' + string[j] : string[j]
                    }
                    let inputmode = '', codeDisplay = 'flex', placeholder = '';
                    if(socialName[i] === 'Mobile' || socialName[i] === 'Work') {
                        inputmode = 'numeric'
                    } else {
                        codeDisplay = 'none'
                    }
                    if(socialName[i] === 'Messenger') {
                        placeholder = 'Facebook Username'
                    } else if (socialName[i] === 'Mobile' || socialName[i] === 'Work' || socialName[i] === 'Zalo') {
                        placeholder = `${displayString} phone number here`
                    } else if (socialName[i] === 'Address') {
                        placeholder = `Choose ${displayString} or ${displayString} link here`
                    } else {
                        placeholder = `${displayString} link here`
                    }
                    
                    $("#social-media").append(`<div class="social ${socialName[i]}"><div class="social__img info__img">${icon[i]}</div><div class="social__info info__about"><div class="info__name"><form action=""><label for="social__info">${displayString}</label><span></span><br></br><div class="inputWrapper"><div class="countryCode" style="display: ${codeDisplay}" data-index><div class="flag"><img style="width:100%;height:100%;"></div><p class="code"></p><i class="fa-solid fa-caret-down"></i></div><div class="codeList"><div class="codeList__search"><input name = "search" id = "searchCountry" type="text" placeholder="Search Country"></div><div class="codeList__list"></div></div><input id="social__info" placeholder="${placeholder}" autocomplete="on" name="${socialName[i]}" type="text" inputmode="${inputmode}" id="social__info"></div></form></div></div></div>`)
                }
                fetch("/src/module/countryCodes.json").then(res => res.json()).then(data => {
                    let htmlList = '', htmlCountryCode = '', index = ''
                    for(let j = 0; j < data.length; j++) {
                        htmlList += `<div class="each" data-index="${j}"><p>${data[j].name}</p><p>${data[j].dial_code}</p></div>`
                    }
                    $(".codeList__list").html(htmlList)
                    $(".codeList__list > .each").click(function(e) {
                        afterClick(e, data, null)
                    })
                    return [data, htmlList]
                }).then(([data, iniHtmlList]) => {
                    const worker = new Worker('/src/module/worker.js')
                    $(".codeList__search > input").on("input", function(e) {
                        let value = e.currentTarget.value
                        worker.postMessage({
                            message: "countryCode",
                            value: value,
                            iniHtmlList: iniHtmlList,
                            data: data
                        })
                    })

                    worker.onmessage = function(e) {
                        $(".codeList__list").html(e.data)
                        $(".codeList__list > .each").click(function(e) {
                            afterClick(e, data, iniHtmlList)
                        })
                    }
                    
                })

                function afterClick(e, data, iniHtmlList) {
                    $(".codeList").removeClass("active")
                    index = $(e.currentTarget).data("index")
                    $(e.currentTarget).parent().parent().prev().data("index", index)
                    htmlCountryCode = `<div class="flag"><img src="/src/module/flags/${data[index].code.toLowerCase()}.png" style="width:100%;height:100%;""></div><p class="code">${data[index].dial_code}</p><i class="fa-solid fa-caret-down"></i>`
                    $(e.currentTarget).parent().parent().prev().html(htmlCountryCode)
                    $(".codeList__search > input").val("")
                    if(iniHtmlList !== null) {
                        $(".codeList__list").html(iniHtmlList)
                    }
                }
                const type = "admin"
                const username = "<?=$username?>"
                const defaultImgPath = '<?=$g['img']['unknown'];?>'
            </script>
        </div>
        <div class="adminBtn">
            <div class="adminBtn__ele adminBtn__save"><span><i class="fa-solid fa-check"></i> Save</span></div>
            <div class="adminBtn__ele adminBtn__index"><span>Go To Bio <i class="fa-solid fa-arrow-right"></i></span></div>
            <form action="" method="POST">
                <button style = "border: none; color: #000;" name="signout" class="adminBtn__ele adminBtn__index"><span>Sign out</span><i class="fa-solid fa-right-from-bracket"></i></button>
            </form>
            <div class="adminBtn__ele adminBtn__delete"><span><i class="fa-solid fa-trash"></i> Delete Account</span></div>
        </div>
        <div id="copyright">
        <p><?=$g['license'];?></p>
        </div>
    </div>
    <script src="/js/bundle.js?v=<?=$g['v'];?>"></script>
</body>
</html>