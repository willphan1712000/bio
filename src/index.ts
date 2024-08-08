import {$$} from "./module/Web-Development/W"
import {$$$} from "./module/Web-Development/WW"
import Swiper from 'swiper'

declare var type: string;
declare var props: {
    [key: string]: string
}
interface Props {
    [key: string]: string
}

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
            aic();
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

    function aic() : void {
        // search mechanism
       (async function() {
           interface Data {
               [key: number]: {
                   [key: string]: string
               }
           }
           const data = await $$$("/data/update.php", {
               type: "getUserInfo",
           }).api().post() as Data;

           for(const i in data) {
            data[i].a = '<a target="_blank" href="/'+data[i].username+'" style="color: #000;">Bio</a>'
            data[i].admin = '<a target="_blank" href="/'+data[i].username+'/admin" style="color: #000;">Admin</a>'
            data[i].delete = '<button value="'+data[i].username+'">Delete</button>'
           }
           
           const search = $$("#search", {
            location: "#userData",
            header: {
                1: "#",
                2: "Username",
                3: "Email",
                4: "Password",
                5: "Token",
                6: "Delete Token",
                7: "Bio",
                8: "Admin",
                9: "Delete"
            },
            data
           }, "/src/dist/module/Web-Development/worker.js", () => {
                $("#userData button").off("click", e => {
                    return null;
                });
                $("#userData button").click(function(e) {
                    $(".warning__parent").addClass("active")
                    let currentUsernameElement = e.currentTarget as HTMLInputElement;
                    let currentUsernameValue = currentUsernameElement.value;
                    
                    $(".btn__confirm").off("click", e => {
                        return null;
                    });
                    $(".btn__confirm").click(async function() {
                        await $$$("/data/update.php", {
                            type: 'delete',
                            username: currentUsernameValue,
                        }).api().post();
                        location.reload();
                    })
                })
           }).search().run();
       })()
    }

    function template(props: Props) : void {
        // Method to remove everything from cart when signed out
        (function() {
            console.log(props.isSignedIn);
            
            if(props.isSignedIn !== "true") {
                localStorage.clear()
            }
        })()
        
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
        });

        (function() {
            let lastScrollTop = 0;
            const signin = document.querySelector(".logo .btn-ele.signin") as HTMLElement | null;
            const cart = document.querySelector(".logo .btn-ele.cart") as HTMLElement | null;

            window.addEventListener('scroll', () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if(scrollTop > lastScrollTop) {
                    signin!.style.bottom = '-12%';
                    cart!.style.bottom = '-12%';
                } else {
                    signin!.style.bottom = '10px';
                    cart!.style.bottom = '10px';
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

    // Load templates with spinner
    (function() {
        // Initially show spinner
        const imgSpinner = $$(".template .template-img").addSpinner().singleSpinner();
        const img = $(".template .template-img > img");
        imgSpinner.show();
        img.css({
            "visibility": "hidden"
        });

        $(".template .template-img > img").each(function(i) {
            const img = this;
            
            // Check if the image is already loaded
            if(img instanceof HTMLImageElement) {
                if (img.complete) {
                    handleLoaded(img)
                } else {
                    // Attach the load event listener
                    $(img).on("load", function() {
                        handleLoaded(img)
                    })
                }
            }
        });

        function handleLoaded(img: HTMLElement) {
            $(img).siblings(".loader").removeClass("spinner")
            $(img).css({
                "visibility": "visible"
            })
        }
    })()

})