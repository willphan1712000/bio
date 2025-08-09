var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { $$$ } from "../../../client/src/Web-Development/WW";
import handleAdminContext, { handleAdminCssContext, handleAdminSaveContext } from "../AdminContext";
import { pushCSS, pushData } from "../FetchData";
export default function Save() {
    const data = handleAdminContext();
    const css = handleAdminCssContext();
    const [state, dispatch] = handleAdminSaveContext();
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            dispatch({ type: 'submit' });
            dispatch({ type: 'disable' });
            dispatch({ type: 'message', value: 'Uploading...' });
            const listOfPromises = [() => pushData(data)];
            if (css !== null) {
                listOfPromises.push(() => pushCSS(css));
            }
            const [error, result] = yield $$$().wPromise().handlePromiseAllSettledResponse(listOfPromises);
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
    return (_jsx("button", { disabled: state.disabled, className: 'size-full absolute top-0 left-0', onClick: e => handleSubmit(e) }));
}
