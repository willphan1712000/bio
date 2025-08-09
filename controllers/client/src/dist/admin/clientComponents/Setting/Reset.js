var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { $$$ } from "../../../client/src/Web-Development/WW";
import { handleAdminCssContext, username } from "../AdminContext";
const Reset = () => {
    const css = handleAdminCssContext();
    function handleClick() {
        return __awaiter(this, void 0, void 0, function* () {
            const [error, result] = yield $$$().wPromise().Try($$$("/data/api/style/RESET.php", {
                username: username()
            }).api().post());
            if (error) {
                alert(error.error);
                return;
            }
            if (!(result === null || result === void 0 ? void 0 : result.success)) {
                alert(result === null || result === void 0 ? void 0 : result.error);
                return;
            }
            css.background = result === null || result === void 0 ? void 0 : result.data.background;
            css.font = result === null || result === void 0 ? void 0 : result.data.font;
            css.fontColor = result === null || result === void 0 ? void 0 : result.data.fontColor;
            css.fontSize = result === null || result === void 0 ? void 0 : result.data.fontSize;
            $("#template__background").css({
                background: result === null || result === void 0 ? void 0 : result.data.background
            });
            $(".template__font").css({
                fontFamily: result === null || result === void 0 ? void 0 : result.data.font,
                color: result === null || result === void 0 ? void 0 : result.data.fontColor,
                fontSize: result === null || result === void 0 ? void 0 : result.data.fontSize
            });
            $(".template_name").css('font-size', (parseInt(result === null || result === void 0 ? void 0 : result.data.fontSize.replace('px', '')) + 15));
        });
    }
    return (_jsx(_Fragment, { children: _jsxs("button", { onClick: handleClick, className: 'reset flex justify-center items-center flex-shrink-0 cursor-pointer h-fit typebox', children: [_jsx("i", { className: "fa-solid fa-circle-arrow-left mr-[5px]" }), " Reset"] }) }));
};
export default Reset;
