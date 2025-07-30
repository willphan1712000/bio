import apiClient, { Response } from "../../../client/api/apiClient";

interface Files {
    thumbnail: File,
    template: File,
    annotation: File
}

async function uploadTemplate(files: Files) {
    const formData = new FormData()
    formData.append('thumbnail', files.thumbnail)
    formData.append('template', files.template)
    formData.append('annotation', files.annotation)

    const res = await apiClient.post('/api/template/manage', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        } 
    })
    const data = res.data as Response<any>
    return data
}

export default {
    uploadTemplate
}