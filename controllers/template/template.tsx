import Swiper from "swiper";
import { $$ } from "../client/src/Web-Development/W"
import { auth, username } from "./clientComponents/TemplateContext";
import Cart from "./clientComponents/cart/Cart";
import { $$$ } from "../client/src/Web-Development/WW";
import Response from "../client/src/Web-Development/components/Response";

interface Props {
    isSignedIn: string
}

declare var props: Props

$(document).ready(() => {
    template(props)
})

export default function template(props: Props) : void {
    $$("#cart", <Cart signin={props.isSignedIn}/>).reactMounting(); // Mount cart component
    // Method to remove everything from cart when signed out
    (function() {
        if(props.isSignedIn !== "true") {
            localStorage.clear()
        }
    })()
    
    // Swiper effect for templates
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
    });

    // When scrolling down, box button will disappear. When scrolling up, box button will appear
    (function() {
        let lastScrollTop = 0;
        const btn_box = document.querySelector(".btn-box") as HTMLElement;

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if(scrollTop > lastScrollTop) {
                btn_box.style.bottom = '-12%';
            } else {
                btn_box.style.bottom = '10px';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        })
    })()

    // Handle share button
    $(".share").click(e => {
        const current = e.currentTarget;
        const shareURL = $(current).data("share");
        $$({
            title: username(),
            url: shareURL
        }).share();
    })

    // handle select button
    $(".select").click(async e => {
        const current = e.currentTarget;
        const id = $(current).data("id");

        const r = await $$$('/data/api/user/template/PUT.php', {
            username: username(),
            template_id: id
        }).api().post() as Response

        if(r.success) {
            window.location.href = '/' + username()
        }
    })

    // handle buy button
    $(".buy").click(e => {
        auth(props.isSignedIn === 'true', () => {
            const current = $(e.currentTarget) // get current element that gets clicked      
            const id = current.data("id") // get current element id
            window.location.href = '/@checkout?username=' + username() + '&itemid=' + id;
        })
    });

    // Handle like button
    (async function() {
        if(username() !== null) {
            try {
                const r = await $$$("/data/api/template/GET.php", {
                    username: username()
                }).api().post() as Response
                
                if(r.success){
                    (r.data as Array<string>).map(item => {
                        $(`.like[data-id=${item}]`).addClass("active")
                    })
                }
            } catch(error: any) {
                console.log(error.error)
            }
        }
    })()
    $(".like").click(e => {
        auth(props.isSignedIn === 'true', async () => {
            const current = $(e.currentTarget)
            const id = current.data("id")

            if(!current.hasClass("active")) {
                try {
                    const r = await $$$("/data/api/template/POST.php", {
                        username: username(),
                        template_id: id
                    }).api().post() as Response

                    if(r.success) {
                        current.addClass("active")
                    }
                } catch(error: any) {
                    console.log(error.error)
                }
            } else {
                try {
                    const r = await $$$("/data/api/template/DELETE.php", {
                        username: username(),
                        template_id: id
                    }).api().post() as Response

                    if(r.success) {
                        current.removeClass("active")
                    }
                } catch(error: any) {
                    console.log(error.error)
                }
            }

        })
    });

    // Load templates with spinner
    (function() {
        // Initially show spinner
        const imgSpinner = $$(document.querySelector(".template .template-img")).addSpinner().singleSpinner();
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
}