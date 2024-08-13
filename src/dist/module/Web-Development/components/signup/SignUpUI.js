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
export default class SignUpUI {
    constructor(ui, url, success) {
        this.usernameBox = new Username(ui['username'], this);
        this.passwordBox = new Password(ui['password'], this);
        this.emailBox = new Email(ui['email'], this);
        this.checkBox = new CheckBox(ui['checkbox'], this);
        this.error = new Error(ui['error'], this);
        this.register = new Register(ui['register'], this);
        this.url = url;
        this.success = success;
    }
    update() {
        this.register.enabled(this.usernameBox.isFilled() && this.passwordBox.isValidPassword() && this.emailBox.isValidEmail() && this.checkBox.isChecked());
    }
    signup() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield $$$(this.url.signup, {
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
