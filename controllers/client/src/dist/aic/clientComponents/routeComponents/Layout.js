import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useThemeContext from '../../../client/clientComponents/context/theme';
const Layout = ({ children, heading }) => {
    const theme = useThemeContext();
    const headingClasses = `${theme.classes.text} bg-inherit pt-[100px] p-5 w-full md:w-fit md:p-10`;
    return (_jsxs("div", { className: headingClasses, children: [_jsx("h1", { className: "text-[2rem] p-5", children: heading }), children] }));
};
export default Layout;
