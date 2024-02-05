import {$$} from "./module/W.js"
import {$$$} from "./module/WW.js"

$(document).ready(function() {
    // Deployment
    switch(type) {
        case 'index':
            bioPage()
            break
        case 'admin':
            adminPage()
            break
        case 'signup':
            signupPage()
            break
        case 'signin':
            signinPage()
            break
        case 'aic':
            aic()
            runCheckDatabase()
            break
        case 'forgot':
            forgot()
            break
        case 'forgotUsername':
            forgotUsername()
            break
        case 'resetPass':
            resetPass()
            break
        case 'restore':
            restore()
            break
    }

    function runCheckDatabase() {
        $.ajax({
            url: "/data/update.php",
            method: "POST",
            dataType: "json",
            data: JSON.stringify({
                type: "mainPage"
            }),
            success: function(e) {
                if(e)
                console.log("Database has been checked and updated")
            },
            error: function() {
                console.log("Error")
            }
        })
    }
    
    function signupPage() {
        $$("#password").passShowHide().run()
        $$(".passRequirements", "dropdown").toggle().run()
        $$$("#username", "#email", "#password", ".signupChild__error", ".signupChild__confirm").signup().run()
    }
    function bioPage() {
        $$((typeof(url) === 'string') ? url : '', ".shareWindow__link").copyToClipboard().run(()=>{
            $(".shareWindow__btn.shareWindow__link .check").show()
            $(".shareWindow__btn.shareWindow__link .copy").hide()
            setTimeout(()=>{
                $(".shareWindow__btn.shareWindow__link .check").hide()
                $(".shareWindow__btn.shareWindow__link .copy").show()
            }, 2000)
        })
        $(".share__btn.share").click(()=>{
            $(".shareWindow_parent").addClass("active")
        })
        $(".shareWindow__close").click(()=>{
            $(".shareWindow_parent").removeClass("active")
        })
    }
    function adminPage() {
        // Variable Declaration and Initialization
        const img = document.querySelector(".info__img--location img")
        let transform, uploadImage = false

        // Add spinner
        const spinner = $$(".adminBtn__save").addSpinner().singleSpinner()

        // Make "choose" button able to open file box
        const upload = $$(".info__img--choose", ".info__img input").upload().openFile()

        // Make image container able to open file box
        $$(".info__img--location", ".info__img input").upload().openFile()

        // Manage change event of the file box
        $(".info__img input").on("change", (e) => {
            upload.fileHandling(e, function(src) {
                uploadImage = true
                // Make the image container transformable
                transform = $$(".info__img--location img").transform().draggable().distort()
                img.src = src
            })
        })

        // Make Address box searchable using Google Maps API
        const API_KEY = 'AIzaSyDzVaJBzfYI99plotEoYzCKASerLaeNNGY'
        $$$(null).googleAPI(API_KEY).runGoogleMapsAPI(".Address #social__info")

        // Make toggle for country code box
        $$(".countryCode", "active").toggle().custom()
    
        // Show previously uploaded data to the admin page
        if(typeof(username) === 'string') {
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "json",
                data: JSON.stringify({
                    username: username,
                    type: "getInfo"
                }),
                success: function(e) {
                    const list = e[0]
                    if(list !== undefined) {
                        $(".info__img .uploadImg__filename").val(list.image)
                        $(".info__name #name").val(list.name)
                        $(".info__org #org").val(list.organization)
                        $(".info__des #des").val(list.description)
                        fetch("/src/module/countryCodes.json").then(res => res.json()).then(data => {
                            for(let i = 0; i < socialName.length; i++) {
                                if(socialName[i] === "Messenger") {
                                    list[socialName[i]] = list[socialName[i]].replace("https://m.me/", "")
                                }
                                else if (socialName[i] === 'Zalo') {
                                    list[socialName[i]] = list[socialName[i]].replace("https://zalo.me/", "")
                                }
                                else if (socialName[i] === "Mobile" || socialName[i] === "Work") {
                                    let dial_code, index, code
                                    if(list[socialName[i]] === '') {
                                        index = 230 // index for US
                                    } else {
                                        index = list[socialName[i]].split(" ")[0]
                                        list[socialName[i]] = list[socialName[i]].split(" ")[1]
                                    }
                                    dial_code = data[index].dial_code
                                    code = data[index].code
                                    $("."+socialName[i]+" .countryCode").data("index", index)
                                    $("."+socialName[i]+" .countryCode > .flag > img").attr("src", "/src/module/flags/" + code.toLowerCase() + ".png")
                                    $("."+socialName[i]+" .countryCode > .code").html(dial_code)
                                }
                                $("."+socialName[i]+" #social__info").val(list[socialName[i]])
                            }
                            img.src = (list.image === '') ? defaultImgPath : '/user/' + username + '/' + list.image
                        })
                    } else {
                        img.src = defaultImgPath
                    }
                }
            })
        }
        // Click delete button, then do the work below
        $(".adminBtn__delete").click(function() {
            $(".warning__parent").addClass("active")
        })
        // Click back button, then do the work below
        $(".warning__child .btn__back").click(function() {
            $(".warning__parent").removeClass("active")
        })
        // Click confirm button, the do the work below
        $(".warning__child .btn__confirm").click(function() {
            let listForUpdate = {
                type: "deleteToken",
                token: time,
                username: username
            }
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "html",
                contentType: 'application/json',
                data: JSON.stringify(listForUpdate),
                success: function(e) {
                    if(e) {
                        window.location.href = "/";
                    }
                }
            })
        })
        // Go back to bio page
        $(".adminBtn__index").click(function() {
            window.location.href = `/${username}`
        })
        // Click remove avatar picture
        $(".info__img--remove").click(function() {
            let data = {
                type: 'avaDelete',
                username: username,
                img: $(".info__img .uploadImg__filename").val()
            }
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                data: JSON.stringify(data),
                dataType: "html",
                contentType: "application.json",
                success: function(e) {
                    if(e) {
                        img.src = defaultImgPath
                    } else {
                        location.reload()
                    }
                }
            })
        })

        // Format and Validation
        const isValid = {}
        for(let i = 0; i < socialName.length; i++) {
            if(!(socialName[i] === 'Mobile' || socialName[i] === 'Email' || socialName[i] === 'Messenger' || socialName[i] === 'Work')) {
                isValid[socialName[i]] = $$$("."+socialName[i]+" #social__info", "."+socialName[i]+" span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^(https?:\/\/)\w*/).formValidate().run()
            }
        }
        // Mobile Phone Validation
        isValid.Mobile = $$$(".Mobile #social__info", ".Mobile span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}-\d{3}-\d{4}$/).formValidate().run()
        isValid.Mobile.phoneFormat()

        // Work Phone Validation
        isValid.Work = $$$(".Work #social__info", ".Work span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}-\d{3}-\d{4}$/).formValidate().run()
        isValid.Work.phoneFormat()

        // Zalo Phone Validation
        isValid.Zalo = $$$(".Zalo #social__info", ".Zalo span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}\d{3}\d{4}$/).formValidate().run()
        
        // Email Validation
        isValid.Email = $$$(".Email #social__info", ".Email span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^[^\s@]+@[^\s@]+\.[^\s@]+$/).formValidate().run()

        // Messenger Validation
        isValid.Messenger = $$$(".Messenger #social__info", ".Messenger span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^.*$/).formValidate().run()

        // Address Validation
        isValid.Address  = $$$(".Address #social__info", ".Address span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^.*$/).formValidate().run()

        // Click save button, then do the work below
        $(".adminBtn__save").click(function() {
            let booleanArr = []
            for(let i = 0; i < socialName.length; i++) {
                booleanArr.push(isValid[socialName[i]].getValidity())
            }
            booleanArr.push(isValid.Mobile.getValidity())
            booleanArr.push(isValid.Work.getValidity())
            booleanArr.push(isValid.Email.getValidity())
            booleanArr.push(isValid.Messenger.getValidity())
            booleanArr.push(isValid.Address.getValidity())
            const allTrue = booleanArr.every(ele => ele === true)
            if(allTrue) {
                let listForUpdate = {}
                if(uploadImage) {
                    let [x, y, scale, angle] = transform.exportData()
                    let src = upload.drawImage(img, x, y, scale, angle, 700, 700, $(".info__img--location").width(), $(".info__img--location").height())
                    listForUpdate.src = src
                }
                listForUpdate.type = "info"
                listForUpdate.username = username
                listForUpdate.image = $(".info__img .uploadImg__filename").val()
                listForUpdate.name = $(".info__name #name").val()
                listForUpdate.organization = $(".info__org #org").val()
                listForUpdate.description = $(".info__des #des").val()
                for(let i = 0; i < socialName.length; i++) {
                    if(socialName[i] === 'Messenger') {
                        const v = $("."+socialName[i]+" #social__info").val()
                        const link = (v === '') ? '' : `https://m.me/${v}`
                        listForUpdate[socialName[i]] = link
                    } 
                    else if (socialName[i] === 'Zalo') {
                        const v = $("."+socialName[i]+" #social__info").val()
                        const link = (v === '') ? '' : `https://zalo.me/${v}`
                        listForUpdate[socialName[i]] = link
                    }
                    else if (socialName[i] === 'Mobile' || socialName[i] === 'Work') {
                        const index = $("." + socialName[i] + " .countryCode").data("index"), value = $("."+socialName[i]+" #social__info").val()
                        if(value === '') {
                            listForUpdate[socialName[i]] = ''
                        } else {
                            listForUpdate[socialName[i]] = `${index} ${$("."+socialName[i]+" #social__info").val()}`
                        }
                    }
                    else {
                        listForUpdate[socialName[i]] = $("."+socialName[i]+" #social__info").val()
                    }
                }
                $.ajax({
                    url: "/data/update.php",
                    method: "POST",
                    data: JSON.stringify(listForUpdate),
                    dataType: "html",
                    contentType: "application/json",
                    beforeSend: function() {
                        spinner.show()
                        $(".adminBtn__save span").css("visibility", "hidden")
                    },
                    success: function(e) {
                        if(e !== null) {
                            spinner.hide()
                            $(".adminBtn__save span").css("visibility", "visible")
                            $(".info__img .uploadImg__filename").val(e)
                            uploadImage ? transform.terminate() : null
                            $(".msg").removeClass("active")
                            $(".successMsg").addClass("active")
                            setTimeout(()=>{
                                $(".successMsg").removeClass("active")
                                window.location.href = `/${username}`
                            }, 1000)
                        }
                    },
                    error: function() {
                        $(".msg").removeClass("active")
                        $(".errorMsg").addClass("active")
                        setTimeout(()=>{
                            location.reload()
                        }, 3000)
                    }
                })
            } else {
                $(".msg").removeClass("active")
                $(".notValidForm").addClass("active")
                setTimeout(()=>{
                    $(".notValidForm").removeClass("active")
                }, 3000)
            }
        })
    }
    function aic() {
        const spinner = $$("#userData").addSpinner().singleSpinner()
        $.ajax({
            url: "/data/update.php",
            method: "POST",
            dataType: "json",
            data: JSON.stringify({
                type: "getUserInfo"
            }),
            beforeSend: function() {
                spinner.show()
            },
            success: function(userArray) {
                const userObj = {}
                for(let i = 0; i < userArray.length; i++) {
                    userArray[i].bioLink = `<a target="_blank" href="/${userArray[i].username}" style="color: #000;">Bio</a>`
                    userArray[i].admin = `<a target="_blank" href="/${userArray[i].username}/admin" style="color: #000;">Admin</a>`
                    userArray[i].delete = `<button value="${userArray[i].username}">Delete</button>`
                    userObj[i] = userArray[i]
                }
                const headerObj = {
                    1: '#',
                    2: 'Username',
                    3: 'Email',
                    4: 'Password',
                    5: 'Token',
                    6: 'Delete Token',
                    7: 'Bio',
                    8: 'Admin',
                    9: 'Delete'
                }
                $$("#userData", headerObj, userObj).table().create()
                spinner.hide()
                let currentUsernameValue
                $("#userData button").click(function(e) {
                    $(".warning__parent").addClass("active")
                    currentUsernameValue = e.currentTarget.value
                })
                $(".btn__confirm").click(function() {
                    $.ajax({
                        url: "/data/update.php",
                        method: "POST",
                        dataType: "html",
                        contentType: 'application/json',
                        data: JSON.stringify({
                            type: 'delete',
                            username: currentUsernameValue
                        }),
                        success: function(e) {
                            if(e) {
                                location.reload()
                            }
                        }
                    })
                })
                $(".btn__back").click(function() {
                    $(".warning__parent").removeClass("active")
                })
            }
        })
    }
    function signinPage() {
        $$("#password").passShowHide().run()
    }
    function forgot() {
        
    }
    function forgotUsername() {
        
    }
    function resetPass() {
        $$("#password").passShowHide().run()
        $$("#verifyPassword").passShowHide().run()
    }

    function restore() {
        $(".btn__ele--restore").click(function() {
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "json",
                data: JSON.stringify({
                    type: "restoreAccount",
                    username: username
                }),
                success: function(e) {
                    if(e) {
                        window.location.href = `/`
                    }
                },
                error: function() {

                }
            })
        })
        $(".btn__ele--delete").click(function() {
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "html",
                contentType: 'application/json',
                data: JSON.stringify({
                    type: "delete",
                    username: username
                }),
                success: function(e) {
                    if(e) {
                        window.location.href = "/";
                    }
                },
                error: function() {
                    
                }
            })
        })
    }
})