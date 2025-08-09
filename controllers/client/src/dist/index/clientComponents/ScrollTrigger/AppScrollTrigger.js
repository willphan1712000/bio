import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import clientConfig from '../../clientConfig';
import Card from './Card';
gsap.registerPlugin(ScrollTrigger);
function AppScrollTrigger() {
    const cardRef = useRef(null);
    const headerRef = useRef(null);
    useEffect(() => {
        if (!cardRef.current)
            return;
        if (!headerRef.current)
            return;
        const card = cardRef.current.card;
        const one = cardRef.current.one;
        const two = cardRef.current.two;
        const three = cardRef.current.three;
        gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 10%",
                end: "300% 20%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(card, { rotationY: 0 }, { rotationY: 360 });
        gsap.timeline({
            scrollTrigger: {
                trigger: one,
                start: "top 65%",
                end: "bottom 55%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(one, { opacity: 0 }, { opacity: 1 }).to(one, { opacity: 0 });
        gsap.timeline({
            scrollTrigger: {
                trigger: two,
                start: "110% 50%",
                end: "210% 40%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(two, { opacity: 0 }, { opacity: 1 }).to(two, { opacity: 0 });
        gsap.timeline({
            scrollTrigger: {
                trigger: three,
                start: "220% 35%",
                end: "320% 25%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(three, { opacity: 0 }, { opacity: 1 }).to(three, { opacity: 0 });
    }, []);
    return (_jsx("div", { className: "App", style: styles.container, children: _jsxs("header", { className: "App-header", style: styles.appHeader, ref: headerRef, children: [_jsx("div", { className: '', children: _jsx("h1", { className: "text-[25px]", style: styles.title, children: clientConfig.nfc.title }) }), _jsx("div", { style: styles.spacer, children: _jsx(Card, { ref: cardRef }) })] }) }));
}
const styles = {
    container: {
        width: "100%",
        maxWidth: "1500px",
    },
    spacer: {
        height: "200lvh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative"
    },
    appHeader: {
        minHeight: "100lvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "black",
        perspective: "1500px",
        backfaceVisibility: "hidden",
        position: "relative",
        padding: "50px",
        backgroundColor: "#f5f5f7",
        borderRadius: "30px"
    },
    title: {
        borderRadius: '5px',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundColor: '#4158d0',
        backgroundImage: 'linear-gradient(43deg, #4158d0, #c850c0 46%, #ffcc70)',
        margin: '0',
        textAlign: 'center',
        padding: '30px'
    }
};
export default AppScrollTrigger;
