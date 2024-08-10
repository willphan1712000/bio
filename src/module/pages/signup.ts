import { $$ } from "../Web-Development/W"
import { $$$ } from "../Web-Development/WW"

export default function signupPage() {
    $$("#password").passShowHide().run()
    $$(".passRequirements", "dropdown").toggle().run()
    $$$("#username", "#email", "#password", ".signupChild__error", ".signupChild__confirm", {
        signup: "/data/signup.php",
        create: "/data/api/createAccount.php",
    }).signup().run()
}