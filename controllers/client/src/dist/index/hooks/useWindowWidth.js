"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobile = void 0;
exports.default = useWindowWidth;
const react_1 = require("react");
function useWindowWidth() {
    const [windowWidth, setWindowWidth] = (0, react_1.useState)(window.innerWidth);
    (0, react_1.useEffect)(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
    }, [windowWidth]);
    return windowWidth;
}
exports.mobile = 640;
