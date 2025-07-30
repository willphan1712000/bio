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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const themes_1 = require("@radix-ui/themes");
const react_1 = require("react");
const react_hot_toast_1 = __importStar(require("react-hot-toast"));
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const template_1 = __importDefault(require("../../api/template"));
const UploadArea_1 = __importDefault(require("./UploadArea"));
const Upload = () => {
    const theme = (0, theme_1.default)();
    const containerClasses = `${theme.classes.border} md:w-fit w-full p-10 rounded-[30px] flex flex-col items-center md:items-start`;
    const [thumbnail, setThumbnail] = (0, react_1.useState)();
    const [template, setTemplate] = (0, react_1.useState)();
    const [annotation, setAnnotation] = (0, react_1.useState)();
    const [isUploading, setUploading] = (0, react_1.useState)(false);
    const resetFiles = () => {
        setThumbnail(undefined);
        setTemplate(undefined);
        setAnnotation(undefined);
    };
    const handleUpload = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!thumbnail || !template || !annotation) {
            (0, react_hot_toast_1.default)('Please upload all required files');
            return;
        }
        setUploading(true);
        const data = yield template_1.default.uploadTemplate({
            thumbnail,
            template,
            annotation
        });
        resetFiles();
        if (!data.success) {
            console.log(data.error);
            (0, react_hot_toast_1.default)("Error: open console tab to see more information!");
        }
        else {
            (0, react_hot_toast_1.default)("Upload successfully");
        }
        setUploading(false);
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_hot_toast_1.Toaster, {}), (0, jsx_runtime_1.jsxs)("div", { className: containerClasses, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col md:flex-row justify-center items-center', children: [(0, jsx_runtime_1.jsx)(UploadArea_1.default, { title: "Upload Thumbnail", state: { file: thumbnail, setFile: setThumbnail } }), (0, jsx_runtime_1.jsx)(UploadArea_1.default, { title: "Upload Template", state: { file: template, setFile: setTemplate } }), (0, jsx_runtime_1.jsx)(UploadArea_1.default, { title: "Upload Annotation", state: { file: annotation, setFile: setAnnotation } })] }), (0, jsx_runtime_1.jsx)("div", { className: 'w-fit p-[20px]', children: (0, jsx_runtime_1.jsx)("div", { className: 'bg-white p-[1px] rounded-full', children: (0, jsx_runtime_1.jsx)(themes_1.Button, { loading: isUploading, size: "3", radius: 'full', onClick: handleUpload, children: "Upload" }) }) })] })] }));
};
exports.default = Upload;
