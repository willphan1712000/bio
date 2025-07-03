import { $$ } from "../client/src/Web-Development/W";
import '@willphan1712000/w/dist/index.css'
import "@radix-ui/themes/styles.css";
import Container from "./clientComponents/Container";


$(document).ready(function() {
    const container = document.getElementById("container")
    if(!container) return
    $$("#container", <Container />).reactMounting()
})