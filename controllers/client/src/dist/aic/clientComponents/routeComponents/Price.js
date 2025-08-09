import { jsx as _jsx } from "react/jsx-runtime";
import Layout from './Layout';
import PricingModel from './pricingComponents/PricingModel';
const Price = () => {
    return (_jsx(Layout, { heading: 'Pricing Management', children: _jsx(PricingModel, {}) }));
};
export default Price;
