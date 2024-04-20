<style>
    #container {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: relative;
            }
            a {
                overflow-wrap: anywhere;
            }
            .msg {
                position: fixed;
                top: 10px;
                right: 10px;
                width: auto;
                height: 50px;
                border-radius: 10px;
                transform: translateX(100%);
                transition: all .4s;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                color: #fff;
                z-index: 99;
                padding: 15px;
            }
            .msg i {
                margin-right: 5px;
            }
            .successMsg.active {
                transform: translateX(0px);
                background-color: #1b9a20;
            }
            .errorMsg.active {
                transform: translateX(0px);
                background-color: #ff000099;
            }
            .notValidForm.active {
                transform: translateX(0px);
                background-color: #327e8f;
            }
            .adminSection {
                margin: 30px 0px;
                border-radius: 20px;
                width: 600px;
                background-color: #fff;
            }
            .info {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                height: auto;
                margin: 20px;
                padding: 10px;
                border: solid 1.5px #000;
                border-radius: 20px;
            }
            .info__img {
                aspect-ratio: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: relative;
                padding: 20px;
            }
            .info__img--ava {
                width: 100%;
                height: -webkit-fill-available;
            }
            .info__img--location {
                overflow: hidden;
                width: 80%;
                border-radius: 50%;
                aspect-ratio: 1;
            }
            .info__img img {
                object-fit: contain;
                width: 100%;
                cursor: pointer;
            }
            .info .info__about > * {
                text-align: center;
            }
            .info__img--choose {
                margin-top: 5px;
                height: 40px;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--main-color);
                cursor: pointer;
                padding: 20px;
            }
            .info__img--remove {
                position: absolute;
                top: 20%;
                right: 20%;
                background-color: var(--main-color);
                border-radius: 50%;
                padding: 10px;
                cursor: pointer;
                aspect-ratio: 1;
                width: 40px;
                height: 40px;
                text-align: center;
                z-index: 1;
            }
            .info__about {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0px 10px;
                flex-grow: 1;
                width: 100%;
            }
            .info__name {
                width: -webkit-fill-available;
            }
            .info__org {
                width: -webkit-fill-available;
                margin-top: 10px;
            }
            .info__des {
                display: flex;
                flex-direction: column;
                margin-top: 20px;
            }
            .info__des.admin {
                height: 150px;
            }
            .info__des h3 {
                word-wrap: break-word;
            }
            .info__about input {
                width: 100%;
                padding: 5px;
                height: auto;
                border-radius: 10px;
                border: solid #000 1px;
                font-size: 15px;
            }
            .info__des textarea {
                width: 100%;
                flex: 1;
                border-radius: 10px;
                padding: 10px;
                font-size: 15px;
            }
            
            .social {
                height: 100px;
                margin: 20px;
                background-color: var(--main-color);
                border-radius: 20px;
                display: flex;
                flex-direction: row;
            }
            .social__img i {
                font-size: 50px;
            }
            .social__info span {
                margin-left: 10px;
            }
            .social__info label {
                margin-bottom: 5px;
            }
            .adminBtn {
                width: 50vw;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
            }
            .adminBtn__ele {
                flex: 1;
                margin: 0px 15px;
                height: 60px;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                cursor: pointer;
            }
            .adminBtn__ele i {
                margin: 0px 5px;
            }
            .adminBtn__ele.adminBtn__delete {
                width: auto;
                padding: 15px;
                font-size: 0.8rem;
            }
            .warning__parent {
                background-color: #0000002b;
                width: 100vw;
                height: 100vh;
                backdrop-filter: blur(6px);
                position: fixed;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0;
                left: 0;
                z-index: 1;
                visibility: hidden;
                opacity: 0;
                transition: all .2s cubic-bezier(0.4, 0, 0.58, 1.4)
            }
            .warning__parent.active {
                opacity: 1;
                visibility: visible;
            }
            .warning__child {
                margin: 0px 10px;
                border-radius: 20px;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 20px;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            }
            .warning__child p {
                text-align: center;
            }
            .warning__child i {
                font-size: 45px;
                color: red;
                margin-bottom: 10px;
            }
            .warning__child .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                cursor: pointer;
            }
            .warning__child .btn__ele {
                background-color: #f0f0f0;
                border-radius: 10px;
                padding: 15px;
                margin: 10px 10px 0px 10px;
            }
            #share {
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
            }
            .share__btn {
                height: 50px;
                width: 100px;
                margin: 10px;
                background-color: var(--main-color);
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                color: #000;
            }
            .share__btn i {
                margin-right: 5px;
            }
            .shareWindow_parent {
                background-color: #0000002b;
                width: 100vw;
                height: 100vh;
                backdrop-filter: blur(6px);
                position: fixed;
                display: flex;
                z-index: 99;
                justify-content: center;
                align-items: center;
                top: 0;
                left: 0;
                visibility: hidden;
                opacity: 0;
                transition: all .2s cubic-bezier(0.4, 0, 0.58, 1.4)
            }
            .shareWindow_parent.active {
                visibility: visible;
                opacity: 1;
            }
            .shareWindow_child {
                border-radius: 20px;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 20px;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                width: 600px;
                margin: 0px 10px;
            }
            .shareWindow_child .shareWindow__close {
                border-radius: 10px;
                background-color: var(--main-color);
                padding: 10px;
                margin-left: auto;
                cursor: pointer;
            }
            .shareWindow_child .shareWindow__qr {
                width: 100%;
                height: 100%;
            }
            .shareWindow__btn {
                width: 100%;
                height: 50px;
                border-radius: 10px;
                background-color: var(--main-color);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                margin: 5px 0px;
            }
            .shareWindow__btn.shareWindow__download i {
                margin-right: 5px;
            }
            .shareWindow__btn.shareWindow__link input {
                background-color: var(--main-color);
                border: none;
                border-radius: 10px;
                padding: 10px;
            }
            .shareWindow__btn.shareWindow__link i {
                margin-left: 5px;
            }
            .shareWindow__btn.shareWindow__link i.check {
                display: none;
            }
            
            #copyright {
                border-radius: 20px;
                background-color: #fff;
                margin: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: -webkit-fill-available;
                height: 8vh;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
            .inputWrapper {
                display: flex;
                flex-direction: row;
                position: relative;
            }
            .countryCode {
                flex-direction: row;
                border-radius: 10px;
                background-color: #fff;
                padding: 2px;
                height: auto;
                margin-right: 5px;
                cursor: pointer;
            }
            .countryCode > * {
                display: flex !important;
                align-items: center;
                padding: 2px;
            }
            .countryCode > .flag {
                width: 40px;
                padding: 5px;
            }
            .codeList {
                position: absolute !important;
                flex-direction: column;
                left: 0;
                top: calc(100% + 5px);
                width: 100%;
                height: 500%;
                background: #fff;
                border-radius: 10px;
                z-index: 1;
                padding: 5px;
                display: none;
            }
            .codeList.active {
                display: flex;
            }
            .codeList__list {
                overflow: auto;
                margin: 5px;
            }
            .codeList__list > .each {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 5px;
                cursor: pointer;
                border-radius: 10px;
            }
            .codeList__list > .each:hover {
                background-color: #d9d9d9;
            }
            .backToBio {
                display: flex;
                justify-content: flex-end;
            }
            .backToBio > a {
                background-color: var(--main-color);
                border-radius: 50%;
                padding: 10px;
                cursor: pointer;
                aspect-ratio: 1;
                height: 40px;
                text-align: center;
                margin: 10px;
                margin-bottom: 0;
                color: #000;
            }
            
            @media screen and (max-width: 600px) {
                .adminSection {
                    width: 95%;
                }
                .info {
                    flex-direction: column;
                }
                .social.info {
                    flex-direction: row;
                }
                .social__img i {
                    font-size: 40px;
                }
                .adminBtn {
                    flex-direction: column;
                    width: 95%;
                }
                .adminBtn__ele {
                    width: 100%;
                    margin: 15px 0px;
                    padding: 20px;
                    font-size: 1rem;
                }
                .info__des h3 {
                    text-align: center;
                }
            }
