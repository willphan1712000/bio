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
const react_1 = require("react");
const ClipLoader_1 = __importDefault(require("react-spinners/ClipLoader"));
const WW_1 = require("../../../client/src/Web-Development/WW");
const AdminContext_1 = require("../AdminContext");
const DeleteConfirm = () => {
    const [state, dispatch] = (0, AdminContext_1.handleAdminDeleteContext)();
    const deleteMenuRef = (0, react_1.useRef)(null);
    function handleCancel(e) {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'show' });
        $("body").css({
            overflow: "auto"
        });
    }
    function handleStop(e) {
        e.stopPropagation();
    }
    function handleDelete(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.stopPropagation();
            e.preventDefault();
            dispatch({ type: 'disable' });
            dispatch({ type: 'delete' });
            dispatch({ type: 'msg', value: 'Processing...' });
            try {
                const r = yield (0, WW_1.$$$)("/data/api/user/DELETEHOLD.php", {
                    username: state.username
                }).api().post();
                if (r.success) {
                    dispatch({ type: 'msg', value: 'Done, refresh shortly' });
                    dispatch({ type: 'delete' });
                    setTimeout(() => {
                        window.location.href = "/@signin";
                    }, 2000);
                }
                else {
                    dispatch({ type: 'msg', value: r.error });
                    setTimeout(() => {
                        dispatch({ type: 'disable' });
                        dispatch({ type: 'delete' });
                        dispatch({ type: 'msg', value: 'Delete' });
                    }, 2000);
                }
            }
            catch (error) {
                dispatch({ type: 'msg', value: error.error });
                setTimeout(() => {
                    dispatch({ type: 'disable' });
                    dispatch({ type: 'delete' });
                    dispatch({ type: 'msg', value: 'Delete' });
                }, 2000);
            }
        });
    }
    if (state.show)
        return ((0, jsx_runtime_1.jsx)("div", { onClick: (e) => handleCancel(e), className: 'z-[99] fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center', children: (0, jsx_runtime_1.jsxs)("div", { onClick: e => handleStop(e), ref: deleteMenuRef, className: 'rounded-[10px] bg-white max-w-[600px] w-[80%] h-[70%] shadow-2xl flex justify-center items-center flex-col p-[15px]', children: [(0, jsx_runtime_1.jsx)("p", { className: "text-center text-[20px] mb-[10px]", children: state.message.msg1 }), (0, jsx_runtime_1.jsx)("p", { className: "text-center", children: state.message.msg2 }), (0, jsx_runtime_1.jsx)("p", { className: "text-center", children: state.message.msg3 }), (0, jsx_runtime_1.jsx)("p", { className: "text-center", children: state.message.msg4 }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-5 mt-5", children: [(0, jsx_runtime_1.jsxs)("button", { disabled: state.disabled, onClick: (e) => handleDelete(e), className: "flex flex-row justify-center items-center rounded-xl bg-[#f0f0f0] p-2", children: [(0, jsx_runtime_1.jsx)(ClipLoader_1.default, { size: "20px", color: '#000', loading: state.isDeleting, className: "mr-[5px]" }), state.msg] }), !state.disabled && (0, jsx_runtime_1.jsx)("button", { onClick: (e) => handleCancel(e), className: "rounded-xl bg-[#c3e676] p-2", children: "Cancel" })] })] }) }));
};
exports.default = DeleteConfirm;
