import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import useThemeContext from '../../../../client/clientComponents/context/theme'

interface Props {
    state: {
        file?: File,
        setFile: React.Dispatch<React.SetStateAction<File | undefined>>
    }
    title?: string
}

const UploadArea = ({ state, title }: Props) => {
    const { file, setFile } = state
    const theme = useThemeContext()

    const borderClasses = `${theme.classes.border} rounded-3xl p-10 text-center`
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        setFile(file)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    // Returns true if the mimeType matches 'image/*'
    function isImageMimeType(mimeType: string): boolean {
        return /^image\/.+$/.test(mimeType);
    }

    return (
        <div className='px-5 md:w-[300px] w-full flex flex-col items-center'>
            <p className='text-[1.2rem] pt-10 pb-5'>{title}</p>
            <div {...getRootProps()} className='w-full'>
                <input {...getInputProps()} accept="image/*,.xlsx" />
                {
                    isDragActive ? (
                        <div className={`${borderClasses} !border-dashed`}>Drop file here</div>
                    ) : (
                        <div className={`${borderClasses} cursor-pointer`}>Click or drop file here</div>
                    )
                }
            </div>
            {file && <p>Name: {file?.name}</p>}
        </div>
    )
}

export default UploadArea
