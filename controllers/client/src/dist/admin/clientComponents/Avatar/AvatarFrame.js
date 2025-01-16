"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Canvas_1 = __importDefault(require("../../../client/src/Web-Development/components/upload/Canvas"));
const W_1 = require("../../../client/src/Web-Development/W");
const AdminContext_1 = __importStar(require("../AdminContext"));
const AvatarFrame = () => {
    const [state, dispatch] = (0, AdminContext_1.handleAdminImageContext)();
    const [transform, setTransform] = (0, react_1.useState)(null);
    const data = (0, AdminContext_1.default)();
    const imageRef = (0, react_1.useRef)(null);
    const frameRef = (0, react_1.useRef)(null);
    const wrapperRef = (0, react_1.useRef)(null);
    function handleCancel() {
        dispatch({ type: 'upload' });
        $("body").css({
            overflow: "auto"
        });
        setTransform(null);
    }
    function handleAccept() {
        const img = imageRef.current;
        const canvasObj = new Canvas_1.default();
        const [x, y, angle] = transform.exportData();
        const [canvas, ctx] = canvasObj.createCanvas(700, 700);
        const [, src, srcEncoded] = canvasObj.drawImage(img, ctx, x, y, 1, angle, canvas, frameRef.current.clientWidth, frameRef.current.clientHeight);
        setTransform(null);
        $("body").css({
            overflow: "auto"
        });
        dispatch({ type: 'main', value: src });
        data.image = srcEncoded;
        dispatch({ type: 'upload' });
    }
    function handleLoad() {
        setTransform((0, W_1.$$)(wrapperRef.current, frameRef.current).transform());
    }
    (0, react_1.useEffect)(() => {
        const img = imageRef.current;
        if (img !== null && state.isUpload) {
            if (img.complete) {
                handleLoad();
            }
            else {
                img.addEventListener('load', () => handleLoad());
            }
        }
        return () => {
            if (img !== null && state.isUpload) {
                img.removeEventListener('load', () => handleLoad());
            }
        };
    }, [state]);
    if (state.isUpload)
        return ((0, jsx_runtime_1.jsxs)("div", { className: `flex h-screen w-screen fixed top-0 left-0 backdrop-blur-[20px] z-[99] flex-col justify-center items-center px-[30px]`, children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[20px] mb-[20px]", children: "Drag, Zoom, or Rotate Image" }), (0, jsx_runtime_1.jsx)("div", { className: "frame relative w-[100%] max-w-[500px] max-h-[500px] aspect-square border-dashed border-black border-4 rounded-[50%] p-[50px] overflow-hidden bg-white", ref: frameRef, children: (0, jsx_runtime_1.jsx)("div", { className: "wrapper", ref: wrapperRef, children: (0, jsx_runtime_1.jsx)("img", { className: "img__preview", src: state.previewSrc, ref: imageRef }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "btn flex flex-row gap-6 mt-[20px] z-0", children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => handleAccept(), className: "flex items-center accept rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer", children: "Accept" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => handleCancel(), className: "cancel rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer", children: "Cancel" })] })] }));
};
exports.default = AvatarFrame;
