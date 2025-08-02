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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const themes_1 = require("@radix-ui/themes");
const react_1 = require("react");
const react_spinners_1 = require("react-spinners");
const AppAlertDialog = ({ buttonTitle, title, des, fn }) => {
    const [isPending, setPending] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(themes_1.Flex, { children: (0, jsx_runtime_1.jsxs)(themes_1.AlertDialog.Root, { children: [(0, jsx_runtime_1.jsx)(themes_1.AlertDialog.Trigger, { children: (0, jsx_runtime_1.jsx)(themes_1.Button, { color: "red", disabled: isPending, children: isPending ? (0, jsx_runtime_1.jsx)(react_spinners_1.BarLoader, { width: 60 }) : buttonTitle }) }), (0, jsx_runtime_1.jsxs)(themes_1.AlertDialog.Content, { maxWidth: "450px", children: [(0, jsx_runtime_1.jsx)(themes_1.AlertDialog.Title, { children: title }), (0, jsx_runtime_1.jsx)(themes_1.AlertDialog.Description, { size: "2", children: des }), (0, jsx_runtime_1.jsxs)(themes_1.Flex, { gap: "3", mt: "4", justify: "end", children: [(0, jsx_runtime_1.jsx)(themes_1.AlertDialog.Cancel, { children: (0, jsx_runtime_1.jsx)(themes_1.Button, { variant: "soft", color: "gray", children: "Cancel" }) }), (0, jsx_runtime_1.jsx)(themes_1.AlertDialog.Action, { children: (0, jsx_runtime_1.jsx)(themes_1.Button, { variant: "solid", color: "red", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                                            setPending(true);
                                            yield fn();
                                            setPending(false);
                                        }), children: "Continue" }) })] })] })] }) }));
};
exports.default = AppAlertDialog;