</style>
<div class="shareWindow_parent">
            <div class="shareWindow_child">
                <div class="shareWindow__close">
                    <i class="fa-solid fa-x"></i>
                </div>
                <img class="shareWindow__qr" src="/user/<?=$username;?>/qr-code.png?v=<?=$g['v'];?>" alt=""><a class="shareWindow__btn shareWindow__download" download href="/user/<?=$username;?>/qr-code.png" style="text-decoration: none; color: #000;"><i class="fa-solid fa-arrow-down"></i>Download</a>
                <div class="shareWindow__btn shareWindow__link"><?=$url;?><i class="fa-regular fa-copy copy"></i><i class="fa-solid fa-check check"></i></div>
            </div>
        </div>
        <div class="adminSection">
        <div class="info">
            <div class="info__img">
                <div class="info__img--location">
                    <img src=<?=$imgPath."?v=".time();?> alt="">
                </div>
            </div>
            <div class="info__about">
                <div class="info__name">
                    <div>
                        <h1><?=$infoArray["name"];?></h1>
                    </div>
                </div>
                <div class="info__org">
                    <div>
                        <h2><?=$infoArray["organization"];?></h2>
                    </div>
                </div>
                <div class="info__des">
                    <div>
                        <h3><?=$infoArray["description"];?></h3>
                    </div>
                </div>
            </div>
            </div>
            <div id="social-media"></div>
            <div id="share">
            <div class="share__btn share"><i class="fa-solid fa-share"></i>Share</div>
            <div class="share__btn save"><a style="text-decoration: none; color: #000;" href="/user/<?=$username;?>/vcard.php"><i class="fa-solid fa-download"></i> Save</a></div>
            <div class="share__btn edit"><a style="text-decoration: none; color: #000;" href="/<?=$username;?>/admin"><i class="fa-solid fa-pen-to-square"></i> Edit</a></div>
            </div>
            <script>
                const infoArray = (<?=json_encode($infoArray);?>)
                if(infoArray !== null) {
                    const socialName = (<?=json_encode($socialNameArr);?>)
                    const icon = (<?=json_encode($socialIconArr);?>)
                    fetch("/src/module/countryCodes.json").then(res => res.json()).then(data => {
                        for(let i = 0; i < socialName.length; i++) {
                            let displayString = displayStringHandling(socialName[i])
                            let prefix, index, number, dial_code, href
                            if(infoArray[socialName[i]] !== '') {
                                // prefix configuration
                                if(socialName[i] === 'Email') {
                                    prefix = "mailto:"
                                }
                                else if (socialName[i] === 'Mobile' || socialName[i] === 'Work') {
                                    prefix = "tel:"
                                    index = infoArray[socialName[i]].split(" ")[0]
                                    number = infoArray[socialName[i]].split(" ")[1]
                                    if(index === '235') {
                                        // Vietnamese country code index
                                        number = number.substring(1)
                                    }
                                    dial_code = data[index].dial_code
                                    infoArray[socialName[i]] = `${dial_code} ${number}`
                                } else {
                                    prefix = ''
                                }
                                // href configuration
                                if(socialName[i] === 'Address') {
                                    let value = infoArray[socialName[i]]
                                    if(value.includes('https://')) {
                                        href = value
                                    } else {
                                        href = `https://google.com/maps?q=${infoArray[socialName[i]]}`
                                    }
                                } else {
                                    href = `${prefix + infoArray[socialName[i]]}`
                                }
                            }
                            infoArray[socialName[i]] = longLinkHandling(infoArray[socialName[i]])
                            $("#social-media").append(`<div class="social ${socialName[i]}" style="display: ${(infoArray[socialName[i]] === "") ? "none" : ""};"><div class="social__img info__img">${icon[i]}</div><div class="social__info info__about"><div class="info__name"><div><p>${displayString}</p><a href="${href}" target="_blank" style="text-decoration: none; color: #000;">${infoArray[socialName[i]]}</a></div></div></div></div>`)
                        }
                    })
                }
                const url = "<?=$url;?>"
                const type = "index"

                function longLinkHandling(string) {
                    if(string === '') {
                        return string
                    }
                    if(string.includes('https://')) {
                        string = string.split("?")[0]
                    }
                    return string
                }

                function displayStringHandling(string) {
                    let displayString = string[0]
                    for(let j = 1; j < string.length; j++) {
                        displayString += (string[j] === string[j].toUpperCase()) ? ' ' + string[j] : string[j]
                    }
                    return displayString
                }
            </script>
        </div>
        <div id="copyright">
        <p><?=$g['license'];?></p>
        </div>