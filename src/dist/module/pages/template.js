import Swiper from "swiper";
import { $$ } from "../Web-Development/W";
export default function template(props) {
    (function () {
        if (props.isSignedIn !== "true") {
            localStorage.clear();
        }
    })();
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
    });
    (function () {
        let lastScrollTop = 0;
        const signin = document.querySelector(".logo .btn-ele.signin");
        const cart = document.querySelector(".logo .btn-ele.cart");
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                signin.style.bottom = '-12%';
                cart.style.bottom = '-12%';
            }
            else {
                signin.style.bottom = '10px';
                cart.style.bottom = '10px';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    })();
    $(".share").click(e => {
        const current = e.currentTarget;
        const shareURL = $(current).data("share");
        if (navigator.share) {
            navigator.share({
                title: props.username,
                url: shareURL
            });
        }
        else {
            alert("Share does not support this browser");
        }
    });
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
            success: function (e) {
                if (e === 1) {
                    window.location.href = '/' + props.username;
                }
            },
            error: function () {
                console.log("error");
            }
        });
    });
    $(".buy").click(e => {
        const current = $(e.currentTarget);
        const id = current.data("id");
        if (props.isSignedIn !== 'true') {
            window.location.href = '/signin?template=true';
        }
        else {
            window.location.href = '/checkout?username=' + props.username + '&itemid=' + id;
        }
    });
    (function () {
        const imgSpinner = $$(".template .template-img").addSpinner().singleSpinner();
        const img = $(".template .template-img > img");
        imgSpinner.show();
        img.css({
            "visibility": "hidden"
        });
        $(".template .template-img > img").each(function (i) {
            const img = this;
            if (img instanceof HTMLImageElement) {
                if (img.complete) {
                    handleLoaded(img);
                }
                else {
                    $(img).on("load", function () {
                        handleLoaded(img);
                    });
                }
            }
        });
        function handleLoaded(img) {
            $(img).siblings(".loader").removeClass("spinner");
            $(img).css({
                "visibility": "visible"
            });
        }
    })();
}