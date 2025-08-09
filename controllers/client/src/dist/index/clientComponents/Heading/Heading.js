import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import clientConfig from '../../clientConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../../../client/clientComponents/Logo';
import AppImage from '../../../client/clientComponents/AppImage';
gsap.registerPlugin(ScrollTrigger);
const Heading = () => {
    const backdropRef = useRef(null);
    const textRef = useRef(null);
    const greetingRef = useRef(null);
    const imgRef = useRef(null);
    useEffect(() => {
        const backdrop = backdropRef.current;
        const text = textRef.current;
        const greeting = greetingRef.current;
        const img = imgRef.current;
        if (!backdrop || !text || !greeting || !img)
            return;
        gsap.timeline({
            scrollTrigger: {
                trigger: backdrop,
                start: "top 10%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        }).fromTo(backdrop, { opacity: 0.9 }, { opacity: 0 });
        gsap.timeline({
            scrollTrigger: {
                trigger: text,
                start: "top 10%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        }).fromTo(text, { scale: 0.5 }, { scale: 1 });
        gsap.timeline({
            scrollTrigger: {
                trigger: greeting,
                start: "top 20%",
                end: "bottom 20%",
                scrub: 1,
                markers: false
            }
        }).fromTo(greeting, { opacity: 1 }, { opacity: 0 });
        gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top 10%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        }).fromTo(img, { scale: 1 }, { scale: 1.2 });
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });
    }, []);
    return (_jsx("div", { style: styles.container, children: _jsxs("div", { className: "flex flex-col justify-center items-center relative overflow-hidden", style: styles.sticky, children: [_jsxs("div", { className: 'overflow-hidden rounded-[30px] max-h-[700px] flex flex-col items-center', children: [_jsx(AppImage, { src: '/controllers/client/img/background.png', className: "object-cover size-full relative", ref: imgRef }), _jsx("div", { style: {
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: '#000',
                                pointerEvents: 'none',
                                borderRadius: "30px",
                                opacity: 0.9
                            }, ref: backdropRef }), _jsx("div", { className: 'absolute top-[10%] w-[80%] max-w-[800px]', ref: greetingRef, children: _jsx(Logo, {}) })] }), _jsxs("div", { className: 'px-10', ref: textRef, children: [_jsx("h1", { className: "text-center text-[40px] text-black", children: clientConfig.heading.title }), _jsx("h2", { className: "text-center text-white bg-[--primary] px-[15px] py-[5px] rounded-[40px] text-[40px]", children: clientConfig.heading.desSpan })] })] }) }));
};
const styles = {
    container: {
        height: "180lvh",
    },
    sticky: {
        position: "sticky",
        top: "10%"
    }
};
export default Heading;
