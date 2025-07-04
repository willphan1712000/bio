import { useEffect, useRef } from "react";
import clientConfig from "../../../clientConfig"
import Card from "./Card"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "./Image";
gsap.registerPlugin(ScrollTrigger)

const Desktop = () => {
  const cardOne = useRef<HTMLDivElement>(null)
  const cardTwo = useRef<HTMLDivElement>(null)
  const imgOne = useRef<HTMLImageElement>(null)
  const imgTwo = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // if(!cardOne.current || !cardTwo.current) return

    gsap.timeline({
      scrollTrigger: {
        trigger: cardOne.current,
        start: "top center",
        end: "bottom 30%",
        scrub: 1,
        markers: false,
      }
    }).fromTo(imgOne.current, { opacity: 0 }, { opacity: 1 }).to(imgOne.current, { opacity: 0 })

    gsap.timeline({
      scrollTrigger: {
        trigger: cardTwo.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      }
    }).fromTo(imgTwo.current, { opacity: 0 }, { opacity: 1 }).to(imgOne.current, { opacity: 0 })
  }, [])

  return (
    <div className="lg:flex hidden bg-[#f5f5f7] rounded-3xl flex-row">
      <div className="flex flex-col p-10 w-[60%]">
        <Card item={clientConfig.templates.basic} ref={cardOne} />
        <Card item={clientConfig.templates.pro} ref={cardTwo}/>
      </div>
      <div className="flex w-[40%] sticky top-0 h-[100lvh]">
        <Image url={"/controllers/client/img/background.png"} ref={imgOne} />
        <Image url={"/controllers/client/img/ip.png"} ref={imgTwo} />
      </div>
    </div>
  )
}

export default Desktop
