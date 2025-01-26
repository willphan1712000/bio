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
exports.$$$ = $$$;
const jquery_1 = __importDefault(require("jquery"));
const SignUpUI_1 = __importDefault(require("./components/signup/SignUpUI"));
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
    else if (ele2 !== undefined && ele1 !== undefined) {
        return new WW2(ele1, ele2);
    }
    else if (ele1 !== undefined) {
        return new WW1(ele1);
    }
    else {
        return new WW0();
    }
}
class WW0 {
    wPromise() {
        return new WPromise;
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
        this.eventFunction = (e) => {
            const regex = new RegExp(this.regex);
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
        };
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
        this.inputElement.addEventListener("input", this.eventFunction);
        return this;
    }
    cleanup() {
        this.inputElement.removeEventListener('input', this.eventFunction);
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
            jquery_1.default.ajax({
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
            jquery_1.default.ajax({
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
class WPromise extends WW0 {
    constructor() {
        if (WPromise.instance) {
            return WPromise.instance;
        }
        super();
        WPromise.instance = this;
    }
    PromiseAll(promiseArray) {
        return Promise.all(promiseArray.map(each => each()));
    }
    PromiseAllSettled(promiseArray) {
        return Promise.allSettled(promiseArray.map(each => each()));
    }
    Try(promise) {
        return promise.then(data => {
            return [undefined, data];
        }).catch(error => {
            return [error];
        });
    }
    failedPromise(results, promiseArray) {
        const r = results
            .map((result, index) => {
            if (result.status === 'rejected')
                return promiseArray[index];
            return undefined;
        })
            .filter((item) => item !== undefined);
        return r.length > 0 ? r : [];
    }
    handlePromiseAllSettled(promiseArray, option) {
        return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
            try {
                const retry = ((option === null || option === void 0 ? void 0 : option.retry) === undefined || (option === null || option === void 0 ? void 0 : option.retry) < 1) ? 0 : option.retry;
                const results_init = yield this.PromiseAllSettled(promiseArray);
                let failedPromises = this.failedPromise(results_init, promiseArray);
                if (failedPromises.length === 0)
                    res(results_init);
                let results;
                for (let i = 1; i <= retry; i++) {
                    results = yield this.PromiseAllSettled(failedPromises);
                    failedPromises = this.failedPromise(results, failedPromises);
                    if (failedPromises.length === 0)
                        break;
                }
                results_init.forEach(result => {
                    if (result.status === 'rejected') {
                        rej(results_init);
                    }
                });
                res(results_init);
            }
            catch (error) {
                rej(error);
            }
        }));
    }
    handlePromiseAllSettledResponse(promiseArray) {
        return __awaiter(this, void 0, void 0, function* () {
            const [e, r] = yield this.Try(this.handlePromiseAllSettled(promiseArray, { retry: 3 }));
            return [this.communicationReject(e), this.communicationResolve(r)];
        });
    }
    communicationReject(results) {
        const r = {
            success: false,
            error: ""
        };
        if (!results)
            return results;
        results.forEach((each) => {
            var _a, _b;
            r.error += (((_a = each.reason) === null || _a === void 0 ? void 0 : _a.error) === undefined) ? "" : ((_b = each.reason) === null || _b === void 0 ? void 0 : _b.error) + ". ";
        });
        return r;
    }
    communicationResolve(results) {
        const r = {
            success: true,
            error: ""
        };
        if (!results)
            return results;
        const data = [];
        results.forEach((each) => {
            var _a, _b, _c, _d;
            if (!((_a = each.value) === null || _a === void 0 ? void 0 : _a.success)) {
                r.success = false;
            }
            r.error += (((_b = each.value) === null || _b === void 0 ? void 0 : _b.error) === undefined) ? "" : ((_c = each.value) === null || _c === void 0 ? void 0 : _c.error) + ". ";
            data.push((_d = each.value) === null || _d === void 0 ? void 0 : _d.data);
        });
        r.data = data;
        return r;
    }
}
