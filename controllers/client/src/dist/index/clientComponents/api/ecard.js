"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fetch;
const apiClient_1 = __importDefault(require("./apiClient"));
function fetch() {
    return apiClient_1.default.get('/api/woo/products/');
}
