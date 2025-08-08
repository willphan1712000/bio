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
const jsx_runtime_1 = require("react/jsx-runtime");
const themes_1 = require("@radix-ui/themes");
const react_1 = require("react");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const react_spinners_1 = require("react-spinners");
const AppToaster_1 = __importDefault(require("../../../../client/clientComponents/AppToaster"));
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const handleAsync_1 = __importDefault(require("../../../../client/utilities/handleAsync"));
const pricing_1 = __importDefault(require("../../api/pricing"));
const context_1 = require("./context");
const MultiSelect_1 = __importDefault(require("./multiSelect/MultiSelect"));
const useAppQuery_1 = __importDefault(require("../../../../client/hooks/useAppQuery"));
const useAppEffect_1 = __importDefault(require("../../../../client/hooks/useAppEffect"));
const PricingModel = () => {
    const theme = (0, theme_1.default)();
    const containerClasses = `${theme.classes.border} md:w-fit w-full p-10 rounded-[30px] flex flex-col items-center md:items-start my-5`;
    const [pricing, setPricing] = (0, react_1.useState)(undefined);
    const { isPending, data: pricingQuery, error } = (0, useAppQuery_1.default)("pricing", pricing_1.default.get);
    (0, useAppEffect_1.default)(error);
    (0, react_1.useEffect)(() => {
        if (!isPending && pricingQuery) {
            setPricing(pricingQuery);
        }
    }, [pricingQuery]);
    const handleUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        const { error } = yield (0, handleAsync_1.default)(pricing_1.default.post(pricing));
        if (error) {
            return (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: error }));
        }
        (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { status: true, message: "Update successfully" }));
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(context_1.PricingContext.Provider, { value: {
                state: pricing,
                setState: setPricing
            }, children: (0, jsx_runtime_1.jsxs)("div", { className: containerClasses, children: [isPending ? (0, jsx_runtime_1.jsx)(react_spinners_1.HashLoader, {}) : (0, jsx_runtime_1.jsx)(MultiSelect_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: 'my-5 bg-white p-[1px] rounded-full w-fit', children: (0, jsx_runtime_1.jsx)(themes_1.Button, { size: "3", onClick: handleUpdate, children: "Update" }) })] }) }) }));
};
exports.default = PricingModel;
