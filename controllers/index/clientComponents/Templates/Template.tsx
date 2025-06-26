import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Template = () => {
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const img = imgRef.current

        if(!img) return

        gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top 10%",
                end: "120% 10%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(img, { borderRadius: '999px', width: '50%' }, { borderRadius: '20px', width: '90%' })

        window.addEventListener('resize', () => {
            ScrollTrigger.refresh()
        })
        
    }, [])

  return (
    <>
        <div className="md:h-[70vh]"></div>
        <div className='h-[150vh] flex flex-col items-center bg-[--primary] py-10'>
            <div className='md:h-[90vh] overflow-hidden rounded-full sticky top-[50%] translate-y-[-50%]' ref={imgRef}>
                <img src="/controllers/client/img/template2.png" className='size-full object-cover'/>
            </div>
        </div>
    </>
  )
}

export default Template
