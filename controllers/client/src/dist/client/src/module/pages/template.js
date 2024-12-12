"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = template;
const swiper_1 = __importDefault(require("swiper"));
const W_1 = require("../../Web-Development/W");
function template(props) {
    (function () {
        if (props.isSignedIn !== "true") {
            localStorage.clear();
        }
    })();
    const swiper = new swiper_1.default('.swiper', {
        direction: 'horizontal',
        loop: false,
    });
    (function () {
        let lastScrollTop = 0;
        const btn_box = document.querySelector(".btn-box");
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                btn_box.style.bottom = '-12%';
            }
            else {
                btn_box.style.bottom = '10px';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    })();
    $(".share").click(e => {
        const current = e.currentTarget;
        const shareURL = $(current).data("share");
        (0, W_1.$$)({
            title: props.username,
            url: shareURL
        }).share();
    });
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
            window.location.href = '/@signin?template=true';
        }
        else {
            window.location.href = '/@checkout?username=' + props.username + '&itemid=' + id;
        }
    });
    (function () {
        const imgSpinner = (0, W_1.$$)(".template .template-img").addSpinner().singleSpinner();
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
