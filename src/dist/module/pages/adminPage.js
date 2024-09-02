var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Swiper from "swiper";
import Background from "./settings/Background";
export default function adminPage(props) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false
    });
    $("#setting .image").click(() => __awaiter(this, void 0, void 0, function* () {
        const front = document.querySelector("#template-container");
        const front_d = front.getBoundingClientRect();
        html2canvas(front, {
            width: front_d.width,
            height: front_d.height,
            x: 0,
            y: 0,
            useCORS: true,
        }).then(canvas => {
            const r = canvas.width / canvas.height;
            const width = 200;
            const height = width / r;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [width, height]
            });
            const img = document.createElement("img");
            img.src = canvas.toDataURL("image/png");
            doc.addImage(img, "png", 0, 0, width, height);
            doc.save("front.pdf");
        });
        const back = document.querySelector(".card-back-container");
        const back_d = back.getBoundingClientRect();
        html2canvas(back, {
            width: back_d.width,
            height: back_d.height,
            x: 0,
            y: 0,
            useCORS: true,
        }).then(canvas => {
            const r = canvas.width / canvas.height;
            const width = 200;
            const height = width / r;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [width, height]
            });
            const img = document.createElement("img");
            img.src = canvas.toDataURL("image/png");
            doc.addImage(img, "png", 0, 0, width, height);
            doc.save("img/back.pdf");
        });
    }));
    const css = props['css'];
    const back = new Background(".setting_bar .background", css.background, "#background");
}
