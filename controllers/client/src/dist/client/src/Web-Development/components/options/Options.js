import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
export { default as Color } from './types/ColorType';
export { default as Font } from './types/FontType';
const Options = ({ keyValue, Face, face, list, cb }) => {
    useEffect(() => {
        var _a;
        (_a = document.querySelector(`#${keyValue}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', e => {
            const ele = e.target;
            if (ele.matches(`[data-key=${keyValue}]`)) {
                cb($(ele).data('value'));
            }
        });
    }, []);
    return (_jsx("div", { id: keyValue, className: "[&::-webkit-scrollbar]:hidden flex flex-row flex-1 items-center bg-white p-[10px] rounded-[20px] z-[1] overflow-y-hidden overflow-x-auto w-full", style: { scrollbarWidth: 'none' }, children: list.map(item => _jsx("div", { "data-value": item, "data-key": keyValue, className: "overflow-hidden cursor-pointer flex flex-shrink-0 aspect-square w-[50px] h-[50px] mr-[5px] rounded-[50%] text-[25px] bg-[#f0f0f0] border-black border-[1px]", children: _jsx(Face, { face: face, value: item }) }, item)) }));
};
export default Options;
