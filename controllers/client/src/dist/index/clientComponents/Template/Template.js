import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import clientConfig from "../../clientConfig";
import Card from "./Card";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "./Image";
import useWindowWidth, { mobile } from "../../hooks/useWindowWidth";
gsap.registerPlugin(ScrollTrigger);
const Template = () => {
    const windowWidth = useWindowWidth();
    const cardOne = useRef(null);
    const cardTwo = useRef(null);
    const imgOne = useRef(null);
    const imgTwo = useRef(null);
    useEffect(() => {
        if (!cardOne.current || !cardTwo.current || !imgOne.current || !imgTwo.current)
            return;
        gsap.timeline({
            scrollTrigger: {
                trigger: cardOne.current,
                start: "top 90%",
                end: "bottom 30%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(imgOne.current, { opacity: 0 }, { opacity: 1 }).to(imgOne.current, { opacity: 0 });
        gsap.timeline({
            scrollTrigger: {
                trigger: cardTwo.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                markers: false,
            }
        }).fromTo(imgTwo.current, { opacity: 0 }, { opacity: 1 }).to(imgOne.current, { opacity: 0 });
    }, [windowWidth]);
    if (windowWidth >= mobile)
        return (_jsxs("div", { className: "flex bg-[#f5f5f7] rounded-3xl flex-row max-w-[1500px]", children: [_jsxs("div", { className: "flex flex-col p-10 w-[60%]", children: [_jsx(Card, { item: clientConfig.templates.basic, ref: cardOne, id: "#basic_templates" }), _jsx(Card, { item: clientConfig.templates.pro, ref: cardTwo, id: "#pro_templates" })] }), _jsxs("div", { className: "flex w-[40%] sticky top-0 h-[100vh]", children: [_jsx(Image, { url: "/controllers/client/img/background.png", ref: imgOne }), _jsx(Image, { url: "/controllers/client/img/ip.png", ref: imgTwo })] })] }));
    return (_jsxs("div", { className: "flex bg-[#f5f5f7] rounded-3xl flex-col", children: [_jsxs("div", { className: "flex w-full sticky top-0 h-[500px] template-image-background", children: [_jsx(Image, { url: "/controllers/client/img/background.png", ref: imgOne }), _jsx(Image, { url: "/controllers/client/img/ip.png", ref: imgTwo })] }), _jsxs("div", { className: "flex flex-col p-10 w-full", children: [_jsx(Card, { item: clientConfig.templates.basic, ref: cardOne, isMobile: true, id: "#basic_templates" }), _jsx(Card, { item: clientConfig.templates.pro, ref: cardTwo, isMobile: true, id: "#pro_templates" })] })] }));
};
export default Template;
