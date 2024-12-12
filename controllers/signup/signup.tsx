import { StringMappingType } from "typescript";
import { $$ } from "../client/src/Web-Development/W"
import { $$$ } from "../client/src/Web-Development/WW"

type api = {
    signup: string,
    userExist: string,
    validEmail: string,
    validPassword: string
}

export default function signupPage(api : api) {
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