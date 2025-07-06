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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const io5_1 = require("react-icons/io5");
const W_1 = require("../../../client/src/Web-Development/W");
const AdminContext_1 = __importStar(require("../AdminContext"));
const AvatarImg_1 = __importDefault(require("./AvatarImg"));
const AvatarButton = () => {
    const [state, dispatch] = (0, AdminContext_1.handleAdminImageContext)();
    const data = (0, AdminContext_1.default)();
    const className = 'absolute flex flex-row bg-[#f0f0f0] p-[5px] rounded-[10px] cursor-pointer';
    const uploadRef = (0, react_1.useRef)(null);
    function handleDelete() {
        data.image = null;
        dispatch({ type: 'main', value: '/controllers/client/img/unknown.png' });
    }
    (0, react_1.useEffect)(() => {
        (0, W_1.$$)(uploadRef.current).uploadFile(({ e }) => {
            dispatch({ type: 'upload' });
            dispatch({ type: 'preview', value: e });
            $("body").css({
                overflow: "hidden"
            });
        }, 'image/*');
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "avatar__wrapper absolute top-0 left-0 size-full", children: [(0, jsx_runtime_1.jsxs)("div", { ref: uploadRef, className: `upload bottom-0 right-0 z-[1] ${className}`, children: [(0, jsx_runtime_1.jsx)(io5_1.IoCloudUploadOutline, { size: "23", className: "mr-[5px]" }), "Upload"] }), state.isDelete && (0, jsx_runtime_1.jsxs)("div", { onClick: () => handleDelete(), className: `delete top-0 left-0 bg-[red] text-white text-[12px] ${className}`, children: [(0, jsx_runtime_1.jsx)(fa_1.FaTrash, { size: "15", className: "mr-[5px]" }), "Remove avatar"] }), (0, jsx_runtime_1.jsx)(AvatarImg_1.default, {})] }));
};
exports.default = AvatarButton;
