"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminPage_1 = __importDefault(require("./module/pages/adminPage"));
const aic_1 = __importDefault(require("./module/pages/aic"));
const bioPage_1 = __importDefault(require("./module/pages/bioPage"));
const restore_1 = __importDefault(require("./module/pages/restore"));
const signup_1 = __importDefault(require("./module/pages/signup"));
const template_1 = __importDefault(require("./module/pages/template"));
$(document).ready(function () {
    switch (type) {
        case 'index':
            (0, bioPage_1.default)(props);
            break;
        case 'admin':
            (0, adminPage_1.default)(props);
            break;
        case 'signup':
            (0, signup_1.default)({
                signup: "/data/api/user/POST.php",
                userExist: "/data/api/user/validation/Username.php",
                validEmail: "/data/api/user/validation/Email.php",
                validPassword: "/data/api/user/validation/Password.php",
            });
            break;
        case 'signin':
            break;
        case 'aic':
            (0, aic_1.default)();
            break;
        case 'forgot':
            break;
        case 'forgotUsername':
            break;
        case 'resetPass':
            break;
        case 'restore':
            (0, restore_1.default)(props);
            break;
        case 'template':
            (0, template_1.default)(props);
            break;
        default:
            break;
    }
});
