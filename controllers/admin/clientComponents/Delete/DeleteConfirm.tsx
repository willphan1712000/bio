import { useRef } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import { $$$ } from "../../../client/src/Web-Development/WW"
import Response from "../../../client/src/Web-Development/components/Response"
import { handleAdminDeleteContext } from "../AdminContext"

const DeleteConfirm = () => {
    const [state, dispatch] = handleAdminDeleteContext()
    const deleteMenuRef = useRef<HTMLDivElement>(null)

    function handleCancel(e: React.MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        dispatch({type: 'show'})
        $("body").css({
            overflow: "auto"
        })
    }

    function handleStop(e: React.MouseEvent) {
        e.stopPropagation()
    }

    async function handleDelete(e: React.MouseEvent) {
        e.stopPropagation()
        e.preventDefault()
        dispatch({type: 'disable'})
        dispatch({type: 'delete'})
        dispatch({type: 'msg', value: 'Processing...'})

        // delete api call
        try {
            const r = await $$$("/data/api/user/DELETEHOLD.php", {
                username: state.username
            }).api().post() as Response

            if(r.success) {
                dispatch({type: 'msg', value: 'Done, refresh shortly'})
                dispatch({type: 'delete'})
                setTimeout(() => {
                    window.location.href = "/@signin"
                }, 2000);
            } else {
                dispatch({type: 'msg', value: r.error})
                setTimeout(() => {
                    dispatch({type: 'disable'})
                    dispatch({type: 'delete'})
                    dispatch({type: 'msg', value: 'Delete'})
                }, 2000)
            }
        } catch(error: any) {
            dispatch({type: 'msg', value: error.error})
            setTimeout(() => {
                dispatch({type: 'disable'})
                dispatch({type: 'delete'})
                dispatch({type: 'msg', value: 'Delete'})
            }, 2000)
        }
    }

    if(state.show)
        return (
            <div onClick={(e) => handleCancel(e)} className='z-[99] fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center'>
                <div onClick={e => handleStop(e)} ref={deleteMenuRef} className='rounded-[10px] bg-white max-w-[600px] w-[80%] h-[70%] shadow-2xl flex justify-center items-center flex-col p-[15px]'>
                    <p className="text-center text-[20px] mb-[10px]">{state.message.msg1}</p>
                    <p className="text-center">{state.message.msg2}</p>
                    <p className="text-center">{state.message.msg3}</p>
                    <p className="text-center">{state.message.msg4}</p>
                    <div className="flex flex-row gap-5 mt-5">
                        <button disabled={state.disabled} onClick={(e) => handleDelete(e)} className="flex flex-row justify-center items-center rounded-xl bg-[#f0f0f0] p-2"><ClipLoader size="20px" color='#000' loading={state.isDeleting} className="mr-[5px]"/>{state.msg}</button>
                        {!state.disabled && <button onClick={(e) => handleCancel(e)} className="rounded-xl bg-[#c3e676] p-2">Cancel</button>}
                    </div>
                </div>
            </div>
  )
}

export default DeleteConfirm
