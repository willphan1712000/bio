"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
exports.default = template;
const jsx_runtime_1 = require("react/jsx-runtime");
const swiper_1 = __importDefault(require("swiper"));
const W_1 = require("../client/src/Web-Development/W");
const TemplateContext_1 = require("./clientComponents/TemplateContext");
const Cart_1 = __importDefault(require("./clientComponents/cart/Cart"));
const WW_1 = require("../client/src/Web-Development/WW");
$(document).ready(() => {
    template(props);
});
function auth(isSignedIn, cb) {
    if (!isSignedIn) {
        window.location.href = '/@signin?template=true';
    }
    else {
        cb();
    }
}
function template(props) {
    (0, W_1.$$)("#cart", (0, jsx_runtime_1.jsx)(Cart_1.default, { signin: props.isSignedIn })).reactMounting();
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
            title: (0, TemplateContext_1.username)(),
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
                username: (0, TemplateContext_1.username)(),
                themeid: id
            },
            dataType: "json",
            success: function (e) {
                if (e === 1) {
                    window.location.href = '/' + (0, TemplateContext_1.username)();
                }
            },
            error: function () {
                console.log("error");
            }
        });
    });
    $(".buy").click(e => {
        auth(props.isSignedIn === 'true', () => {
            const current = $(e.currentTarget);
            const id = current.data("id");
            window.location.href = '/@checkout?username=' + (0, TemplateContext_1.username)() + '&itemid=' + id;
        });
    });
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, TemplateContext_1.username)() !== null) {
                try {
                    const r = yield (0, WW_1.$$$)("/data/api/template/GET.php", {
                        username: (0, TemplateContext_1.username)()
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
                    const r = yield (0, WW_1.$$$)("/data/api/template/POST.php", {
                        username: (0, TemplateContext_1.username)(),
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
                    const r = yield (0, WW_1.$$$)("/data/api/template/DELETE.php", {
                        username: (0, TemplateContext_1.username)(),
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
        const imgSpinner = (0, W_1.$$)(document.querySelector(".template .template-img")).addSpinner().singleSpinner();
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
