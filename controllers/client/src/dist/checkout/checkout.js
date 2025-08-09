import { jsx as _jsx } from "react/jsx-runtime";
import { $$ } from "../client/src/Web-Development/W";
import App from "./clientComponents/App";
$(document).ready(function () {
    $$("#checkout", _jsx(App, {})).reactMounting();
});
