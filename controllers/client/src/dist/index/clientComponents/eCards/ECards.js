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
const react_query_1 = require("@tanstack/react-query");
const react_spinners_1 = require("react-spinners");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const ecard_1 = __importDefault(require("../api/ecard"));
const Separator_1 = __importDefault(require("../Separator"));
const Effect_1 = __importDefault(require("./Effect"));
const Slider_1 = __importDefault(require("./Slider"));
const ECards = () => {
    const { isPending, data: products } = (0, react_query_1.useQuery)({
        queryKey: ['eBusinessCards'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield ecard_1.default.getEBusinessCards(); })
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden', children: [(0, jsx_runtime_1.jsx)("div", { id: "basic_cards" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] pb-5', children: clientConfig_1.default.cards.basic.heading }), isPending ? (0, jsx_runtime_1.jsx)(react_spinners_1.BeatLoader, {}) : (0, jsx_runtime_1.jsx)(Slider_1.default, { products: products }), (0, jsx_runtime_1.jsx)(Separator_1.default, { thickness: "4" }), (0, jsx_runtime_1.jsx)("div", { id: "pro_cards" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-[25px]', children: clientConfig_1.default.cards.professional.heading }), isPending ? (0, jsx_runtime_1.jsx)(react_spinners_1.BeatLoader, {}) : (0, jsx_runtime_1.jsx)(Effect_1.default, { products: products })] }));
};
exports.default = ECards;
