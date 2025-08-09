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
const apiClient_1 = __importDefault(require("../api/apiClient"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const storage_1 = __importDefault(require("./storage"));
const signInLink = '/@signin';
function validate(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient_1.default.post('/api/auth/check', {
            username
        });
        if (!res.ok)
            throw new Error(res.problem);
        const data = res.data;
        if (!data.success)
            throw new Error(data.error);
        const auth = data.data;
        if (!auth) {
            window.location.href = signInLink;
        }
        return auth;
    });
}
function login(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient_1.default.post('/api/auth', {
            username,
            password,
            email
        });
        if (!res.ok)
            throw new Error(res.problem);
        const data = res.data;
        if (!data.success)
            throw new Error(data.error);
        return data.data;
    });
}
function logout() {
    return __awaiter(this, void 0, void 0, function* () {
        js_cookie_1.default.remove('PHPSESSID');
        storage_1.default.removeToken();
        window.location.href = signInLink;
    });
}
exports.default = {
    validate,
    login,
    logout
};
