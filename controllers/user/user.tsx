import { $$ } from "../client/src/Web-Development/W"

declare var props: {
    username: string,
    url: string
}

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
    $(".share__btn.qr").click(()=>{
        $(".shareWindow_parent.qrcode").addClass("active")
        $("#container").addClass("touch-disabled")
    })

    document.addEventListener('click', e => {
        if(!$.contains(document.querySelector(".shareWindow_parent.qrcode") as Element, e.target as Element) && e.target as Element !== document.querySelector(".shareWindow__close") && e.target !== document.querySelector(".share__btn.qr")) {
            $(".shareWindow_parent").removeClass("active")
            $("#container").removeClass("touch-disabled")
        }
    })
    
    $("#share .share__btn.share").click(() => {
        $$({
            title: props.username,
            url: window.document.location.href+"?share=true"
        }).share();
    })
}