"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const W_1 = require("../client/src/Web-Development/W");
const WW_1 = require("../client/src/Web-Development/WW");
$(document).ready(function () {
    signupPage();
});
function signupPage() {
    (0, W_1.$$)(".passRequirements", "dropdown", "").toggle().default();
    (0, W_1.$$)("#password").passShowHide().run();
    (0, WW_1.$$$)({
        username: "#username",
        password: "#password",
        email: "#email",
        error: ".signupChild__error",
        checkbox: "#terms",
        register: ".signupChild__confirm"
    }, {
        signup: "/data/api/user/POST.php",
        userExist: "/data/api/user/validation/Username.php",
        validEmail: "/data/api/user/validation/Email.php",
        validPassword: "/data/api/user/validation/Password.php",
    }, {
        before: ".signupChild",
        after: ".signupSuccess",
        beforeClass: "inactive",
        afterClass: "active",
    }).signup();
}
