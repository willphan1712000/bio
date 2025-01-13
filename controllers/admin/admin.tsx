import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Swiper from "swiper";
import { $$ } from "../client/src/Web-Development/W";
import { username } from "./clientComponents/AdminContext";
import { fetchData, getCSS, getResource } from "./clientComponents/FetchData";
import Setting from "./clientComponents/Setting/Setting";

interface Props {
    [key: string]: string
}

declare var props: Props

$(document).ready(function() {
    admin(props);
})

export default async function admin(props: Props) {
    // get username
    const user = username()

    // Get information from database
    const list = await fetchData(user)
    list!.username = user // add username property to data list

    // Get resource needed
    const resource = await getResource(user)
    
    // Get needed css
    const css = await getCSS(user)

    $$("#setting", <Setting data={list} css={css} resource={resource}/>).reactMounting() // Mount setting to html

    // swiper for front card and back card
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false
    })

    // Save PDF
    $("#setting .image").click(async ()=>{   
        const front = document.querySelector("#template-container") as HTMLElement;
        const front_d = front.getBoundingClientRect()
        html2canvas(front, {
            width: front_d.width,
            height: front_d.height,
            x: 0,
            y: 0,
            useCORS: true,
        }).then(canvas => {
            const r = canvas.width / canvas.height;
            const width = 200;
            const height = width / r;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [width, height]
            });
            const img = document.createElement("img");
            img.src = canvas.toDataURL("image/png");
            doc.addImage(img, "png", 0, 0, width, height);
            doc.save("front.pdf");
        })

        const back = document.querySelector(".card-back-container") as HTMLElement;
        const back_d = back.getBoundingClientRect()
        html2canvas(back, {
            width: back_d.width,
            height: back_d.height,
            x: 0,
            y: 0,
            useCORS: true,
        }).then(canvas => {
            const r = canvas.width / canvas.height;
            const width = 200;
            const height = width / r;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [width, height]
            });
            const img = document.createElement("img");
            img.src = canvas.toDataURL("image/png");
            doc.addImage(img, "png", 0, 0, width, height);
            doc.save("img/back.pdf");
        })
    })
    
    // Setting operations
    // const settingUI = new SettingUI({
    //     css: props['css'],
    //     imgPath: props['imgPath'],
    //     username: props['username'],
    //     imgName: props['imgName'],
    // })
}