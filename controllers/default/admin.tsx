import CountryCode from "../admin/clientComponents/CountryCode/CountryCode";
import Transform from "../client/src/Web-Development/components/Transform/Transform";
import { $$ } from "../client/src/Web-Development/W";
import { $$$ } from "../client/src/Web-Development/WW";
import InfoArea from "./clientComponents/InfoArea";

declare var username: string
declare var defaultImgPath: string
declare var socialName: any
declare var time: number

interface GET {
    success: boolean,
    data: {
        [key: string]: string
    }
}

$(document).ready(function() {
    adminPage()
})

// function render() {
//     for (let i = 0; i < socialName.length; i++) {
//         if (['username', 'name', 'image', 'organization', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode'].includes(socialName[i])) {
//             continue;
//         }
//         let string = socialName[i],
//             displayString = string[0]
//         for (let j = 1; j < string.length; j++) {
//             displayString += (string[j] === string[j].toUpperCase()) ? ' ' + string[j] : string[j]
//         }
//         let inputmode = '',
//             codeDisplay = 'flex',
//             placeholder = '';
//         if (socialName[i] === 'Mobile' || socialName[i] === 'Work') {
//             inputmode = 'numeric'
//         } else {
//             codeDisplay = 'none'
//         }
//         if (socialName[i] === 'Messenger') {
//             placeholder = 'Facebook Username'
//         } else if (socialName[i] === 'Mobile' || socialName[i] === 'Work' || socialName[i] === 'Zalo') {
//             placeholder = `${displayString} phone number here`
//         } else if (socialName[i] === 'Address') {
//             placeholder = `Choose ${displayString} or ${displayString} link here`
//         } else {
//             placeholder = `${displayString} link here`
//         }

//         $("#social-media").append(`<div class="social ${socialName[i]}"><div class="social__img info__img">${icon[socialName[i]]}</div><div class="social__info info__about"><div class="info__name"><form action=""><label for="social__info">${displayString}</label><span></span><br></br><div class="inputWrapper"><div class="countryCode__wrapper ${socialName[i]}"></div><input id="social__info" placeholder="${placeholder}" autocomplete="on" name="${socialName[i]}" type="text" inputmode="${inputmode}" id="social__info"></div></form></div></div></div>`)
//     }

//     $$(".countryCode__wrapper.Mobile", <CountryCode container=".countryCode__wrapper.Mobile"/>).reactMounting()
//     $$(".countryCode__wrapper.Work", <CountryCode container=".countryCode__wrapper.Work"/>).reactMounting()
// }

