import Swiper from "swiper";
import { $$ } from "../Web-Development/W";

interface Props {
    [key: string]: string
}
export default function template(props: Props) : void {
    // Method to remove everything from cart when signed out
    (function() {
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

    $(".share").click(e => {
        const current = e.currentTarget;
        const shareURL = $(current).data("share");
        $$({
            title: props.username,
            url: shareURL
        }).share();
    })

    $(".select").click(e => {
        const current = e.currentTarget;
        const id = $(current).data("id");
        $.ajax({
            url: '/data/api/template/select.php',
            method: 'POST',
            data: {
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
            window.location.href = '/@signin?template=true'
        } else {
            window.location.href = '/@checkout?username=' + props.username + '&itemid=' + id;
        }
    });

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
}