import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaRegUser } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { SiMoneygram } from "react-icons/si";
import { DotLoader } from "react-spinners";
import apiDashboard from '../../api/dashboard';
import StatCard from './StatCard';
import useAppEffect from "../../../../client/hooks/useAppEffect";
import useAppQuery from "../../../../client/hooks/useAppQuery";
const StatCards = () => {
    const { isPending, data: analyticsInfo, error } = useAppQuery('analytics', apiDashboard.analytics);
    useAppEffect(error);
    if (isPending)
        return _jsx(DotLoader, {});
    return (_jsxs("div", { className: "flex flex-col items-center md:flex-row gap-5 py-10", children: [_jsx(StatCard, { color: 'one', icon: _jsx(FaRegUser, { size: "30" }), title: "Total number of users", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfUsers }), _jsx(StatCard, { color: "two", icon: _jsx(SiMoneygram, { size: "30" }), title: "Pro templates", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfTemplates }), _jsx(StatCard, { color: "five", icon: _jsx(GrMoney, { size: "30" }), title: "Total subscription", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfSubscriptions })] }));
};
export default StatCards;
