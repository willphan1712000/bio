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
const WW_1 = require("../../WW");
const CheckBox_1 = __importDefault(require("./CheckBox"));
const Email_1 = __importDefault(require("./Email"));
const Error_1 = __importDefault(require("./Error"));
const Password_1 = __importDefault(require("./Password"));
const Register_1 = __importDefault(require("./Register"));
const Username_1 = __importDefault(require("./Username"));
class SignUpUI {
    constructor(ui, url, success) {
        this.usernameBox = new Username_1.default(ui['username'], this);
        this.passwordBox = new Password_1.default(ui['password'], this);
        this.emailBox = new Email_1.default(ui['email'], this);
        this.checkBox = new CheckBox_1.default(ui['checkbox'], this);
        this.error = new Error_1.default(ui['error']);
        this.register = new Register_1.default(ui['register'], this);
        this.url = url;
        this.success = success;
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const userExist = yield (0, WW_1.$$$)(this.url.userExist, {
                username: this.usernameBox.getUsername(),
            }).api().post();
            const validEmail = yield (0, WW_1.$$$)(this.url.validEmail, {
                email: this.emailBox.getEmail(),
            }).api().post();
            const validPassword = yield (0, WW_1.$$$)(this.url.validPassword, {
                password: this.passwordBox.getPassword(),
            }).api().post();
            if (!userExist.success) {
                this.error.setError("Username exists");
            }
            else if (!this.usernameBox.isFilled()) {
                this.error.setError("Please enter username");
            }
            else if (!validEmail.success) {
                this.error.setError(validEmail.error);
            }
            else if (!validPassword.success) {
                this.error.setError(validPassword.error);
            }
            else if (!this.checkBox.isChecked()) {
                this.error.setError("Please check terms and conditions");
            }
            else {
                this.error.setError(`<i style="color: green;
                                border: solid green 1px;
                                border-radius: 50%;
                                padding: 10px;
                                width: 30px;
                                height: 30px;
                                display: flex;
                                justify-content: center;
                                align-items: center;" class="fa-solid fa-check"></i>`);
            }
            this.register.enabled(userExist.success && this.usernameBox.isFilled() && validPassword.success && validEmail.success && this.checkBox.isChecked());
        });
    }
    signup() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield (0, WW_1.$$$)(this.url.signup, {
                username: this.usernameBox.getUsername(),
                password: this.passwordBox.getPassword(),
                email: this.emailBox.getEmail()
            }).api().post();
            if (r) {
                $(this.success.before).addClass(this.success.beforeClass);
                $(this.success.after).addClass(this.success.afterClass);
            }
        });
    }
}
exports.default = SignUpUI;
