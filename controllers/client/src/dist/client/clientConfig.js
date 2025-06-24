"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.smoothScrolling = smoothScrolling;
const lenis_1 = __importDefault(require("@studio-freight/lenis"));
exports.default = Object.freeze({
    nfc: {
        one: "Cards use short-range wireless technology to communicate with compatible devices when brought close together.",
        two: "These cards can store and transmit small amounts of data, such as contact info, website links, or payment credentials.",
        three: "NFC cards require no battery and are often used for digital business cards, access control, or contactless payments."
    }
});
function smoothScrolling() {
    const lenis = new lenis_1.default();
    lenis.on('scroll', (e) => {
        console.log(e);
    });
    function ref(time) {
        lenis.raf(time);
        requestAnimationFrame(ref);
    }
    requestAnimationFrame(ref);
}
