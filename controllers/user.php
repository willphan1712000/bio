<?php
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    $username = basename(parse_url($_SERVER['REQUEST_URI'])['path']);
    $infoQuery = mysqli_query($conn, "SELECT *FROM info WHERE username = '$username'");
    $infoArray = mysqli_fetch_assoc($infoQuery);
    if(!empty($infoArray['image'])) {
        $imgPath = "/user/".$username."/".$infoArray['image']."?v=".$g['v'];
    } else {
        $imgPath = $g['img']['unknown'];
    }
    $url = $g['domain']."/".$username;
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
    <title><?=$g['userTitle'];?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
    <script src="/src/module/jQuery371.js"></script>
</head>
<body>
    <div id="container">
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
                            <h1><?=$infoArray['name'];?></h1>
                        </div>
                    </div>
                    <div class="info__des">
                        <div>
                            <h3><?=$infoArray['description'];?></h3>
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
                                        href = `https://google.com/maps/?q=${infoArray[socialName[i]]}`
                                    }
                                } else {
                                    href = `${prefix + infoArray[socialName[i]]}`
                                }
                            }
                            infoArray[socialName[i]] = longLinkHandling(infoArray[socialName[i]])
                            $("#social-media").append(`<div class="social ${socialName[i]}" style="display: ${(infoArray[socialName[i]] === "") ? "none" : ""};"><div class="social__img info__img">${icon[i]}</div><div class="social__info info__about"><div class="info__name"><div><p>${displayString}</p><a href="${href}" style="text-decoration: none; color: #000;">${infoArray[socialName[i]]}</a></div></div></div></div>`)
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
    </div>
    <script src="/js/bundle.js?v=<?=$g['v'];?>"></script>
</body>
</html>