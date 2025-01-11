import { useEffect, useRef, useState } from "react"
import Transform from "../../../client/src/Web-Development/components/Transform/Transform"
import Canvas from "../../../client/src/Web-Development/components/upload/Canvas"
import { $$ } from "../../../client/src/Web-Development/W"
import handleAdminContext, { handleAdminImageContext } from "../AdminContext"

const AvatarFrame = () => {
  const [state, dispatch] = handleAdminImageContext()
  const [transform, setTransform] = useState<Transform|null>(null)

  const data = handleAdminContext()

  const imageRef = useRef<HTMLImageElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  function handleCancel() {
    dispatch({type: 'upload'})
    $("body").css({
      overflow: "auto"
    })
    setTransform(null)
  }

 function handleAccept() {
    const img = imageRef.current
    const canvasObj = new Canvas()
    const [x, y, angle] = transform!.exportData()
    const [canvas, ctx] = canvasObj.createCanvas(700, 700)
    const [,src,srcEncoded] = canvasObj.drawImage(img, ctx, x, y, 1, angle, canvas, frameRef.current!.clientWidth, frameRef.current!.clientHeight)

    setTransform(null)
    $("body").css({
      overflow: "auto"
    })

    dispatch({type: 'main', value: src}) // update main image
    data.image = srcEncoded // update image in data object, be ready for updating to db

    dispatch({type: 'upload'}) // hide screen
  }

  function handleLoad() {
    setTransform($$(wrapperRef.current, frameRef.current).transform())
  }

  useEffect(() => {
    const img = imageRef.current

    if(img !== null && state.isUpload) {
      if(img.complete) {
        handleLoad()
      } else {
        img.addEventListener('load', () => handleLoad())
      }
    }

    return () => {
      if(img !== null && state.isUpload) {
        img.removeEventListener('load', () => handleLoad())
      }
    }

  }, [state])

  if(state.isUpload)
    return (
      <div className={`flex h-screen w-screen fixed top-0 left-0 backdrop-blur-[20px] z-[99] flex-col justify-center items-center`}>
          <p className="text-[20px] mb-[20vw]">Drag, Zoom, or Rotate Image</p>
          <div className="frame relative w-[80%] aspect-square border-dashed border-black border-4 rounded-[50%] p-[50px] overflow-hidden bg-white" ref={frameRef}>
              <div className="wrapper" ref={wrapperRef}>
                <img className="img__preview" src={state.previewSrc} ref={imageRef}/>
              </div>
          </div>
          <div className="btn flex flex-row gap-6 mt-[20vw]">
              <div onClick={() => handleAccept()} className="flex items-center accept rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer">Accept</div>
              <div onClick={() => handleCancel()} className="cancel rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer">Cancel</div>
          </div>
      </div>
    )
}

export default AvatarFrame
