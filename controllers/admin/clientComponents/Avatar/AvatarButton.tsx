import { useEffect, useRef } from 'react'
import { FaTrash } from 'react-icons/fa'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { $$ } from '../../../client/src/Web-Development/W'
import handleAdminContext, { handleAdminImageContext } from '../AdminContext'
import AvatarImg from './AvatarImg'

const AvatarButton = () => {
    const [state, dispatch] = handleAdminImageContext()
    const data = handleAdminContext()
    const className = 'absolute flex flex-row bg-[#f0f0f0] p-[5px] rounded-[10px] cursor-pointer'
    const uploadRef = useRef<HTMLDivElement>(null)

    function handleDelete() {
      data.image = null
      dispatch({type: 'main', value: '/controllers/client/img/unknown.png'})
    }

    useEffect(() => {
        $$(uploadRef.current).uploadFile(({e}) => {
            dispatch({type: 'upload'})
            dispatch({type: 'preview', value: e})
            $("body").css({
              overflow: "hidden"
            })
        }, 'image/*')
    }, [])
    
  return (
    <div className="avatar__wrapper relative h-auto w-auto">
        <div ref={uploadRef} className={`upload bottom-[-10px] right-[-10px] ${className}`}><IoCloudUploadOutline size="23" className="mr-[5px]"/>Upload</div>
        {state.isDelete && <div onClick={() => handleDelete()} className={`delete left-[-10px] top-0 bg-[red] text-white text-[12px] ${className}`}><FaTrash size="15" className="mr-[5px]"/>Remove </div>}

        <AvatarImg />
    </div>
  )
}

export default AvatarButton
