var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { HashLoader } from 'react-spinners';
import AppToaster from '../../../../client/clientComponents/AppToaster';
import useThemeContext from '../../../../client/clientComponents/context/theme';
import apiPricing from '../../api/pricing';
import { PricingContext } from './context';
import MultiSelect from './multiSelect/MultiSelect';
import useAppQuery from '../../../../client/hooks/useAppQuery';
import useAppEffect from '../../../../client/hooks/useAppEffect';
import useAppMutation from '../../../../client/hooks/useAppMutation';
const PricingModel = () => {
    const theme = useThemeContext();
    const containerClasses = `${theme.classes.border} md:w-fit w-full p-10 rounded-[30px] flex flex-col items-center md:items-start my-5`;
    const [pricing, setPricing] = useState(undefined);
    const { isPending, data: pricingQuery, error } = useAppQuery("pricing", apiPricing.get);
    const { mutateAsync: pricingUpdate } = useAppMutation("pricing", apiPricing.post);
    useAppEffect(error);
    useEffect(() => {
        if (!isPending && pricingQuery) {
            setPricing(pricingQuery);
        }
    }, [pricingQuery]);
    const handleUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield pricingUpdate(pricing);
        if (!res) {
            return toast(_jsx(AppToaster, { message: error === null || error === void 0 ? void 0 : error.message }));
        }
        toast(_jsx(AppToaster, { status: true, message: "Update successfully" }));
    });
    return (_jsx(_Fragment, { children: _jsx(PricingContext.Provider, { value: {
                state: pricing,
                setState: setPricing
            }, children: _jsxs("div", { className: containerClasses, children: [isPending ? _jsx(HashLoader, {}) : _jsx(MultiSelect, {}), _jsx("div", { className: 'my-5 bg-white p-[1px] rounded-full w-fit', children: _jsx(Button, { size: "3", onClick: handleUpdate, children: "Update" }) })] }) }) }));
};
export default PricingModel;
