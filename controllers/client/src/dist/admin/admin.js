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
import { username } from "./clientComponents/AdminContext";
import { fetchData, getCSS, getResource } from "./clientComponents/FetchData";
import Setting from "./clientComponents/Setting/Setting";
$(document).ready(function () {
    admin();
});
export default function admin() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = username();
        const list = yield fetchData(user);
        const resource = yield getResource(user);
        const css = yield getCSS(user);
        $$("#setting", _jsx(Setting, { data: list, css: css, resource: resource })).reactMounting();
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: false
        });
    });
}
