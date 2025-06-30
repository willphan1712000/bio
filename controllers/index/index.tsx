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

    const navBtn = document.getElementById("navBtn")
    const navBtnClose = document.getElementById("navBtnClose")
    const nav = document.getElementById("nav")
    if(!navBtn || !nav || !navBtnClose) return
    navOpenFunc(navBtn, navBtnClose, nav)
})

/**
 * This function helps open and close the navbar with button and click outside to close
 */
function navOpenFunc(navBtn: HTMLElement, navBtnClose: HTMLElement, nav: HTMLElement) {
    navBtn.addEventListener('click', () => {
        if(nav.classList.contains("invisible")) {
            open()
        } else {
            close()
        }
    })

    navBtnClose.addEventListener('click', () => {
        if(nav.classList.contains("invisible")) {
            close()
        } else {
            open()
        }
    })

    window.addEventListener('click', e => {
        const target = e.target as HTMLElement
        if(navBtn.contains(target) || navBtn === target) return

        const isClickInside = nav.contains(target) || target === nav

        if(!isClickInside) {
            close()
        }
    })

    function open() {
        nav.classList.remove('invisible')
        navBtnClose.classList.remove('hidden')
        navBtn.classList.add('hidden')
    }

    function close() {
        nav.classList.add('invisible')
        navBtnClose.classList.add('hidden')
        navBtn.classList.remove('hidden')
    }
}