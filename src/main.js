import {$$} from "./module/W.js"
import {$$$} from "./module/WW.js"

$(document).ready(function() {
    // Deployment
    switch(type) {
        case 'index':
            // bioPage()
            break
        case 'admin':
            adminPage()
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
    }
})