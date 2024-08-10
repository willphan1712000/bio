// import { $$ } from "../Web-Development/W"

// export default function bioPage(props) {
//     $$((typeof(props.url) === 'string') ? props.url : '', ".shareWindow__link").copyToClipboard().run(()=>{
//         $(".shareWindow__btn.shareWindow__link .check").show()
//         $(".shareWindow__btn.shareWindow__link .copy").hide()
//         setTimeout(()=>{
//             $(".shareWindow__btn.shareWindow__link .check").hide()
//             $(".shareWindow__btn.shareWindow__link .copy").show()
//         }, 2000)
//     })
//     $(".share__btn.qr").click(()=>{
//         $(".shareWindow_parent.qrcode").addClass("active")
//         $("#container").addClass("touch-disabled")
//     })
//     $(".share__btn.image").click(()=>{
//         const element = document.querySelector("#template-container")
//         const d = element.getBoundingClientRect()
//         html2canvas(element, {
//             width: d.width,
//             height: ( 16 / 9 ) * d.width,
//             x: 0,
//             y: 0,
//             useCORS: true
//         }).then(canvas => {
//             document.querySelector(".image .shareWindow__qr").src = canvas.toDataURL("image/png");
//             document.querySelector(".image .shareWindow__download").download = "card.png"
//             document.querySelector(".image .shareWindow__download").href = canvas.toDataURL("image/png")
//             $(".shareWindow_parent.image").addClass("active")
//             $("#container").addClass("touch-disabled")
//         })
//     })
//     $(".shareWindow__close").click(()=>{
//         $(".shareWindow_parent").removeClass("active")
//         $("#container").removeClass("touch-disabled")
//     })
//     $("#share .share__btn.share").click(() => {
//         if(navigator.share) {
//             navigator.share({
//                 title: username,
//                 url: window.document.location.href+"?share=true"
//             }).then(()=> {
//                 alert("Sent!")
//             }).catch(console.error)
//         } else {
//             alert("Share does not support this browser")
//         }
//     })
// }