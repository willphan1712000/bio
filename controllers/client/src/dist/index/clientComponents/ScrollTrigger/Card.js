import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useImperativeHandle, useRef } from 'react';
import Text from './Text';
import clientConfig from '../../clientConfig';
const Card = React.forwardRef((props, ref) => {
    const card = useRef(null);
    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    useImperativeHandle(ref, () => ({
        card: card.current,
        one: one.current,
        two: two.current,
        three: three.current
    }));
    return (_jsxs("div", { className: "card-container", style: cardContainerStyle, children: [_jsxs("div", { className: "card", ref: card, style: cardStyle, children: [_jsx("div", { className: "card-face front", style: frontFaceStyle }), _jsx("div", { className: "card-face back", style: backFaceStyle })] }), _jsx(Text, { text: clientConfig.nfc.one, ref: one, className: 'bottom-[-70%] left-[0%] absolute w-[200px] z-10' }), _jsx(Text, { text: clientConfig.nfc.two, ref: two, className: 'bottom-[-60%] left-[10%] absolute w-[200px] z-10' }), _jsx(Text, { text: clientConfig.nfc.three, ref: three, className: 'bottom-[-80%] left-[20%] absolute w-[200px] z-10' })] }));
});
const cardContainerStyle = {
    maxWidth: '300px',
    maxHeight: '500px',
    width: '50vw',
    height: '83.33vw',
    minWidth: '200px',
    minHeight: '333.33px',
    perspective: '1500px',
    position: "sticky",
    top: "10%",
};
const cardStyle = {
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    animation: 'rotate 10s infinite linear',
};
const cardFaceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px',
    boxShadow: '0 30px 50px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
};
const frontFaceStyle = Object.assign(Object.assign({}, cardFaceStyle), { backgroundImage: "url('/controllers/client/img/instagram_front.png')", backgroundSize: 'cover', backgroundPosition: 'center' });
const backFaceStyle = Object.assign(Object.assign({}, cardFaceStyle), { backgroundImage: "url('/controllers/client/img/instagram_back.png')", backgroundSize: 'cover', backgroundPosition: 'center', transform: 'rotateY(180deg)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '1.2em' });
export default Card;
