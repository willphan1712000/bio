import { jsx as _jsx } from "react/jsx-runtime";
const Image = ({ src, objectFit }) => {
    return (_jsx("img", { className: `image size-full ${!objectFit ? 'object-contain' : 'object-' + objectFit}`, src: src, draggable: false, alt: 'React Image Component' }));
};
export default Image;
