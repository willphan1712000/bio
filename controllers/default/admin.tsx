import { username } from "../admin/clientComponents/AdminContext";
import Delete from "../admin/clientComponents/Delete/Delete";
import { fetchData, getResource, Resource } from "../admin/clientComponents/FetchData";
import { $$ } from "../client/src/Web-Development/W";
import InfoArea from "./clientComponents/InfoArea";

$(document).ready(function() {
    adminPage()
})

async function adminPage() {
    // Get username
    const user = username()

    // Get information from database
    const list = await fetchData(user)
    list!.username = user // add username property to data list

    // Get needed resource
    const resource = await getResource(user)

    $$("#info__wrapper", <InfoArea data={list} extraData={{defaultImgPath: resource.defaultImg, regexMap: resource.regexMap, labelMap: resource.labelMap}}/>).reactMounting() // Mount React components

    $$("#delete", <Delete message={resource.deleteWarning}/>).reactMounting() // Mount React component
}