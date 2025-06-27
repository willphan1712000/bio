"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.smoothScrolling = smoothScrolling;
const lenis_1 = __importDefault(require("@studio-freight/lenis"));
exports.default = Object.freeze({
    nfc: {
        title: "Use NFC - Near Field Communication Technology",
        one: "Cards use short-range wireless technology to communicate with compatible devices when brought close together.",
        two: "These cards can store and transmit small amounts of data, such as contact info, website links, or payment credentials.",
        three: "NFC cards require no battery and are often used for digital business cards, access control, or contactless payments."
    },
    heading: {
        title: "Level up your",
        titleSpan: "eBusiness Cards",
        description: "Our eBusiness cards template will give you the best design so you can make a good impression towards your clients, increase your revenue based on your professionals."
    },
    aic: {
        website: "https://card.aiccards.com",
        email: "tonthang@icloud.com",
        phone: "571-419-0969",
        messenger: "https://m.me/AllinclicksUs",
        facebook: "https://www.facebook.com/AllinclicksUs/",
        instagram: "https://www.instagram.com/allinclicks.us",
        address: "800 Walnut Creek Dr NW, Lilburn, GA 30047"
    }
});
function smoothScrolling() {
    const lenis = new lenis_1.default();
    function ref(time) {
        lenis.raf(time);
        requestAnimationFrame(ref);
    }
    requestAnimationFrame(ref);
}
