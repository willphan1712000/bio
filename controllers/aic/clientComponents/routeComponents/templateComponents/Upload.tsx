import { Button } from '@radix-ui/themes'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import useThemeContext from '../../../../client/clientComponents/context/theme'
import apiTemplate from '../../api/template'
import UploadArea from './UploadArea'

const Upload = () => {
    const theme = useThemeContext()
    const containerClasses = `${theme.classes.border} md:w-fit w-full p-10 rounded-[30px] flex flex-col items-center md:items-start`
    const [thumbnail, setThumbnail] = useState<File>()
    const [template, setTemplate] = useState<File>()
    const [annotation, setAnnotation] = useState<File>()
    const [isUploading, setUploading] = useState<boolean>(false)

    const resetFiles = () => {
        setThumbnail(undefined)
        setTemplate(undefined)
        setAnnotation(undefined)
    }

    const handleUpload = async () => {
        if(!thumbnail || !template || !annotation) {
            toast('❌  Please upload all required files');
            return
        }

        setUploading(true)
        const data = await apiTemplate.uploadTemplate({
            thumbnail,
            template,
            annotation
        })

        resetFiles()
        if(!data.success) {
            console.log(data.error)
            toast("❌  Error: open console tab to see more information!")
        } else {
            console.log(data.data)
            toast("✅  Upload successfully")
        }
        
        setUploading(false)
    }

    return (
        <>
            <Toaster />
            <div className={containerClasses}>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <UploadArea title="Upload Thumbnail" state={{file: thumbnail, setFile: setThumbnail}} />
                    <UploadArea title="Upload Template" state={{file: template, setFile: setTemplate}} />
                    <UploadArea title="Upload Annotation" state={{file: annotation, setFile: setAnnotation}} />
                </div>
                <div className='w-fit p-[20px]'>
                    <div className='bg-white p-[1px] rounded-full'>
                        <Button loading={isUploading} size="3" radius='full' onClick={handleUpload}>Upload</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upload
