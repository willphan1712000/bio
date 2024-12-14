import { $$ } from "../client/src/Web-Development/W"
import { $$$ } from "../client/src/Web-Development/WW"

$(document).ready(function() {
    signupPage()
})

function signupPage() {
    $$(".passRequirements", "dropdown", "").toggle().default()
    $$("#password").passShowHide().run();
    $$$({
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