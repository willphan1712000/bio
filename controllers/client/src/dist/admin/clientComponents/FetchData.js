var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { $$$ } from "../../client/src/Web-Development/WW";
export function fetchData(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield $$$("/data/api/info/GET.php", {
            username
        }).api().post();
        if (!data.success) {
            throw new Error(data.error);
        }
        const dataList = data.data;
        if (!dataList) {
            throw new Error('Data is undefined');
        }
        return dataList;
    });
}
export function getResource(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const resource = yield $$$("/data/api/user/GETResource.php", {
            username
        }).api().post();
        if (!resource.success) {
            throw new Error(resource.error);
        }
        const resourceList = resource.data;
        if (!resourceList) {
            throw new Error('Resource is undefined');
        }
        return resourceList;
    });
}
export function getCSS(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const css = yield $$$("/data/api/style/GET.php", {
            username
        }).api().post();
        if (!css.success) {
            throw new Error(css.error);
        }
        const cssList = css.data;
        if (!cssList) {
            throw new Error("Css is undefined");
        }
        return cssList;
    });
}
export function pushData(data) {
    return $$$("/data/api/info/PUT.php", data).api().post();
}
export function pushCSS(data) {
    const formatedData = {
        username: data.username,
        props: {
            font: data.font,
            fontSize: data.fontSize,
            fontColor: data.fontColor,
            background: data.background
        }
    };
    return $$$("/data/api/style/PUT.php", formatedData).api().post();
}
