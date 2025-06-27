import { $$ } from "../client/src/Web-Development/W";
import Footer from "./clientComponents/Footer/Footer";
import Heading from "./clientComponents/Heading/Heading";
import AppScrollTrigger from "./clientComponents/ScrollTrigger/AppScrollTrigger";
import Template from "./clientComponents/Templates/Template";

$(document).ready(function() {
    const heading = document.getElementById("heading")
    if(!heading) return
    $$("#heading", <Heading />).reactMounting()
    
    const showcase = document.getElementById("showcase")
    if(!showcase) return
    $$("#showcase", <AppScrollTrigger />).reactMounting()
    
    const templates = document.getElementById("templates")
    if(!templates) return
    $$("#templates", <Template />).reactMounting()
    
    const footer = document.getElementById("footer")
    if(!footer) return
    $$("#footer", <Footer />).reactMounting()
})