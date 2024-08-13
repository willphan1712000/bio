<?php
    $g = SystemConfig::globalVariables();
    // get username
    $username = explode("/", parse_url($_SERVER['REQUEST_URI'])['path'])[1];
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
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['adminTitle'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs1065e557f6b66a6596d4.js"></script><script src="/dist/prevjs384aca48b6a6f564908b.js"></script><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script src="/dist/adminbb028b60915efb71733f.js"></script></head><body><div id="container"><div class="msg successMsg"><i class="fa-solid fa-check"></i><p>Updated!</p></div><div class="msg errorMsg"><i class="fa-solid fa-x"></i><p>Internal Error!</p></div><div class="msg notValidForm"><i class="fa-solid fa-x"></i><p>Some information is not valid, try again!</p></div><div class="warning__parent"><div class="warning__child"><i class="fa-solid fa-circle-exclamation"></i><p><?=$g['deleteWarningMsg']['msg1'];?></p><br><p><?=$g['deleteWarningMsg']['msg2'];?></p><br><p><?=$g['deleteWarningMsg']['msg3'];?></p><br><p><?=$g['deleteWarningMsg']['msg4'];?></p><br><div class="btn"><div class="btn__ele btn__confirm">Yes</div><div class="btn__ele btn__back">No</div></div></div></div><div class="adminSection"><div class="backToBio"><a href="/<?=$username;?>"><i class="fa-solid fa-arrow-left"></i></a></div><div class="info"><div class="info__img info__img--ava"><input type="file" class="uploadImg" accept="image/*" name="uploadImg" hidden> <input type="text" class="uploadImg__filename" name="uploadImg__filename" hidden><div class="info__img--remove"><i class="fa-solid fa-x"></i></div><div class="info__img--location"><img src="" alt=""></div></div><div class="info__img--modify"><h3>Drag, Rotate, or Zoom</h3><div class="info__img--choose">Choose picture</div></div><div class="info__about"><div class="info__name"><form action=""><label for="name">Name</label> <input type="text" id="name" name="name" autocomplete="on"></form></div><div class="info__org"><form action=""><label for="org">Organization</label> <input type="text" id="org" name="org" autocomplete="on"></form></div><div class="info__des admin"><label for="des">Description</label> <textarea name="des" id="des"></textarea></div></div></div><div id="social-media"></div><script>const socialName = (<?=json_encode($socialNameArr);?>)
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
                    
                    $("#social-media").append(`<div class="social ${socialName[i]}"><div class="social__img info__img">${icon[i]}</div><div class="social__info info__about"><div class="info__name"><form action=""><label for="social__info">${displayString}</label><span></span><br></br><div class="inputWrapper"><div class="countryCode" style="display: ${codeDisplay}" data-dial data-code><div class="flag"><img style="width:100%;height:100%;"></div><p class="code"></p><i class="fa-solid fa-caret-down"></i></div><div class="codeList"><div class="codeList__search"><input name = "search" id = "searchCountry" type="text" placeholder="Search Country"></div><div class="codeList__list"></div></div><input id="social__info" placeholder="${placeholder}" autocomplete="on" name="${socialName[i]}" type="text" inputmode="${inputmode}" id="social__info"></div></form></div></div></div>`)
                }
                fetch("/src/module/countryCodes.json").then(res => res.json()).then(data => {
                    let htmlList = '', htmlCountryCode = '', index, dial, code
                    for(let j = 0; j < data.length; j++) {
                        htmlList += `<div class="each" data-index="${j}" data-dial="${data[j].dial_code}" data-code="${data[j].code}"><p>${data[j].name}</p><p>${data[j].dial_code}</p></div>`
                    }
                    $(".codeList__list").html(htmlList)
                    $(".codeList__list > .each").click(function(e) {
                        afterClick(e, data, null)
                    })
                    return [data, htmlList]
                }).then(([data, iniHtmlList]) => {
                    const worker = new Worker('/src/dist/module/Web-Development/worker.js?' + new Date().getTime())
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
                    // index = $(e.currentTarget).data("index")
                    dial = $(e.currentTarget).data("dial")
                    code = $(e.currentTarget).data("code")
                    $(e.currentTarget).parent().parent().prev().data("dial", dial)
                    $(e.currentTarget).parent().parent().prev().data("code", code)
                    htmlCountryCode = `<div class="flag"><img src="/src/module/flags/${code.toLowerCase()}.png" style="width:100%;height:100%;""></div><p class="code">${dial}</p><i class="fa-solid fa-caret-down"></i>`
                    $(e.currentTarget).parent().parent().prev().html(htmlCountryCode)
                    $(".codeList__search > input").val("")
                    if(iniHtmlList !== null) {
                        $(".codeList__list").html(iniHtmlList)
                    }
                }
                const type = "admin"
                const username = "<?=$username?>"
                const defaultImgPath = '<?=$g['img']['unknown'];?>'</script></div><div class="adminBtn"><div class="adminBtn__ele adminBtn__save"><span><i class="fa-solid fa-check"></i> Save</span></div><div class="adminBtn__ele adminBtn__index"><span>Go To Bio <i class="fa-solid fa-arrow-right"></i></span></div><form action="" method="POST" style="width: 100%;"><button style="border: none; color: #000;" name="signout" class="adminBtn__ele adminBtn__index"><span>Sign out</span><i class="fa-solid fa-right-from-bracket"></i></button></form><div class="adminBtn__ele adminBtn__delete"><span><i class="fa-solid fa-trash"></i> Delete Account</span></div></div><?php
            copyright([
                'position' => 'relative'
            ])->render();
        ?></div></body></html>