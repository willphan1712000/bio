import { username } from "../admin/clientComponents/AdminContext";
import Delete from "../admin/clientComponents/Delete/Delete";
import Response from "../client/src/Web-Development/components/Response";
import { $$ } from "../client/src/Web-Development/W";
import { $$$ } from "../client/src/Web-Development/WW";
import InfoArea from "./clientComponents/InfoArea";

type Resource = {
    regexMap: {
        [key: string]: string
    },
    labelMap: {
        [key: string]: string
    },
    defaultImg: string,
    deleteWarning: {
        [key: string]: string
    }
}

$(document).ready(function() {
    adminPage()
})

async function adminPage() {
    // Get username
    const user = username()
    // Get information from database
    const data = await $$$("/data/api/info/GET.php", {
        username: user
    }).api().post() as Response

    // If fatching info fails, return
    if(!data.success) {
        return
    }

    const list = data.data // Get data from fetched data
    if(!list) {
        return
    }
    list!.username = user // add username property to data list

    // Get needed resource
    const resource = await $$$("/data/api/user/GETResource.php", {
        username: user
    }).api().post() as Response

    const resourceList = resource.data as Resource
    if(!resourceList) {
        return
    }

    $$("#info__wrapper", <InfoArea data={list} extraData={{defaultImgPath: resourceList.defaultImg, regexMap: resourceList.regexMap, labelMap: resourceList.labelMap}}/>).reactMounting() // Mount React components

    $$("#delete", <Delete message={resourceList.deleteWarning}/>).reactMounting() // Mount React component
}