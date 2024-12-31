import Delete from "../admin/clientComponents/Delete/Delete";
import Response from "../client/src/Web-Development/components/Response";
import { $$ } from "../client/src/Web-Development/W";
import { $$$ } from "../client/src/Web-Development/WW";
import InfoArea from "./clientComponents/InfoArea";

declare var username: string
declare var defaultImgPath: string
declare var regexMap: {
    [key: string]: string
}
declare var message: {
    [key: string]: string
}

$(document).ready(function() {
    adminPage()
})

async function adminPage() {
    // Get information from database
    const data = await $$$("/data/api/info/GET.php", {
        username
    }).api().post() as Response

    if(!data.success) {
        return
    }

    const list = data.data
    if(!list) {
        return
    }
    list.username = username

    $$("#info__wrapper", <InfoArea data={list} extraData={{defaultImgPath, regexMap}}/>).reactMounting() // Mount React components

    $$("#delete", <Delete message={message}/>).reactMounting() // Mount React component
}