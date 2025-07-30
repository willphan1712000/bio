"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apisauce_1 = require("apisauce");
const apiClient = (0, apisauce_1.create)({
    baseURL: '/'
});
exports.default = apiClient;
