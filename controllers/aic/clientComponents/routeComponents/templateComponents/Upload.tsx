import { Button } from '@radix-ui/themes'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { BarLoader } from 'react-spinners'
import AppToaster from '../../../../client/clientComponents/AppToaster'
import useThemeContext from '../../../../client/clientComponents/context/theme'
import apiTemplate from '../../api/template'
import UploadArea from './UploadArea'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const Upload = () => {
    const theme = useThemeContext()
    const containerClasses = `${theme.classes.border} md:w-fit w-full p-10 rounded-[30px] flex flex-col items-center md:items-start my-5`
    const [thumbnail, setThumbnail] = useState<File>()
    const [template, setTemplate] = useState<File>()
    const [annotation, setAnnotation] = useState<File>()
    const [isUploading, setUploading] = useState<boolean>(false)

    const resetFiles = () => {
        setThumbnail(undefined)
        setTemplate(undefined)
        setAnnotation(undefined)
    }

    const queryClient = useQueryClient()
    const { mutateAsync: uploadTemplate } = useMutation({
        mutationFn: apiTemplate.uploadTemplate,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["templates"] })
        }
    })

    const handleUpload = async () => {
        if(!thumbnail || !template || !annotation) {
            toast(
                <AppToaster message='Please upload all required files'/>
            );
            return
        }

        setUploading(true)
        const data = await uploadTemplate({
            thumbnail,
            template,
            annotation
        })

        resetFiles()

        if(!data.success) {
            console.log(data.error)
            toast(<AppToaster message={data.error}/>)
        } else {
            if(!data.data.success) {
                toast(<AppToaster message={data.data.error} />)
            } else {
                toast(<AppToaster message={data.data.data.msg} status={true} />);
            }
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
                        <Button disabled={isUploading} size="3" radius='full' onClick={handleUpload}>{isUploading ? <BarLoader />: 'Upload'}</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upload
