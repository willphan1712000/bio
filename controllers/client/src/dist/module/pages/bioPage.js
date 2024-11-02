"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bioPage;
const W_1 = require("../Web-Development/W");
function bioPage(props) {
    (0, W_1.$$)((typeof (props.url) === 'string') ? props.url : '', ".shareWindow__link").copyToClipboard().run(() => {
        $(".shareWindow__btn.shareWindow__link .check").show();
        $(".shareWindow__btn.shareWindow__link .copy").hide();
        setTimeout(() => {
            $(".shareWindow__btn.shareWindow__link .check").hide();
            $(".shareWindow__btn.shareWindow__link .copy").show();
        }, 2000);
    });
    $(".share__btn.qr").click(() => {
        $(".shareWindow_parent.qrcode").addClass("active");
        $("#container").addClass("touch-disabled");
    });
    $(".shareWindow__close").click(() => {
        $(".shareWindow_parent").removeClass("active");
        $("#container").removeClass("touch-disabled");
    });
    $("#share .share__btn.share").click(() => {
        (0, W_1.$$)({
            title: props.username,
            url: window.document.location.href + "?share=true"
        }).share();
    });
}
