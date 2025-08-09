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
import { useQuery } from "@tanstack/react-query";
import apiCompanyInfo from '../api/companyInfo';
import { BeatLoader } from "react-spinners";
const Copyright = () => {
    const { isPending, data: companyInfo } = useQuery({
        queryKey: ['companyInfo'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield apiCompanyInfo.get(); })
    });
    const copyright = `© ${new Date().getFullYear()} Allinclicks. All rights reserved.`;
    const allinclicksUrl = companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ")[0];
    return (_jsxs("div", { className: "relative flex flex-col justify-center items-center w-full text-white", children: [_jsx("p", { children: copyright }), isPending ? _jsx(BeatLoader, {}) : (_jsxs("div", { className: "flex flex-row gap-3", children: [_jsx("a", { href: `${allinclicksUrl}/privacy`, target: "", children: "Privacy Policy" }), _jsx("span", { children: " | " }), _jsx("a", { href: `${allinclicksUrl}/terms`, target: "", children: "Terms of Use" })] }))] }));
};
export default Copyright;
