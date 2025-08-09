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
import { BeatLoader } from "react-spinners";
const Info = () => {
    const { isPending, data: companyInfo } = useQuery({
        queryKey: ['companyInfo'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield apiCompanyInfo.get(); })
    });
    const allinclicksUrl = companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ")[0];
    if (isPending)
        return _jsx(BeatLoader, {});
    return (_jsxs("div", { className: 'flex flex-[2] flex-col items-start text-white text-[16px]', children: [_jsx("p", { className: 'text-[20px]', children: "Contact Us" }), _jsxs("p", { children: ["Facetime: ", _jsx("a", { href: `facetime-audio:${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.email}`, children: companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.phoneNumber })] }), _jsxs("p", { children: ["Email: ", _jsx("a", { href: `mailto:${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.email}`, children: companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.email })] }), _jsxs("p", { children: ["Address: ", _jsx("a", { target: "_blank", href: `https://google.com/maps?q=${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.address}`, children: companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.address })] }), _jsxs("p", { children: ["Website: ", _jsx("a", { target: "_blank", href: `${allinclicksUrl}`, children: allinclicksUrl })] })] }));
};
export default Info;
