"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = signupPage;
const W_1 = require("../../Web-Development/W");
const WW_1 = require("../../Web-Development/WW");
function signupPage(api) {
    (0, W_1.$$)("#password").passShowHide().run();
    (0, W_1.$$)(".passRequirements", "dropdown", undefined).toggle().default();
    (0, WW_1.$$$)({
        username: "#username",
        password: "#password",
        email: "#email",
        error: ".signupChild__error",
        checkbox: "#terms",
        register: ".signupChild__confirm"
    }, api, {
        before: ".signupChild",
        after: ".signupSuccess",
        beforeClass: "inactive",
        afterClass: "active",
    }).signup();
}
