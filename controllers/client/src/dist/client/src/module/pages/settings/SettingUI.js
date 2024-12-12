"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingUI = void 0;
const Avatar_1 = require("./Avatar");
const Background_1 = __importDefault(require("./Background"));
const Font_1 = __importDefault(require("./Font"));
const FontColor_1 = __importDefault(require("./FontColor"));
const FontSize_1 = __importDefault(require("./FontSize"));
const Info_1 = __importDefault(require("./Info"));
class SettingUI {
    constructor(params) {
        this.params = params;
        this.background = new Background_1.default(".setting_bar .background", params.css.background, "#template__background");
        this.fontSize = new FontSize_1.default(".setting_bar .fontSize", parseInt(params.css.fontSize), ".template__font");
        this.font = new Font_1.default(".setting_bar .font", params.css.font, ".template__font");
        this.fontColor = new FontColor_1.default(".setting_bar .fontColor", params.css.fontColor, ".template__font");
        this.avatar = new Avatar_1.Avatar({
            reset: params.imgPath,
            img: "#avatar",
            username: params.username,
            imgName: params.imgName,
        });
        this.info = new Info_1.default({ name: ".template_name", target: ".card-back-container .name" }, { name: ".template_org", target: ".card-back-container .organization" }, { name: ".template_des", target: "" });
    }
}
exports.SettingUI = SettingUI;
