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
const AdminContext_1 = __importStar(require("../AdminContext"));
const AvatarButton_1 = __importDefault(require("./AvatarButton"));
const AvatarFrame_1 = __importDefault(require("./AvatarFrame"));
function reducer(state, action) {
    switch (action.type) {
        case 'upload':
            return Object.assign(Object.assign({}, state), { isUpload: !state.isUpload });
        case 'main':
            return Object.assign(Object.assign({}, state), { mainSrc: action.value });
        case 'preview':
            return Object.assign(Object.assign({}, state), { previewSrc: action.value });
        case 'delete':
            return Object.assign(Object.assign({}, state), { isDelete: !state.isDelete });
        default:
            throw new Error("Unknown action type");
    }
}
const Avatar = () => {
    const data = (0, AdminContext_1.default)();
    const [state, dispatch] = (0, react_1.useReducer)(reducer, {
        isUpload: false,
        mainSrc: `${data.image === null ? '/controllers/client/img/unknown.png' : `/user/${(0, AdminContext_1.username)()}/${data.image}`}`,
        previewSrc: undefined,
        isDelete: data.image !== null,
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(AdminContext_1.AdminImageContext.Provider, { value: [state, dispatch], children: [(0, jsx_runtime_1.jsx)(AvatarFrame_1.default, {}), (0, jsx_runtime_1.jsx)(AvatarButton_1.default, {})] }) }));
};
exports.default = Avatar;
