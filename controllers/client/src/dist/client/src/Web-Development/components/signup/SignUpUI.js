var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { $$$ } from "../../WW";
import CheckBox from "./CheckBox";
import Email from "./Email";
import Error from "./Error";
import Password from "./Password";
import Register from "./Register";
import Username from "./Username";
const key = process.env.SYSTEM_SECRET_KEY;
export default class SignUpUI {
    constructor(ui, url, success) {
        Object.defineProperty(this, "usernameBox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "passwordBox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "emailBox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkBox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "register", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "success", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.usernameBox = new Username(ui['username'], this);
        this.passwordBox = new Password(ui['password'], this);
        this.emailBox = new Email(ui['email'], this);
        this.checkBox = new CheckBox(ui['checkbox'], this);
        this.error = new Error(ui['error']);
        this.register = new Register(ui['register'], this);
        this.url = url;
        this.success = success;
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const userExist = yield $$$(this.url.userExist, {
                username: this.usernameBox.getUsername(),
                key
            }).api().post();
            const validEmail = yield $$$(this.url.validEmail, {
                email: this.emailBox.getEmail(),
                key
            }).api().post();
            const validPassword = yield $$$(this.url.validPassword, {
                password: this.passwordBox.getPassword(),
                key
            }).api().post();
            if (!userExist.success) {
                this.error.setError(userExist.error);
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
            const r = yield $$$(this.url.signup, {
                username: this.usernameBox.getUsername(),
                password: this.passwordBox.getPassword(),
                email: this.emailBox.getEmail(),
                key
            }).api().post();
            if (r) {
                $(this.success.before).addClass(this.success.beforeClass);
                $(this.success.after).addClass(this.success.afterClass);
                setTimeout(() => {
                    window.location.href = '/' + this.usernameBox.getUsername() + '/admin';
                }, 2000);
            }
        });
    }
}
