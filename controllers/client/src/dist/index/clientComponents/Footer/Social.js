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
import { useQuery } from '@tanstack/react-query';
import apiCompanyInfo from '../api/companyInfo';
import { BeatLoader } from 'react-spinners';
const Social = () => {
    const { isPending, data: companyInfo } = useQuery({
        queryKey: ['companyInfo'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield apiCompanyInfo.get(); })
    });
    const style = 'border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center';
    const urlParts = companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ");
    if (isPending)
        return _jsx(BeatLoader, {});
    return (_jsxs("div", { className: 'text-white flex flex-row justify-center items-center gap-5 text-[20px] py-[30px]', children: [_jsx("div", { title: "Facebook", children: _jsx("a", { target: "_blank", className: style, href: `${urlParts[1]}`, children: _jsx("i", { className: "fa-brands fa-facebook" }) }) }), _jsx("div", { title: "Instagram", children: _jsx("a", { className: style, target: "_blank", href: `${urlParts[2]}`, children: _jsx("i", { className: "fa-brands fa-instagram" }) }) }), _jsx("div", { title: "Messenger", children: _jsx("a", { className: style, target: "_blank", href: `${urlParts[3]}`, children: _jsx("i", { className: "fa-brands fa-facebook-messenger" }) }) }), _jsx("div", { title: "Phone", children: _jsx("a", { className: style, href: `tel:${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.phoneNumber}`, children: _jsx("i", { className: "fa-solid fa-phone" }) }) }), _jsx("div", { title: "Facetime Audio", children: _jsx("a", { className: style, href: `facetime-audio:${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.email}`, children: _jsx("i", { className: "fa-brands fa-apple" }) }) })] }));
};
export default Social;
