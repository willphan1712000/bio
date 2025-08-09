import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DotLoader } from 'react-spinners';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useThemeContext from '../../../../client/clientComponents/context/theme';
import apiDashboard from '../../api/dashboard';
import useAppEffect from '../../../../client/hooks/useAppEffect';
import useAppQuery from '../../../../client/hooks/useAppQuery';
const data = [{ name: 'Facebook', uv: 400, pv: 2400, amt: 2400 }, { name: 'Instagram', uv: 200, pv: 2400, amt: 2400 }, { name: 'Tiktok', uv: 890, pv: 2400, amt: 2400 }];
const AppLineChart = () => {
    const theme = useThemeContext();
    const classes = `${theme.classes.container} ${theme.classes.border} p-10 rounded-3xl shadow-xl w-full md:w-fit overflow-auto`;
    const { isPending, data: socialInfo, error } = useAppQuery('analyticsSocial', apiDashboard.social);
    useAppEffect(error);
    if (isPending)
        return _jsx(DotLoader, {});
    return (_jsx("div", { className: classes, children: _jsxs(LineChart, { width: 1500, height: 500, data: socialInfo, children: [_jsx(CartesianGrid, { stroke: "#aaa", strokeDasharray: "5 5" }), _jsx(Line, { dataKey: "value", type: "monotone", strokeWidth: 2, name: 'Number of links created' }), _jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Legend, { align: 'left' }), _jsx(Tooltip, {})] }) }));
};
export default AppLineChart;
