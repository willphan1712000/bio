import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import SaveTemplate from '../Save/SaveTemplate';
const Save = () => {
    return ReactDOM.createPortal(_jsx(SaveTemplate, {}), document.getElementById("save"));
};
export default Save;
