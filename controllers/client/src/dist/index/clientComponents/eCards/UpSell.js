import { jsx as _jsx } from "react/jsx-runtime";
import clientConfig from '../../clientConfig';
const pro_products = clientConfig.cards.professional;
const UpSell = () => {
    return (_jsx("div", { className: 'w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden', children: _jsx("p", { className: 'text-[20px] pb-5', children: "Most Popular" }) }));
};
export default UpSell;
