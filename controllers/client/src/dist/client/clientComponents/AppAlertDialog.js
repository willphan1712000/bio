var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import { BarLoader } from 'react-spinners';
const AppAlertDialog = ({ buttonTitle, title, des, fn }) => {
    const [isPending, setPending] = useState(false);
    return (_jsx(Flex, { children: _jsxs(AlertDialog.Root, { children: [_jsx(AlertDialog.Trigger, { children: _jsx(Button, { color: "red", disabled: isPending, children: isPending ? _jsx(BarLoader, { width: 60 }) : buttonTitle }) }), _jsxs(AlertDialog.Content, { maxWidth: "450px", children: [_jsx(AlertDialog.Title, { children: title }), _jsx(AlertDialog.Description, { size: "2", children: des }), _jsxs(Flex, { gap: "3", mt: "4", justify: "end", children: [_jsx(AlertDialog.Cancel, { children: _jsx(Button, { variant: "soft", color: "gray", children: "Cancel" }) }), _jsx(AlertDialog.Action, { children: _jsx(Button, { variant: "solid", color: "red", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                                            setPending(true);
                                            yield fn();
                                            setPending(false);
                                        }), children: "Continue" }) })] })] })] }) }));
};
export default AppAlertDialog;
