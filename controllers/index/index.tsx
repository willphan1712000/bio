import { $$ } from "../client/src/Web-Development/W";
import AppScrollTrigger from "./clientComponents/ScrollTrigger/AppScrollTrigger";

$(document).ready(function() {
    const showcase = document.getElementById("showcase")
    if(!showcase) {
        console.log("Not Rendered")
    }
    index();
})

function index() {
    $$("#showcase", <AppScrollTrigger />).reactMounting()
}