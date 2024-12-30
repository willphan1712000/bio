/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/client/src/dist/client/src/Web-Development/WW.js":
/*!**********************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/WW.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$$$ = $$$;
const SignUpUI_1 = __importDefault(__webpack_require__(/*! ./components/signup/SignUpUI */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/SignUpUI.js"));
function $$$(ele1, ele2, ele3, ele4, ele5, ele6) {
    if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined && ele5 !== undefined && ele6 !== undefined) {
        return new WW6(ele1, ele2, ele3, ele4, ele5, ele6);
    }
    else if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined && ele5 !== undefined) {
        return new WW5(ele1, ele2, ele3, ele4, ele5);
    }
    else if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined) {
        return new WW4(ele1, ele2, ele3, ele4);
    }
    else if (ele2 !== undefined && ele3 !== undefined) {
        return new WW3(ele1, ele2, ele3);
    }
    else if (ele2 !== undefined) {
        return new WW2(ele1, ele2);
    }
    else {
        return new WW1(ele1);
    }
}
class WW1 {
    constructor(ele1) {
        this.ele1 = ele1;
    }
}
class WW2 {
    constructor(ele1, ele2) {
        this.ele1 = ele1;
        this.ele2 = ele2;
    }
    api() {
        return new API(this.ele1, this.ele2);
    }
}
class WW3 {
    constructor(ele1, ele2, ele3) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
    }
    signup() {
        return new Signup(this.ele1, this.ele2, this.ele3);
    }
    formValidate() {
        return new FormValidate(this.ele1, this.ele2, this.ele3);
    }
}
class WW4 {
    constructor(ele1, ele2, ele3, ele4) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
    }
}
class WW5 {
    constructor(ele1, ele2, ele3, ele4, ele5) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
        this.ele5 = ele5;
    }
}
class WW6 {
    constructor(ele1, ele2, ele3, ele4, ele5, ele6) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
        this.ele5 = ele5;
        this.ele6 = ele6;
    }
}
class FormValidate extends WW3 {
    constructor(inputElement, feedbackElement, regex) {
        super(inputElement, feedbackElement, regex);
        this.inputElement = inputElement;
        this.feedbackElement = feedbackElement;
        this.regex = regex;
        this.isValid = true;
        if (this.inputElement === null) {
            throw new Error("Input Element is not defined or rendered");
        }
        if (this.feedbackElement === null) {
            throw new Error("Feedback Element is not defined or rendered");
        }
        this.execute();
    }
    setValidity(value) {
        this.isValid = value;
    }
    getValidity() {
        return this.isValid;
    }
    execute() {
        const regex = new RegExp(this.regex);
        this.inputElement.addEventListener("input", (e) => {
            const target = e.target;
            if (target.value !== '') {
                if (regex.test(target.value)) {
                    this.setValidity(true);
                    this.feedbackElement.innerHTML = `<i style="color: green;" class="fa-solid fa-check"></i>`;
                }
                else {
                    this.setValidity(false);
                    this.feedbackElement.innerHTML = `<i style="color: red;" class="fa-solid fa-x"></i>`;
                }
            }
            else {
                this.feedbackElement.innerHTML = '';
                this.setValidity(true);
            }
        });
        return this;
    }
    cleanup() {
        this.inputElement.removeEventListener('input', () => { });
        return this;
    }
}
class Signup extends WW3 {
    constructor(ui, url, success) {
        super(ui, url, success);
        this.signUpUI = new SignUpUI_1.default(ui, url, success);
    }
}
class API extends WW2 {
    constructor(src, data) {
        super(src, data);
    }
    get() {
        return new Promise((res, rej) => {
            $.ajax({
                url: this.ele1,
                method: "GET",
                dataType: "json",
                contentType: "application/json",
                success: (e) => {
                    res(e);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    rej({ 'error': 'Request failed due to network connection failed' });
                    throw new Error(`AJAX request failed: ${textStatus}, ${errorThrown}`);
                }
            });
        });
    }
    post() {
        return new Promise((res, rej) => {
            $.ajax({
                url: this.ele1,
                method: "POST",
                data: JSON.stringify(this.ele2),
                dataType: "json",
                contentType: "application/json",
                success: (e) => {
                    res(e);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    rej({ 'error': 'Request failed due to network connection failed' });
                    throw new Error(`AJAX request failed: ${textStatus}, ${errorThrown}`);
                }
            });
        });
    }
}


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/CheckBox.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/CheckBox.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CheckBox {
    constructor(checkbox, signUpUI) {
        this.$checkbox = $(checkbox);
        this.$checkbox.on("change", e => {
            signUpUI.update();
        });
    }
    isChecked() {
        return this.$checkbox.is(':checked');
    }
}
exports["default"] = CheckBox;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Email.js":
/*!*******************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Email.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Email {
    constructor(email, signUpUI) {
        this.$email = $(email);
        this.$email.on("input", e => {
            signUpUI.update();
        });
    }
    getEmail() {
        return this.$email.val();
    }
}
exports["default"] = Email;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Error.js":
/*!*******************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Error.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Error {
    constructor(error) {
        this.$error = $(error);
    }
    setError(msg) {
        this.$error.html(msg);
    }
}
exports["default"] = Error;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Password.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Password.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Password {
    constructor(password, signUpUI) {
        this.$password = $(password);
        this.$password.on("input", e => {
            signUpUI.update();
        });
    }
    getPassword() {
        return this.$password.val();
    }
}
exports["default"] = Password;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Register.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Register.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Register {
    constructor(register, signUpUI) {
        this.$register = $(register);
        this.isEnabled = false;
        this.isDisabledHandling();
        this.$register.click((e) => {
            e.preventDefault();
            signUpUI.signup();
        });
    }
    enabled(is) {
        this.isEnabled = is;
        if (this.isEnabled) {
            this.isEnabledHandling();
        }
        else {
            this.isDisabledHandling();
        }
    }
    isEnabledHandling() {
        this.$register.prop('disabled', false);
        this.$register.css({
            "backgroundColor": "#cec3e7"
        });
    }
    isDisabledHandling() {
        this.$register.prop('disabled', true);
        this.$register.css({
            "backgroundColor": "#c6c6c6"
        });
    }
}
exports["default"] = Register;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/SignUpUI.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/SignUpUI.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const WW_1 = __webpack_require__(/*! ../../WW */ "./controllers/client/src/dist/client/src/Web-Development/WW.js");
const CheckBox_1 = __importDefault(__webpack_require__(/*! ./CheckBox */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/CheckBox.js"));
const Email_1 = __importDefault(__webpack_require__(/*! ./Email */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Email.js"));
const Error_1 = __importDefault(__webpack_require__(/*! ./Error */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Error.js"));
const Password_1 = __importDefault(__webpack_require__(/*! ./Password */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Password.js"));
const Register_1 = __importDefault(__webpack_require__(/*! ./Register */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Register.js"));
const Username_1 = __importDefault(__webpack_require__(/*! ./Username */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Username.js"));
const key = {"STRIPE_PUBLISHABLE_KEY":"pk_test_51PAMO1BBsUVJd6T4Eic1w4bC9mNx3g1ztStSqJkms3slrzO4W2G6X2vwOiQFPoYT6jxHg1D6wUnQnkrzvaTg4lwh00ZaNPiUyb","SYSTEM_SECRET_KEY":"b64cf2e5-1c39-4814-a8ab-d75e8d729c8f"}.SYSTEM_SECRET_KEY;
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
                key
            }).api().post();
            const validEmail = yield (0, WW_1.$$$)(this.url.validEmail, {
                email: this.emailBox.getEmail(),
                key
            }).api().post();
            const validPassword = yield (0, WW_1.$$$)(this.url.validPassword, {
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
            const r = yield (0, WW_1.$$$)(this.url.signup, {
                username: this.usernameBox.getUsername(),
                password: this.passwordBox.getPassword(),
                email: this.emailBox.getEmail(),
                key
            }).api().post();
            if (r) {
                $(this.success.before).addClass(this.success.beforeClass);
                $(this.success.after).addClass(this.success.afterClass);
            }
        });
    }
}
exports["default"] = SignUpUI;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Username.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Username.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Username {
    constructor(username, signUpUI) {
        this.$username = $(username);
        this.$username.on("input", e => {
            signUpUI.update();
        });
    }
    getUsername() {
        return this.removeSpace(this.$username.val());
    }
    isFilled() {
        return this.$username.val() !== "";
    }
    removeSpace(text) {
        return text.replace(/\s+/g, '');
    }
}
exports["default"] = Username;


/***/ }),

/***/ "./controllers/client/src/dist/restore/restore.js":
/*!********************************************************!*\
  !*** ./controllers/client/src/dist/restore/restore.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = restore;
const WW_1 = __webpack_require__(/*! ../client/src/Web-Development/WW */ "./controllers/client/src/dist/client/src/Web-Development/WW.js");
function restore(props) {
    $(".btn__ele--restore").click(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield (0, WW_1.$$$)("/data/api/restoreAccount.php", {
                username: props.username
            }).api().post();
            if (r) {
                window.location.href = "/";
            }
        });
    });
    $(".btn__ele--delete").click(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield (0, WW_1.$$$)("/data/api/deleteAccount.php", {
                username: props.username
            }).api().post();
            if (r) {
                window.location.href = "/";
            }
        });
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./controllers/client/src/dist/restore/restore.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=restorejsbd4b3bc308a960b008a1.js.map