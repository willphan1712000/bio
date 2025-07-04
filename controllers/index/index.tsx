import { $$ } from "../client/src/Web-Development/W";
import '@willphan1712000/w/dist/index.css'
import "@radix-ui/themes/styles.css";
import App from "./clientComponents/App";
import { Theme } from "@radix-ui/themes";


$(document).ready(function() {
    const container = document.getElementById("container")
    if(!container) return
    $$("#container", <Theme radius="full"><App /></Theme>).reactMounting()
})