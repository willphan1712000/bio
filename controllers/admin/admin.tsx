import Swiper from "swiper";
import { $$ } from "../client/src/Web-Development/W";
import { username } from "./clientComponents/AdminContext";
import { fetchData, getCSS, getResource } from "./clientComponents/FetchData";
import Setting from "./clientComponents/Setting/Setting";

interface Props {
    [key: string]: string
}

$(document).ready(function() {
    admin();
})

export default async function admin() {
    // get username
    const user = username()

    // Get information from database
    const list = await fetchData(user)

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
}