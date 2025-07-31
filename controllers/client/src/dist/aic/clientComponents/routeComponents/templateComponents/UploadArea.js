"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dropzone_1 = require("react-dropzone");
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const UploadArea = ({ state, title }) => {
    const { file, setFile } = state;
    const theme = (0, theme_1.default)();
    const borderClasses = `${theme.classes.border} rounded-3xl p-10 text-center`;
    const onDrop = (0, react_1.useCallback)((acceptedFiles) => {
        const file = acceptedFiles[0];
        setFile(file);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = (0, react_dropzone_1.useDropzone)({ onDrop });
    function isImageMimeType(mimeType) {
        return /^image\/.+$/.test(mimeType);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'px-5 md:w-[300px] w-full flex flex-col items-center', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[1.2rem] pt-10 pb-5', children: title }), (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getRootProps(), { className: 'w-full', children: [(0, jsx_runtime_1.jsx)("input", Object.assign({}, getInputProps(), { accept: "image/*,.xlsx" })), isDragActive ? ((0, jsx_runtime_1.jsx)("div", { className: `${borderClasses} !border-dashed`, children: "Drop file here" })) : ((0, jsx_runtime_1.jsx)("div", { className: `${borderClasses} cursor-pointer`, children: "Click or drop file here" }))] })), file && (0, jsx_runtime_1.jsxs)("p", { children: ["Name: ", file === null || file === void 0 ? void 0 : file.name] })] }));
};
exports.default = UploadArea;
