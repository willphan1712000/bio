import { useEffect } from "react"
import { $$ } from "../../../client/src/Web-Development/W"
import { handleAdminImageContext } from "../AdminContext"

const AvatarFrame = () => {
  const [state, dispatch] = handleAdminImageContext()

  function handleAccept() {
    console.log("wewe")
  }

  function handleCancel() {
    dispatch({type: 'upload'})
  }

  useEffect(() => {
    let transform = state.isUpload ? $$('.wrapper', '.frame').transform() : null
    
    // cleanup function will remove the previous transform object before re-rendering the component and creating another transform object
    return () => {
      transform = null
    }
  }, [state.isUpload])

  if(state.isUpload)
    return (
      <div className='flex h-screen w-screen fixed top-0 left-0 backdrop-blur-[20px] z-[99] flex-col justify-center items-center'>
          <div className="frame relative w-[80%] aspect-square border-dashed border-black border-4 rounded-[50%] p-[50px] overflow-hidden bg-white">
              <div className="wrapper">
                  <img className="img__preview" src={state.previewSrc}/>
              </div>
              {/* controller added here */}
          </div>
          <div className="btn flex flex-row gap-6 mt-[20vw]">
              <div onClick={() => handleAccept()} className="accept rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer">Accept</div>
              <div onClick={() => handleCancel()} className="cancel rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer">Cancel</div>
          </div>
      </div>
    )
}

export default AvatarFrame
