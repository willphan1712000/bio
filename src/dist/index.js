import restore from "./module/pages/restore";
import signupPage from "./module/pages/signup";
import aic from "./module/pages/aic";
import template from "./module/pages/template";
$(document).ready(function () {
    switch (type) {
        case 'index':
            break;
        case 'admin':
            break;
        case 'signup':
            signupPage();
            break;
        case 'signin':
            break;
        case 'aic':
            aic();
            break;
        case 'forgot':
            break;
        case 'forgotUsername':
            break;
        case 'resetPass':
            break;
        case 'restore':
            restore(props);
            break;
        case 'template':
            template(props);
            break;
        default:
            break;
    }
});
