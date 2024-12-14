"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const W_1 = require("../client/src/Web-Development/W");
$(document).ready(function () {
    user(props);
});
function user(props) {
    (0, W_1.$$)((typeof (props.url) === 'string') ? props.url : '', ".shareWindow__link").copyToClipboard().run(() => {
        $(".shareWindow__btn.shareWindow__link .check").show();
        $(".shareWindow__btn.shareWindow__link .copy").hide();
        setTimeout(() => {
            $(".shareWindow__btn.shareWindow__link .check").hide();
            $(".shareWindow__btn.shareWindow__link .copy").show();
        }, 2000);
    });
    (0, W_1.$$)({
        trigger: ".share__btn.qr",
        terminate: ".shareWindow__close"
    }, ".shareWindow_parent.qrcode", "active").toggle().advanced();
    $("#share .share__btn.share").click(() => {
        (0, W_1.$$)({
            title: props.username,
            url: window.document.location.href + "?share=true"
        }).share();
    });
}
