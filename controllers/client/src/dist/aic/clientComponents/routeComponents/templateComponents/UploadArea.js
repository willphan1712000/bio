import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import useThemeContext from '../../../../client/clientComponents/context/theme';
const UploadArea = ({ state, title }) => {
    const { file, setFile } = state;
    const theme = useThemeContext();
    const borderClasses = `${theme.classes.border} rounded-3xl p-10 text-center`;
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        setFile(file);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (_jsxs("div", { className: 'px-5 md:w-[300px] w-full flex flex-col items-center', children: [_jsx("p", { className: 'text-[1.2rem] pt-10 pb-5', children: title }), _jsxs("div", Object.assign({}, getRootProps(), { className: 'w-full', children: [_jsx("input", Object.assign({}, getInputProps(), { accept: "image/*,.xlsx" })), isDragActive ? (_jsx("div", { className: `${borderClasses} !border-dashed`, children: "Drop file here" })) : (_jsx("div", { className: `${borderClasses} cursor-pointer`, children: "Click or drop file here" }))] })), file && _jsxs("p", { children: ["Name: ", file === null || file === void 0 ? void 0 : file.name] })] }));
};
export default UploadArea;
