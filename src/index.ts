import restore from "./module/pages/restore"
import signupPage from "./module/pages/signup"
import aic from "./module/pages/aic"
import template from "./module/pages/template";
import bioPage from "./module/pages/bioPage";

declare var type: string;
declare var props: {
    [key: string]: string
}

$(document).ready(function() {
    
    // Deployment
    switch(type) {
        case 'index':
            bioPage(props)
            break
        case 'admin':
            // adminPage()
            break
        case 'signup':
            signupPage();
            break
        case 'signin':
            // signinPage()
            break
        case 'aic':
            aic();
            break
        case 'forgot':
            // forgot()
            break
        case 'forgotUsername':
            // forgotUsername()
            break
        case 'resetPass':
            // resetPass()
            break
        case 'restore':
            restore(props);
            break
        case 'template':
            template(props)
            break
        default:
            break
    }
})