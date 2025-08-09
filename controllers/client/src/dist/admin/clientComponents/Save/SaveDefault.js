import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from 'react';
import { ClipLoader } from 'react-spinners';
import { AdminSaveContext } from '../AdminContext';
import reducer from './Reducer';
import Save from './Save';
export default function SaveDefault() {
    const [state, dispatch] = useReducer(reducer, {
        isSubmitting: false,
        isShow: false,
        disabled: false,
        default: 'Save',
        msg: 'Save'
    });
    return (_jsx(AdminSaveContext.Provider, { value: [state, dispatch], children: _jsx("div", { className: 'flex justify-center items-center sticky bottom-[1.5rem] z-[2] m-[20px]', children: _jsx("div", { className: 'min-w-[70%]', children: _jsxs("div", { className: `saveDefaultButtonStyle ${state.isShow ? 'saveDefaultButtonGlowingStyle' : ''}`, children: [_jsxs("span", { className: "flex items-center text-center", children: [_jsx("p", { className: 'mx-[10px]', children: state.msg }), " ", _jsx(ClipLoader, { size: "20px", color: '#000', loading: state.isSubmitting })] }), _jsx(Save, {})] }) }) }) }));
}
