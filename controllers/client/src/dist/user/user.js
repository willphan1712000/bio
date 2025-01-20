"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminContext_1 = require("../admin/clientComponents/AdminContext");
const W_1 = require("../client/src/Web-Development/W");
$(document).ready(function () {
    user();
});
function user() {
    const url = window.document.location.href + "?share=true";
    const user = (0, AdminContext_1.username)();
    (0, W_1.$$)((typeof (url) === 'string') ? url : '', ".shareWindow__link").copyToClipboard().run(() => {
        $(".shareWindow__btn.shareWindow__link .check").show();
        $(".shareWindow__btn.shareWindow__link .copy").hide();
        setTimeout(() => {
            $(".shareWindow__btn.shareWindow__link .check").hide();
            $(".shareWindow__btn.shareWindow__link .copy").show();
        }, 2000);
    });
    (0, W_1.$$)({
        trigger: document.querySelector(".share__btn.qr"),
        terminate: [
            document.querySelector(".shareWindow_parent.qrcode i"),
            document.querySelector(".shareWindow_parent.qrcode")
        ]
    }, document.querySelector(".shareWindow_parent.qrcode"), "active").toggle().advanced();
    $("#share .share__btn.share").click(() => {
        (0, W_1.$$)({
            title: user,
            url
        }).share();
    });
    $("textarea").css({
        "pointer-events": "none"
    });
}
