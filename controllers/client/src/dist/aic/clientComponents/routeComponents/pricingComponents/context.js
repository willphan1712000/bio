"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingContext = void 0;
const react_1 = require("react");
exports.PricingContext = (0, react_1.createContext)(undefined);
const usePricingContext = () => {
    const context = (0, react_1.useContext)(exports.PricingContext);
    if (context === undefined) {
        throw new Error("usePricingContext must be defined within a ThemeProvider");
    }
    return context;
};
exports.default = usePricingContext;
