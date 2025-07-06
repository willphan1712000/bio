import { useEffect, useRef, useState } from "react";
import clientConfig from "../../clientConfig"
import Card from "./Card"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "./Image";
import useWindowWidth, { mobile } from "../../hooks/useWindowWidth";

gsap.registerPlugin(ScrollTrigger)

const Template = () => {
  const windowWidth = useWindowWidth()
  const cardOne = useRef<HTMLDivElement>(null)
  const cardTwo = useRef<HTMLDivElement>(null)
  const imgOne = useRef<HTMLImageElement>(null)
  const imgTwo = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!cardOne.current || !cardTwo.current || !imgOne.current || !imgTwo.current) return

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
  }, [windowWidth])

  if(windowWidth >= mobile)
    return (
      <div className="flex bg-[#f5f5f7] rounded-3xl flex-row max-w-[1500px]">
        <div className="flex flex-col p-10 w-[60%]">
          <Card item={clientConfig.templates.basic} ref={cardOne} id="#basic_templates" />
          <Card item={clientConfig.templates.pro} ref={cardTwo} id="#pro_templates" />
        </div>
        <div className="flex w-[40%] sticky top-0 h-[100vh]">
          <Image url={"/controllers/client/img/background.png"} ref={imgOne} />
          <Image url={"/controllers/client/img/ip.png"} ref={imgTwo} />
        </div>
      </div>
    )

  return (
    <div className="flex bg-[#f5f5f7] rounded-3xl flex-col">
      <div className="flex w-full sticky top-0 h-[500px] template-image-background">
        <Image url={"/controllers/client/img/background.png"} ref={imgOne} />
        <Image url={"/controllers/client/img/ip.png"} ref={imgTwo} />
      </div>
      <div className="flex flex-col p-10 w-full">
        <Card item={clientConfig.templates.basic} ref={cardOne} isMobile={true} id="#basic_templates"/>
        <Card item={clientConfig.templates.pro} ref={cardTwo}isMobile={true} id="#pro_templates"/>
      </div>
    </div>
  )
}

export default Template
