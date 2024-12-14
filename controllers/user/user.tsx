import { $$ } from "../client/src/Web-Development/W"

declare var props: Props

interface Props {
    username: string,
    url: string
}

$(document).ready(function () {
    user(props)
})

function user(props: Props) {
    $$((typeof(props.url) === 'string') ? props.url : '', ".shareWindow__link").copyToClipboard().run(()=>{
        $(".shareWindow__btn.shareWindow__link .check").show()
        $(".shareWindow__btn.shareWindow__link .copy").hide()
        setTimeout(()=>{
            $(".shareWindow__btn.shareWindow__link .check").hide()
            $(".shareWindow__btn.shareWindow__link .copy").show()
        }, 2000)
    })

    $$({
        trigger: ".share__btn.qr",
        terminate: ".shareWindow__close"
    }, ".shareWindow_parent.qrcode", "active").toggle().advanced()
    
    $("#share .share__btn.share").click(() => {
        $$({
            title: props.username,
            url: window.document.location.href+"?share=true"
        }).share();
    })
}