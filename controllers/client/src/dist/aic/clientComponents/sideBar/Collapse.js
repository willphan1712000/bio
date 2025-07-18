"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseContext = void 0;
const react_1 = require("react");
exports.CollapseContext = (0, react_1.createContext)(undefined);
const useCollapseContext = () => {
    const context = (0, react_1.useContext)(exports.CollapseContext);
    if (context === undefined) {
        throw new Error("useCollapseContext is undefined and must be used within CollapseContext.");
    }
    return context;
};
exports.default = useCollapseContext;
