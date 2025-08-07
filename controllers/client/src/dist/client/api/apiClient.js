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
const apisauce_1 = require("apisauce");
const storage_1 = __importDefault(require("../auth/storage"));
const apiClient = (0, apisauce_1.create)({
    baseURL: '/'
});
apiClient.addAsyncRequestTransform((request) => __awaiter(void 0, void 0, void 0, function* () {
    const token = storage_1.default.getToken();
    if (!token)
        return;
    if (!request.headers)
        request.headers = {};
    request.headers[storage_1.default.key] = token;
}));
exports.default = apiClient;
