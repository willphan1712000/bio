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
Object.defineProperty(exports, "__esModule", { value: true });
const WW_1 = require("../../WW");
class DataUI {
    constructor(url) {
        this.url = url;
    }
    getData(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, WW_1.$$$)(this.url, options).api().post();
            if (data.success) {
                for (const i in data.data) {
                    data.data[i].Bio = '<a target="_blank" href="/' + data.data[i].username + '" style="color: #000;">Bio</a>';
                    data.data[i].admin = '<a target="_blank" href="/' + data.data[i].username + '/admin" style="color: #000;">Admin</a>';
                    data.data[i].delete = '<button value="' + data.data[i].username + '">Delete</button>';
                }
            }
            else {
                throw new Error(data.error);
            }
            return data;
        });
    }
}
exports.default = DataUI;
