"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const W_1 = require("../client/src/Web-Development/W");
const App_1 = __importDefault(require("./clientComponents/App"));
$(document).ready(function () {
    (0, W_1.$$)("#container", (0, jsx_runtime_1.jsx)(App_1.default, {})).reactMounting();
    aic();
});
function aic() {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            (0, W_1.$$)("#search", {
                container: "#userData",
                target: "#copyright",
                limit: 50,
                like: "",
                url: {
                    get: "/data/api/user/GETALL.php",
                    delete: "/data/api/user/DELETE.php"
                },
                html: {
                    button: "#userData button",
                    confirm: ".btn__confirm",
                    back: ".btn__back",
                    parent: ".warning__parent"
                }
            }).search();
        });
    })();
}
