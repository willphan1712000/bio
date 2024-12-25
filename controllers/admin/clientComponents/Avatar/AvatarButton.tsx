import { useEffect, useRef } from 'react'
import { FaTrash } from 'react-icons/fa'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { MdEdit } from "react-icons/md"
import { RiResetLeftFill } from "react-icons/ri"
import { $$ } from '../../../client/src/Web-Development/W'
import { handleAdminImageContext } from '../AdminContext'
import AvatarImg from './AvatarImg'

const AvatarButton = () => {
    const [state, dispatch] = handleAdminImageContext()
    const className = 'absolute flex flex-row bg-[#f0f0f0] p-[5px] rounded-[10px] cursor-pointer'

    const uploadRef = useRef<HTMLDivElement>(null)

    function handleEdit() {
        dispatch({type: 'upload'})
    }

    useEffect(() => {
        $$(uploadRef.current).uploadFile(e => {
            dispatch({type: 'upload'})
            // dispatch({type: 'edit'})
            dispatch({type: 'preview', value: e})
        })
    }, [])
    
  return (
    <div className="avatar__wrapper relative h-auto w-auto">
        <div ref={uploadRef} className={`upload bottom-[-10px] right-[-10px] ${className}`}><IoCloudUploadOutline size="23" className="mr-[5px]"/>Upload</div>
        {state.isEdit && (<>
            <div className={`upload bottom-0 left-0 ${className}`}><RiResetLeftFill size="23"/></div>
            <div onClick={() => handleEdit()} className={`upload top-0 right-0 ${className}`}><MdEdit size="23"/></div>
        </>)}
        <div className={`delete left-0 top-0 bg-[red] text-white ${className}`}><FaTrash size="25"/></div>

        <AvatarImg />
    </div>
  )
}

export default AvatarButton