async function adminPage() {
    // Get information from database
    const data = await $$$("/data/api/info/GET.php", {
        username
    }).api().post() as GET

    if(!data.success) {
        return
    }

    const list = data.data

    $(".info__img .uploadImg__filename").val(list.image === null ? '' : list.image)
    $(".info__name #name").val(list.name === null ? '' : list.name)
    $(".info__org #org").val(list.organization === null ? '' : list.organization)
    $(".info__des #des").val(list.description === null ? '' : list.description)

    $$("#social-media", <InfoArea socialArr={socialName} data={list}/>).reactMounting()

    // Variable Declaration and Initialization
    const img = document.querySelector(".info__img--location img") as HTMLImageElement
    let transform: Transform, uploadImage = false

    img.src = (list.image === null || list.image === '') ? defaultImgPath : '/user/' + username + '/' + list.image

    // Add spinner
    const spinner = $$(".adminBtn__save").addSpinner().singleSpinner()

    // Make Address box searchable using Google Maps API
    // const API_KEY = 'AIzaSyDzVaJBzfYI99plotEoYzCKASerLaeNNGY'
    // $$$(null).googleAPI(API_KEY).runGoogleMapsAPI(".Address #social__info")

    // Show previously uploaded data to the admin page
    // if(typeof(username) === 'string') {
    //     $.ajax({
    //         url: "/data/api/info/GET.php",
    //         method: "POST",
    //         dataType: "json",
    //         data: JSON.stringify({
    //             username: username,
    //         }),
    //         success: function(e: GET) {
    //             const list = e.data
    //             if(list !== undefined) {
    //                 $(".info__img .uploadImg__filename").val(list.image === null ? '' : list.image)
    //                 $(".info__name #name").val(list.name === null ? '' : list.name)
    //                 $(".info__org #org").val(list.organization === null ? '' : list.organization)
    //                 $(".info__des #des").val(list.description === null ? '' : list.description)
    //                 for(let i = 0; i < socialName.length; i++) {
    //                     let ele = list[socialName[i]]
    //                     ele = (ele === null || ele === '') ? '' : ele
    //                     if(socialName[i] === "Messenger") {
    //                         ele = ele.replace("https://m.me/", "")
    //                     }
    //                     else if (socialName[i] === 'Zalo') {
    //                         ele = ele.replace("https://zalo.me/", "")
    //                     }
    //                     else if (socialName[i] === "Mobile" || socialName[i] === "Work") {
    //                         let dial, index, code
    //                         if(ele === '') {
    //                             dial = '+1'
    //                             code = 'US'
    //                         } else {
    //                             if(socialName[i] === "Mobile") {
    //                                 code = list['MobileFlag']
    //                                 dial = list['MobileCode']
    //                                 ele = list['Mobile']
    //                             }
    //                             if(socialName[i] === "Work") {
    //                                 code = list['WorkFlag']
    //                                 dial = list['WorkCode']
    //                                 ele = list['Work']
    //                             }
    //                         }
    //                         $("."+socialName[i]+" .countryCode").data("dial", dial)
    //                         $("."+socialName[i]+" .countryCode").data("code", code)
    //                         $("."+socialName[i]+" .countryCode > .flag > img").attr("src", "/controllers/admin/clientComponents/CountryCode/flags/" + code.toLowerCase() + ".png")
    //                         $("."+socialName[i]+" .countryCode > .code").html(dial)
    //                     }
    //                     $("."+socialName[i]+" #social__info").val(ele)
    //                 }
                    
    //             } else {
    //                 img.src = defaultImgPath
    //             }
    //         }
    //     })
    // }
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
            url: "/data/api/info/PUT.php",
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
    const isValid: any = {}
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
    let isDisabled = false
    $(".adminBtn__save").click(function() {
        if(isDisabled) {
            return
        }
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
            let listForUpdate: any = {}
            if(uploadImage) {
                // let [x, y, scale, angle] = transform.exportData()
                // let src = upload.drawImage(img, x, y, scale, angle, 700, 700, $(".info__img--location").width(), $(".info__img--location").height())
                // listForUpdate.src = src
            }
            listForUpdate.src = ""
            listForUpdate.username = username
            listForUpdate.image = $(".info__img .uploadImg__filename").val()
            listForUpdate.name = $(".info__name #name").val()
            listForUpdate.organization = $(".info__org #org").val()
            listForUpdate.description = $(".info__des #des").val()
            listForUpdate.Mobile = $(".Mobile #social__info").val()
            listForUpdate.MobileCode = $(".Mobile" + " .countryCode").data("dial")
            listForUpdate.MobileFlag = $(".Mobile" + " .countryCode").data("code")
            listForUpdate.Work = $(".Work #social__info").val()
            listForUpdate.WorkCode = $(".Work" + " .countryCode").data("dial")
            listForUpdate.WorkFlag = $(".Work" + " .countryCode").data("code")
            for(let i = 0; i < socialName.length; i++) {
                if(['name', 'image', 'username', 'organization', 'description', 'Mobile', 'MobileCode', 'MobileFlag', 'Work', 'WorkCode', 'WorkFlag'].includes(socialName[i])) {
                    continue
                }
                listForUpdate[socialName[i]] = $("."+socialName[i]+" #social__info").val()
            }

            $.ajax({
                url: "/data/api/info/PUT.php",
                method: "POST",
                data: JSON.stringify(listForUpdate),
                dataType: "html",
                contentType: "application/json",
                beforeSend: function() {
                    spinner.show()
                    $(".adminBtn__save span").css("visibility", "hidden")
                    isDisabled = true
                    $(".adminBtn__save").css({
                        "cursor": "not-allowed"
                    })
                },
                success: function(e) {
                    if(e !== null) {
                        spinner.hide()
                        $(".adminBtn__save span").css("visibility", "visible")
                        $(".info__img .uploadImg__filename").val(e)
                        // uploadImage ? transform.terminate() : null
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