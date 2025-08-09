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
import { username } from "../admin/clientComponents/AdminContext";
import Delete from "../admin/clientComponents/Delete/Delete";
import { fetchData, getResource } from "../admin/clientComponents/FetchData";
import { $$ } from "../client/src/Web-Development/W";
import InfoArea from "./clientComponents/InfoArea";
$(document).ready(function () {
    adminPage();
});
function adminPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = username();
        const list = yield fetchData(user);
        list.username = user;
        const resource = yield getResource(user);
        $$("#info__wrapper", _jsx(InfoArea, { data: list, extraData: { defaultImgPath: resource.defaultImg, regexMap: resource.regexMap, labelMap: resource.labelMap, iconMap: resource.iconMap } })).reactMounting();
        $$("#delete", _jsx(Delete, { message: resource.deleteWarning })).reactMounting();
    });
}
