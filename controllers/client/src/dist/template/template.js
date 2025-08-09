var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import Swiper from "swiper";
import { $$ } from "../client/src/Web-Development/W";
import { auth, username } from "./clientComponents/TemplateContext";
import Cart from "./clientComponents/cart/Cart";
import { $$$ } from "../client/src/Web-Development/WW";
$(document).ready(() => {
    template(props);
});
export default function template(props) {
    $$("#cart", _jsx(Cart, { signin: props.isSignedIn })).reactMounting();
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
        $$({
            title: username(),
            url: shareURL
        }).share();
    });
    $(".select").click((e) => __awaiter(this, void 0, void 0, function* () {
        const current = e.currentTarget;
        const id = $(current).data("id");
        const r = yield $$$('/data/api/user/template/PUT.php', {
            username: username(),
            template_id: id
        }).api().post();
        if (r.success) {
            window.location.href = '/' + username();
        }
    }));
    $(".buy").click(e => {
        auth(props.isSignedIn === 'true', () => {
            const current = $(e.currentTarget);
            const id = current.data("id");
            window.location.href = '/@checkout?username=' + username() + '&itemid=' + id;
        });
    });
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (username() !== null) {
                try {
                    const r = yield $$$("/data/api/template/GET.php", {
                        username: username()
                    }).api().post();
                    if (r.success) {
                        r.data.map(item => {
                            $(`.like[data-id=${item}]`).addClass("active");
                        });
                    }
                }
                catch (error) {
                    console.log(error.error);
                }
            }
        });
    })();
    $(".like").click(e => {
        auth(props.isSignedIn === 'true', () => __awaiter(this, void 0, void 0, function* () {
            const current = $(e.currentTarget);
            const id = current.data("id");
            if (!current.hasClass("active")) {
                try {
                    const r = yield $$$("/data/api/template/POST.php", {
                        username: username(),
                        template_id: id
                    }).api().post();
                    if (r.success) {
                        current.addClass("active");
                    }
                }
                catch (error) {
                    console.log(error.error);
                }
            }
            else {
                try {
                    const r = yield $$$("/data/api/template/DELETE.php", {
                        username: username(),
                        template_id: id
                    }).api().post();
                    if (r.success) {
                        current.removeClass("active");
                    }
                }
                catch (error) {
                    console.log(error.error);
                }
            }
        }));
    });
    (function () {
        const imgSpinner = $$(document.querySelector(".template .template-img")).addSpinner().singleSpinner();
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
