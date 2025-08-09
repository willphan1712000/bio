import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from './Layout';
import Upload from './templateComponents/Upload';
import TemplateRecords from './templateComponents/TemplateRecords';
const Template = () => {
    return (_jsxs(Layout, { heading: "Template Management", children: [_jsx(Upload, {}), _jsx(TemplateRecords, {})] }));
};
export default Template;
