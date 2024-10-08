var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { $$$ } from "../Web-Development/WW";
export default function restore(props) {
    $(".btn__ele--restore").click(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield $$$("/data/api/restoreAccount.php", {
                username: props.username
            }).api().post();
            if (r) {
                window.location.href = "/";
            }
        });
    });
    $(".btn__ele--delete").click(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield $$$("/data/api/deleteAccount.php", {
                username: props.username
            }).api().post();
            if (r) {
                window.location.href = "/";
            }
        });
    });
}
