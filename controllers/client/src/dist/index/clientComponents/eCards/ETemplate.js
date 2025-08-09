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
import clientConfig from '../../clientConfig';
import Separator from '../Separator';
import Template from '../Template';
import Effect from './Effect';
import Slider from './Slider';
import eBusinessCards from '../api/ecard';
import { useQuery } from '@tanstack/react-query';
import { BeatLoader } from 'react-spinners';
const ETemplate = () => {
    const { isPending, data: products } = useQuery({
        queryKey: ['eBusinessCards'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield eBusinessCards.getEBusinessCards(); })
    });
    return (_jsxs("div", { className: 'w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden', children: [_jsx("p", { className: 'text-[20px] pb-5', children: clientConfig.templates.basic.heading }), _jsx("div", { id: "basic_templates" }), isPending ? _jsx(BeatLoader, {}) : _jsx(Slider, { products: products }), _jsx(Separator, { thickness: '4' }), _jsx("p", { className: 'text-[25px] pb-5', children: clientConfig.templates.pro.heading }), _jsx("div", { id: "pro_templates" }), isPending ? _jsx(BeatLoader, {}) : _jsx(Effect, { products: products }), _jsx("div", { className: 'p-10', children: _jsx(Template, { content: "Explore More Template" }) })] }));
};
export default ETemplate;
