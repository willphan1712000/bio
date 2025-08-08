"use strict";
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
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const react_spinners_1 = require("react-spinners");
const AppToaster_1 = __importDefault(require("../../../../client/clientComponents/AppToaster"));
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const template_1 = __importDefault(require("../../api/template"));
const UploadArea_1 = __importDefault(require("./UploadArea"));
const react_query_1 = require("@tanstack/react-query");
const Upload = () => {
    const theme = (0, theme_1.default)();
    const containerClasses = `${theme.classes.border} md:w-fit w-full p-10 rounded-[30px] flex flex-col items-center md:items-start my-5`;
    const [thumbnail, setThumbnail] = (0, react_1.useState)();
    const [template, setTemplate] = (0, react_1.useState)();
    const [annotation, setAnnotation] = (0, react_1.useState)();
    const [isUploading, setUploading] = (0, react_1.useState)(false);
    const resetFiles = () => {
        setThumbnail(undefined);
        setTemplate(undefined);
        setAnnotation(undefined);
    };
    const queryClient = (0, react_query_1.useQueryClient)();
    const { mutateAsync: uploadTemplate } = (0, react_query_1.useMutation)({
        mutationFn: template_1.default.uploadTemplate,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["templates"] });
        }
    });
    const handleUpload = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!thumbnail || !template || !annotation) {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: 'Please upload all required files' }));
            return;
        }
        setUploading(true);
        const data = yield uploadTemplate({
            thumbnail,
            template,
            annotation
        });
        resetFiles();
        if (!data.success) {
            console.log(data.error);
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: data.error }));
        }
        else {
            if (!data.data.success) {
                (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: data.data.error }));
            }
            else {
                (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: data.data.data.msg, status: true }));
            }
        }
        setUploading(false);
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: containerClasses, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col md:flex-row justify-center items-center', children: [(0, jsx_runtime_1.jsx)(UploadArea_1.default, { title: "Upload Thumbnail", state: { file: thumbnail, setFile: setThumbnail } }), (0, jsx_runtime_1.jsx)(UploadArea_1.default, { title: "Upload Template", state: { file: template, setFile: setTemplate } }), (0, jsx_runtime_1.jsx)(UploadArea_1.default, { title: "Upload Annotation", state: { file: annotation, setFile: setAnnotation } })] }), (0, jsx_runtime_1.jsx)("div", { className: 'w-fit p-[20px]', children: (0, jsx_runtime_1.jsx)("div", { className: 'bg-white p-[1px] rounded-full', children: (0, jsx_runtime_1.jsx)(themes_1.Button, { disabled: isUploading, size: "3", radius: 'full', onClick: handleUpload, children: isUploading ? (0, jsx_runtime_1.jsx)(react_spinners_1.BarLoader, {}) : 'Upload' }) }) })] }) }));
};
exports.default = Upload;
