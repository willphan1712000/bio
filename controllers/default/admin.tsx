import Transform from "../client/src/Web-Development/components/Transform/Transform";
import { $$ } from "../client/src/Web-Development/W";
import { $$$ } from "../client/src/Web-Development/WW";
import InfoArea from "./clientComponents/InfoArea";

declare var username: string
declare var defaultImgPath: string

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

    const list = data.data
    list.username = username

    $$("#info__wrapper", <InfoArea data={list} extraData={{defaultImgPath}}/>).reactMounting()


    // ================================================================
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
                    // img.src = defaultImgPath
                } else {
                    location.reload()
                }
            }
        })
    })

    
}