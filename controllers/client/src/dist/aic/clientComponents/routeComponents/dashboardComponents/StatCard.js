import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiCreditCard } from "react-icons/fi";
const StatCard = ({ color = "one", icon, title = 'Card Title', value = 0 }) => {
    const statCardClasses = `stat-card-${color} w-[300px] h-[200px] rounded-2xl p-7 flex flex-col gap-5 z-[1] relative transition-all`;
    const textClasses = `text-[22px] text-black`;
    return (_jsxs("div", { className: statCardClasses, children: [!icon ? _jsx(FiCreditCard, { size: "30" }) : icon, _jsx("p", { className: textClasses, children: title }), _jsx("p", { className: textClasses, children: value })] }));
};
export default StatCard;
