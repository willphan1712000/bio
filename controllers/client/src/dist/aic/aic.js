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
import auth from "../client/auth/auth";
import { $$ } from "../client/src/Web-Development/W";
import App from "./clientComponents/App";
import "@radix-ui/themes/styles.css";
$(document).ready(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const isSignedIn = yield auth.validate("Allinclicks");
        if (isSignedIn)
            $$("#admin_container", _jsx(App, {})).reactMounting();
    });
});
