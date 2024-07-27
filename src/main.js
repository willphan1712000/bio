import { dirname } from "path"
import {$$} from "./module/W.js"
import {$$$} from "./module/WW.js"
import { log } from "console"

$(document).ready(function() {
    // Deployment
    switch(type) {
        case 'index':
            // bioPage()
            break
        case 'admin':
            // adminPage()
            break
        case 'signup':
            // signupPage()
            break
        case 'signin':
            // signinPage()
            break
        case 'aic':
            // aic()
            // runCheckDatabase()
            break
        case 'forgot':
            // forgot()
            break
        case 'forgotUsername':
            // forgotUsername()
            break
        case 'resetPass':
            // resetPass()
            break
        case 'restore':
            // restore()
            break
        case 'template':
            template(props)
            break
        default:
            break
    }

    function adminPage() {
        // $(".share__btn.image").click(()=>{ 
        //     const element = document.querySelector("#template-container");
        //     const d = element.getBoundingClientRect();
        //     html2canvas(element, {width: d.width,height: ( 16 / 9 ) * d.width,x: 0,y: 0,useCORS: true }).then(canvas => {document.querySelector(".image .shareWindow__qr").src = canvas.toDataURL("image/png"); document.querySelector(".image .shareWindow__download").download = "card.png";
        //     document.querySelector(".image .shareWindow__download").href = canvas.toDataURL("image/png")
        //     $(".shareWindow_parent.image").addClass("active");
        //     $("#container").addClass("touch-disabled")})
        // })
    }

    function template(props) {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
        });

        (function() {
            let lastScrollTop = 0;
            const signin = document.querySelector(".logo .btn-ele.signin");
            const cart = document.querySelector(".logo .btn-ele.cart");

            window.addEventListener('scroll', () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if(scrollTop > lastScrollTop) {
                    signin.style.bottom = '-12%';
                    cart.style.bottom = '-12%';
                } else {
                    signin.style.bottom = '10px';
                    cart.style.bottom = '10px';
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            })
        })()

        $(".share").click(e => {
            const current = e.currentTarget;
            const shareURL = $(current).data("share");
            if(navigator.share) {
                navigator.share({
                    title: props.username,
                    url: shareURL
                })
            } else {
                alert("Share does not support this browser")
            }
        })

        $(".select").click(e => {
            const current = e.currentTarget;
            const id = $(current).data("id");
            $.ajax({
                url: '/data/template.php',
                method: 'POST',
                data: {
                    type: "select",
                    username: props.username,
                    themeid: id
                },
                dataType: "json",
                success: function(e) {
                    if(e === 1) {
                        window.location.href = '/' + props.username
                    }
                },
                error: function() {
                    console.log("error");
                }
            })
        })

        $(".buy").click(e => {
            const current = $(e.currentTarget) // get current element that gets clicked      
            const id = current.data("id") // get current element id
            if(props.isSignedIn !== 'true') {
                window.location.href = '/signin?template=true'
            } else {
                window.location.href = '/checkout?username=' + props.username + '&itemid=' + id;
            }
        })
    }
})