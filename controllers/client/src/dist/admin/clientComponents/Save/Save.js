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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Save;
const jsx_runtime_1 = require("react/jsx-runtime");
const WW_1 = require("../../../client/src/Web-Development/WW");
const AdminContext_1 = __importStar(require("../AdminContext"));
const FetchData_1 = require("../FetchData");
function Save() {
    const data = (0, AdminContext_1.default)();
    const css = (0, AdminContext_1.handleAdminCssContext)();
    const [state, dispatch] = (0, AdminContext_1.handleAdminSaveContext)();
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            dispatch({ type: 'submit' });
            dispatch({ type: 'disable' });
            dispatch({ type: 'message', value: 'Uploading...' });
            const listOfPromises = [() => (0, FetchData_1.pushData)(data)];
            if (css !== null) {
                listOfPromises.push(() => (0, FetchData_1.pushCSS)(css));
            }
            const [error, result] = yield (0, WW_1.$$$)().wPromise().handlePromiseAllSettledResponse(listOfPromises);
            if (error) {
                dispatch({ type: 'message', value: error.error });
                dispatch({ type: 'submit' });
                setTimeout(() => {
                    dispatch({ type: 'disable' });
                    dispatch({ type: 'default' });
                }, 3000);
                return;
            }
            if (!result)
                return;
            if (!result.success) {
                dispatch({ type: 'message', value: result.error });
                dispatch({ type: 'submit' });
                setTimeout(() => {
                    dispatch({ type: 'disable' });
                    dispatch({ type: 'default' });
                }, 3000);
                return;
            }
            dispatch({ type: 'submit' });
            dispatch({ type: 'show' });
            dispatch({ type: 'message', value: 'Updated. Going to your bio' });
            setTimeout(() => {
                window.location.href = '/' + data.username;
            }, 1500);
        });
    }
    return ((0, jsx_runtime_1.jsx)("button", { disabled: state.disabled, className: 'size-full absolute top-0 left-0', onClick: e => handleSubmit(e) }));
}
