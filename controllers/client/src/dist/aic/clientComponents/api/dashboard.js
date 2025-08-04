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
const apiClient_1 = __importDefault(require("../../../client/api/apiClient"));
function analytics() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient_1.default.get('/api/analytics');
        if (!res.ok)
            throw new Error(res.problem || "Network Error");
        const data = res.data;
        if (!data.success)
            throw new Error(data.error || "Network Error");
        return data.data;
    });
}
function social() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient_1.default.get('/api/analytics/social');
        if (!res.ok)
            throw new Error(res.problem || "Network Error");
        const data = res.data;
        if (!data.success)
            throw new Error(data.error || "Network Error");
        return data.data;
    });
}
exports.default = {
    analytics,
    social
};
