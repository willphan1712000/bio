"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartContext = void 0;
exports.default = handleCartContext;
const react_1 = require("react");
exports.CartContext = (0, react_1.createContext)(undefined);
function handleCartContext() {
    const context = (0, react_1.useContext)(exports.CartContext);
    if (context === undefined) {
        throw new Error("Cart context is undefined");
    }
    return context;
}
