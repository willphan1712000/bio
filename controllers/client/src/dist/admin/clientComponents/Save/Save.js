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
exports.default = Save;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdminContext_1 = __importDefault(require("../AdminContext"));
const WW_1 = require("../../../client/src/Web-Development/WW");
function Save({ setSubmit, setDone, setMsg }) {
    const [isSubmitting, setSubmitHandler] = (0, react_1.useState)(false);
    const data = (0, react_1.useContext)((0, AdminContext_1.default)());
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            data.img = '';
            setSubmitHandler(true);
            setSubmit(true);
            try {
                const result = yield (0, WW_1.$$$)("/data/api/info/PUT.php", data).api().post();
                if (result.success) {
                    setSubmitHandler(false);
                    setSubmit(false);
                    setDone(true);
                    setMsg('Updated. Going to your bio');
                    setTimeout(() => {
                        window.location.href = '/' + data.username;
                    }, 1500);
                }
                else {
                    setMsg(result.error);
                    setSubmit(false);
                    setTimeout(() => {
                        setSubmitHandler(false);
                        setMsg("Save");
                    }, 3000);
                }
            }
            catch (error) {
                setMsg(error.error);
                setSubmit(false);
                setTimeout(() => {
                    setSubmitHandler(false);
                    setMsg("Save");
                }, 3000);
            }
        });
    }
    return ((0, jsx_runtime_1.jsx)("button", { disabled: isSubmitting, className: 'w-full h-full absolute top-0 left-0', onClick: e => handleSubmit(e) }));
}
