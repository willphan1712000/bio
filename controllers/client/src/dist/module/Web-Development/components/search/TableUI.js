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
const W_1 = require("../../W");
const WW_1 = require("../../WW");
const DataUI_1 = __importDefault(require("./DataUI"));
class TableUI {
    constructor(container, header, target, limit, like, url, html) {
        this.tableContainer = container;
        this.target = target;
        this.limit = limit;
        this.like = like;
        this.header = header;
        this.dataUI = new DataUI_1.default(url);
        this.html = html;
    }
    getLimit() {
        return this.limit;
    }
    setLimit(limit) {
        this.limit = limit;
    }
    initilize() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.dataUI.getData({
                limit: this.limit,
                like: this.like
            });
            const table = (0, W_1.$$)(this.tableContainer, this.header).table().addHeader();
            this.addRow(table, data, false);
            return table;
        });
    }
    addObserver(table) {
        const limit = this.limit;
        const o = (0, W_1.$$)(this.target, {
            threshold: 1
        }, (e) => __awaiter(this, void 0, void 0, function* () {
            if (e) {
                o.increaseCount();
                const data = yield this.dataUI.getData({
                    limit,
                    offset: limit * o.getCount()
                });
                this.addRow(table, data, true);
            }
        })).addIntersectionObserver().observe();
        return o;
    }
    addRow(table, data, search) {
        table.addRow(data);
        this.handleClick(search);
    }
    handleClick(search) {
        const html = this.html;
        if (search) {
            $(html.button).off("click", e => {
                return null;
            });
            $(html.confirm).off("click", e => {
                return null;
            });
            $(html.back).off("click", e => {
                return null;
            });
        }
        $(html.button).click(function (e) {
            $(html.parent).addClass("active");
            let currentUsernameElement = e.currentTarget;
            let currentUsernameValue = "";
            currentUsernameValue = currentUsernameElement.value;
            $(html.confirm).click(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const r = yield (0, WW_1.$$$)("/data/api/deleteAccount.php", {
                        username: currentUsernameValue,
                    }).api().post();
                    if (r) {
                        location.reload();
                    }
                });
            });
            $(html.back).click(() => {
                $(html.parent).removeClass("active");
                currentUsernameValue = "";
            });
        });
    }
}
exports.default = TableUI;
