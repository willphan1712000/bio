import { username } from "../admin/clientComponents/AdminContext"
import { $$ } from "../client/src/Web-Development/W"

$(document).ready(function () {
    user()
})

function user() {
    const url = window.document.location.href+"?share=true"
    const user = username()
    $$((typeof(url) === 'string') ? url : '', ".shareWindow__link").copyToClipboard().run(()=>{
        $(".shareWindow__btn.shareWindow__link .check").show()
        $(".shareWindow__btn.shareWindow__link .copy").hide()
        setTimeout(()=>{
            $(".shareWindow__btn.shareWindow__link .check").hide()
            $(".shareWindow__btn.shareWindow__link .copy").show()
        }, 2000)
    })

    $$({
        trigger: document.querySelector(".share__btn.qr"),
        terminate: [
            document.querySelector(".shareWindow__close"),
            document.querySelector(".shareWindow_parent.qrcode")
        ]
    }, document.querySelector(".shareWindow_parent.qrcode"), "active").toggle().advanced()
    
    $("#share .share__btn.share").click(() => {
        $$({
            title: user,
            url
        }).share();
    })
}