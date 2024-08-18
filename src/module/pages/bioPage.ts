import html2canvas from "html2canvas"
import { $$ } from "../Web-Development/W"
import { jsPDF } from "jspdf";

interface Props {
    [key: string]: string
}

export default function bioPage(props: Props) {
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
    $(".shareWindow__close").click(()=>{
        $(".shareWindow_parent").removeClass("active")
        $("#container").removeClass("touch-disabled")
    })
    $("#share .share__btn.share").click(() => {
        if(navigator.share) {
            navigator.share({
                title: props.username,
                url: window.document.location.href+"?share=true"
            }).then(()=> {
                alert("Sent!")
            }).catch(console.error)
        } else {
            alert("Share does not support this browser")
        }
    })

    $(".share__btn.image").click(async ()=>{   
        const element = document.querySelector("#template-container") as HTMLElement;
        const d = element.getBoundingClientRect()
        html2canvas(element, {
            width: d.width,
            height: d.height,
            x: 0,
            y: 0,
            useCORS: true,
        }).then(canvas => {
            const r = canvas.width / canvas.height;
            const width = 200;
            const height = width / r;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [width, height]
            });
            const img = document.createElement("img");
            img.src = canvas.toDataURL("image/png");
            doc.addImage(img, "png", 0, 0, width, height);
            doc.save("card.pdf");
        })
    })
}