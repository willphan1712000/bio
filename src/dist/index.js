var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { $$ } from "./module/Web-Development/W";
import { $$$ } from "./module/Web-Development/WW";
import Swiper from 'swiper';
$(document).ready(function () {
    switch (type) {
        case 'index':
            break;
        case 'admin':
            break;
        case 'signup':
            signupPage();
            break;
        case 'signin':
            break;
        case 'aic':
            aic();
            break;
        case 'forgot':
            break;
        case 'forgotUsername':
            break;
        case 'resetPass':
            break;
        case 'restore':
            break;
        case 'template':
            template(props);
            break;
        default:
            break;
    }
    function runCheckDatabase() {
        $.ajax({
            url: "/data/update.php",
            method: "POST",
            dataType: "json",
            data: JSON.stringify({
                type: "mainPage"
            }),
            success: function (e) {
                if (e)
                    console.log("Database has been checked and updated");
            },
            error: function () {
                console.log("Error");
            }
        });
    }
    function signupPage() {
        $$("#password").passShowHide().run();
        $$(".passRequirements", "dropdown").toggle().run();
        $$$("#username", "#email", "#password", ".signupChild__error", ".signupChild__confirm").signup().run();
    }
    function aic() {
        (function () {
            return __awaiter(this, void 0, void 0, function* () {
                const data = yield $$$("/data/update.php", {
                    type: "getUserInfo",
                }).api().post();
                for (const i in data) {
                    data[i].a = '<a target="_blank" href="/' + data[i].username + '" style="color: #000;">Bio</a>';
                    data[i].admin = '<a target="_blank" href="/' + data[i].username + '/admin" style="color: #000;">Admin</a>';
                    data[i].delete = '<button value="' + data[i].username + '">Delete</button>';
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
                    $("#userData button").click(function (e) {
                        $(".warning__parent").addClass("active");
                        let currentUsernameElement = e.currentTarget;
                        let currentUsernameValue = currentUsernameElement.value;
                        $(".btn__confirm").off("click", e => {
                            return null;
                        });
                        $(".btn__confirm").click(function () {
                            return __awaiter(this, void 0, void 0, function* () {
                                yield $$$("/data/update.php", {
                                    type: 'delete',
                                    username: currentUsernameValue,
                                }).api().post();
                                location.reload();
                            });
                        });
                    });
                }).search().run();
            });
        })();
    }
    function template(props) {
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
    }
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
});
