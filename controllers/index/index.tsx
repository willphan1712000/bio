import { $$ } from "../client/src/Web-Development/W";
import '@willphan1712000/w/dist/index.css'
import App from "./clientComponents/App";

$(document).ready(function() {
    const container = document.getElementById("container")
    if(!container) return
    $$("#container", <App />).reactMounting()
})