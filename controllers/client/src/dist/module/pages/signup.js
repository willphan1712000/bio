import { $$ } from "../Web-Development/W";
import { $$$ } from "../Web-Development/WW";
export default function signupPage(api) {
    $$("#password").passShowHide().run();
    $$(".passRequirements", "dropdown").toggle().run();
    $$$({
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
