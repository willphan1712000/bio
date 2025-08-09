import { jsx as _jsx } from "react/jsx-runtime";
import { AdminContext, AdminCssContext, AdminSettingContext, AdminRegexContext, AdminLabelContext, AdminIconContext } from './AdminContext';
const AdminContextProvider = ({ data, css, regex, label, setting, children, iconMap }) => {
    return (_jsx(AdminContext.Provider, { value: data, children: _jsx(AdminCssContext.Provider, { value: css, children: _jsx(AdminSettingContext.Provider, { value: setting, children: _jsx(AdminRegexContext.Provider, { value: regex, children: _jsx(AdminLabelContext.Provider, { value: label, children: _jsx(AdminIconContext.Provider, { value: iconMap, children: children }) }) }) }) }) }));
};
export default AdminContextProvider;
