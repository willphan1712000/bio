import { $$ } from "../client/src/Web-Development/W";
import App from "./clientComponents/App";
import "@radix-ui/themes/styles.css";
import authStorage from '../client/auth/storage'

$(document).ready(function() {
    const user = authStorage.getUser() as {
        username: string,
        exp: number,
        iat: number
    }

    if(!user || user.username !== 'Allinclicks') {
        return window.location.href = '/@signin'
    }
    
    $$("#admin_container", <App />).reactMounting()
})