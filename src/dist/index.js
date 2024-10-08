import restore from "./module/pages/restore";
import signupPage from "./module/pages/signup";
import aic from "./module/pages/aic";
import template from "./module/pages/template";
import bioPage from "./module/pages/bioPage";
import adminPage from "./module/pages/adminPage";
$(document).ready(function () {
    switch (type) {
        case 'index':
            bioPage(props);
            break;
        case 'admin':
            adminPage(props);
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
