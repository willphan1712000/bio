"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
const react_1 = require("react");
exports.ThemeContext = (0, react_1.createContext)(undefined);
const useThemeContext = () => {
    const context = (0, react_1.useContext)(exports.ThemeContext);
    if (context === undefined) {
        throw new Error("useThemeContext must be defined within a ThemeProvider");
    }
    return context;
};
exports.default = useThemeContext;
