var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DataUI from "./DataUI";
import InputUI from "./InputUI";
import TableUI from "./TableUI";
export default class SearchUI {
    constructor(input, tableProps) {
        this.inputUI = new InputUI(input, this);
        this.tableUI = new TableUI(tableProps.container, tableProps.header, tableProps.target, tableProps.limit, tableProps.like, tableProps.url, tableProps.html);
        this.dataUI = new DataUI(tableProps.url);
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            this.table = yield this.tableUI.initilize();
            this.observer = this.tableUI.addObserver(this.table);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const v = this.inputUI.getValue();
            const data = yield this.dataUI.getData({
                limit: this.tableUI.getLimit(),
                like: v
            });
            if (v === "") {
                (_a = this.observer) === null || _a === void 0 ? void 0 : _a.resetCount();
                (_b = this.observer) === null || _b === void 0 ? void 0 : _b.observe();
            }
            else {
                (_c = this.observer) === null || _c === void 0 ? void 0 : _c.unobserve();
            }
            (_d = this.table) === null || _d === void 0 ? void 0 : _d.empty();
            this.tableUI.addRow(this.table, data, true);
        });
    }
}