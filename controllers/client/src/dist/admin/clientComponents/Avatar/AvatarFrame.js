import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import Canvas from "../../../client/src/Web-Development/components/upload/Canvas";
import { $$ } from "../../../client/src/Web-Development/W";
import handleAdminContext, { handleAdminImageContext } from "../AdminContext";
import ReactDOM from "react-dom";
const AvatarFrame = () => {
    const [state, dispatch] = handleAdminImageContext();
    const [transform, setTransform] = useState(null);
    const data = handleAdminContext();
    const imageRef = useRef(null);
    const frameRef = useRef(null);
    const wrapperRef = useRef(null);
    function handleCancel() {
        dispatch({ type: 'upload' });
        $("body").css({
            overflow: "auto"
        });
        setTransform(null);
    }
    function handleAccept() {
        const img = imageRef.current;
        const canvasObj = new Canvas();
        const [x, y, angle] = transform.exportData();
        const [canvas, ctx] = canvasObj.createCanvas(700, 700);
        const [, src, srcEncoded] = canvasObj.drawImage(img, ctx, x, y, 1, angle, canvas, frameRef.current.clientWidth, frameRef.current.clientHeight);
        setTransform(null);
        $("body").css({
            overflow: "auto"
        });
        dispatch({ type: 'main', value: src });
        data.image = srcEncoded;
        dispatch({ type: 'upload' });
    }
    function handleLoad() {
        setTransform($$(wrapperRef.current, frameRef.current).transform());
    }
    useEffect(() => {
        const img = imageRef.current;
        if (img !== null && state.isUpload) {
            if (img.complete) {
                handleLoad();
            }
            else {
                img.addEventListener('load', () => handleLoad());
            }
        }
        return () => {
            if (img !== null && state.isUpload) {
                img.removeEventListener('load', () => handleLoad());
            }
        };
    }, [state]);
    if (!state.isUpload)
        return null;
    const jsx = (_jsxs("div", { className: `flex h-[100dvh] w-screen fixed top-0 left-0 backdrop-blur-[20px] z-[99] flex-col justify-center items-center px-[30px]`, children: [_jsx("p", { className: "text-[20px] mb-[20px]", children: "Drag, Zoom, or Rotate Image" }), _jsx("div", { className: "frame relative w-[100%] max-w-[500px] max-h-[500px] aspect-square border-dashed border-black border-4 rounded-[50%] p-[50px] overflow-hidden bg-white", ref: frameRef, children: _jsx("div", { className: "wrapper", ref: wrapperRef, children: _jsx("img", { className: "img__preview", src: state.previewSrc, ref: imageRef }) }) }), _jsxs("div", { className: "btn flex flex-row gap-6 mt-[20px] z-0", children: [_jsx("div", { onClick: () => handleAccept(), className: "flex items-center accept rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer", children: "Accept" }), _jsx("div", { onClick: () => handleCancel(), className: "cancel rounded-[10px] bg-[#f0f0f0f0] p-[10px] shadow-lg cursor-pointer", children: "Cancel" })] })] }));
    if (!state.popup)
        return jsx;
    return ReactDOM.createPortal(jsx, state.popup);
};
export default AvatarFrame;
