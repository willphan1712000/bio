import Response from "../../client/src/Web-Development/components/Response";
import { $$$ } from "../../client/src/Web-Development/WW";

interface Data {
    [key: string]: string
}

export async function fetchData(username: string): Promise<Data> {
    const data = await $$$("/data/api/info/GET.php", {
        username
    }).api().post() as Response

    if(!data.success) {
        throw new Error(data.error)
    }

    const dataList = data.data

    if(!dataList) {
        throw new Error('Data is undefined')
    }

    return dataList
}

export async function getResource(username: string): Promise<Resource> {
    const resource = await $$$("/data/api/user/GETResource.php", {
        username
    }).api().post() as Response

    if(!resource.success) {
        throw new Error(resource.error)
    }

    const resourceList = resource.data

    if(!resourceList) {
        throw new Error('Resource is undefined')
    }

    return resourceList
}

export async function getCSS(username: string): Promise<Data> {
    const css = await $$$("/data/api/style/GET.php", {
        username
    }).api().post() as Response;

    if(!css.success) {
        throw new Error(css.error)
    }

    const cssList = css.data

    if(!cssList) {
        throw new Error("Css is undefined")
    }

    return cssList
}

export type Resource = {
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