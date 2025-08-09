"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useAppEffect;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const AppToaster_1 = __importDefault(require("../clientComponents/AppToaster"));
function useAppEffect(error) {
    (0, react_1.useEffect)(() => {
        if (error) {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: error.message }));
        }
    }, [error]);
}
