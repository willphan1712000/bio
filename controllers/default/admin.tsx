import Transform from "../client/src/Web-Development/components/Transform/Transform";
import { $$ } from "../client/src/Web-Development/W";
import { $$$ } from "../client/src/Web-Development/WW";
import InfoArea from "./clientComponents/InfoArea";

declare var username: string
declare var defaultImgPath: string
declare var time: number

interface GET {
    success: boolean,
    data: {
        [key: string]: string | any
    }
}

$(document).ready(function() {
    adminPage()
})

async function adminPage() {
    // Get information from database
    const data = await $$$("/data/api/info/GET.php", {
        username
    }).api().post() as GET

    if(!data.success) {
        return
    }

    const socialName = Object.keys(data.data)

    const list = data.data
    list.username = username

    $$("#info__wrapper", <InfoArea data={list} extraData={{defaultImgPath}}/>).reactMounting()


    // ================================================================

    // Variable Declaration and Initialization
    const img = document.querySelector(".info__img--location img") as HTMLImageElement

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
    // Click remove avatar picture
    $(".info__img--remove").click(function() {
        let data = {
            type: 'avaDelete',
            username: username,
            img: $(".info__img .uploadImg__filename").val()
        }
        $.ajax({
            url: "/data/api/info/PUTss.php",
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

    // Click save button, then do the work below
    let isDisabled = false
    $(".adminBtn__saves").click(function() {
        if(isDisabled) {
            return 
        }
        let booleanArr = []
        // for(let i = 0; i < socialName.length; i++) {
        //     booleanArr.push(isValid[socialName[i]].getValidity())
        // }
        // booleanArr.push(isValid.Mobile.getValidity())
        // booleanArr.push(isValid.Work.getValidity())
        // booleanArr.push(isValid.Email.getValidity())
        // booleanArr.push(isValid.Messenger.getValidity())
        // booleanArr.push(isValid.Address.getValidity())
        // const allTrue = booleanArr.every(ele => ele === true)
        const allTrue = true
        if(allTrue) {
            let listForUpdate: any = {}
            if(true) {
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
                url: "/data/api/info/PUTss.php",
                method: "POST",
                data: JSON.stringify(listForUpdate),
                dataType: "html",
                contentType: "application/json",
                beforeSend: function() {
                    $(".adminBtn__save span").css("visibility", "hidden")
                    isDisabled = true
                    $(".adminBtn__save").css({
                        "cursor": "not-allowed"
                    })
                },
                success: function(e) {
                    if(e !== null) {
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