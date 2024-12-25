"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const W_1 = require("../../../client/src/Web-Development/W");
const AdminContext_1 = require("../AdminContext");
const AvatarFrame = () => {
    const [state, dispatch] = (0, AdminContext_1.handleAdminImageContext)();
    function handleAccept() {
        console.log("wewe");
    }
    function handleCancel() {
        dispatch({ type: 'upload' });
    }
    (0, react_1.useEffect)(() => {
        let transform = state.isUpload ? (0, W_1.$$)('.wrapper', '.frame').transform() : null;
        return () => {
            transform = null;
        };
    }, [state.isUpload]);
    if (state.isUpload)
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex h-screen w-screen fixed top-0 left-0 backdrop-blur-[20px] z-[99] flex-col justify-center items-center', children: [(0, jsx_runtime_1.jsx)("div", { className: "frame relative w-[80%] aspect-square border-dashed border-black border-4 rounded-[50%] p-[50px] overflow-hidden bg-white", children: (0, jsx_runtime_1.jsx)("div", { className: "wrapper", children: (0, jsx_runtime_1.jsx)("img", { className: "img__preview", src: state.previewSrc }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "btn flex flex-row gap-6 mt-[20vw]", children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => handleAccept(), className: "accept rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer", children: "Accept" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => handleCancel(), className: "cancel rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer", children: "Cancel" })] })] }));
};
exports.default = AvatarFrame;
