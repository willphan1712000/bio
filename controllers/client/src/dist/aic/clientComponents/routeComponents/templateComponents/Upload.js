var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '@radix-ui/themes';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BarLoader } from 'react-spinners';
import AppToaster from '../../../../client/clientComponents/AppToaster';
import useThemeContext from '../../../../client/clientComponents/context/theme';
import apiTemplate from '../../api/template';
import UploadArea from './UploadArea';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const Upload = () => {
    const theme = useThemeContext();
    const containerClasses = `${theme.classes.border} md:w-fit w-full p-10 rounded-[30px] flex flex-col items-center md:items-start my-5`;
    const [thumbnail, setThumbnail] = useState();
    const [template, setTemplate] = useState();
    const [annotation, setAnnotation] = useState();
    const [isUploading, setUploading] = useState(false);
    const resetFiles = () => {
        setThumbnail(undefined);
        setTemplate(undefined);
        setAnnotation(undefined);
    };
    const queryClient = useQueryClient();
    const { mutateAsync: uploadTemplate } = useMutation({
        mutationFn: apiTemplate.uploadTemplate,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["templates"] });
        }
    });
    const handleUpload = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!thumbnail || !template || !annotation) {
            toast(_jsx(AppToaster, { message: 'Please upload all required files' }));
            return;
        }
        setUploading(true);
        const data = yield uploadTemplate({
            thumbnail,
            template,
            annotation
        });
        resetFiles();
        if (!data.success) {
            console.log(data.error);
            toast(_jsx(AppToaster, { message: data.error }));
        }
        else {
            if (!data.data.success) {
                toast(_jsx(AppToaster, { message: data.data.error }));
            }
            else {
                toast(_jsx(AppToaster, { message: data.data.data.msg, status: true }));
            }
        }
        setUploading(false);
    });
    return (_jsx(_Fragment, { children: _jsxs("div", { className: containerClasses, children: [_jsxs("div", { className: 'flex flex-col md:flex-row justify-center items-center', children: [_jsx(UploadArea, { title: "Upload Thumbnail", state: { file: thumbnail, setFile: setThumbnail } }), _jsx(UploadArea, { title: "Upload Template", state: { file: template, setFile: setTemplate } }), _jsx(UploadArea, { title: "Upload Annotation", state: { file: annotation, setFile: setAnnotation } })] }), _jsx("div", { className: 'w-fit p-[20px]', children: _jsx("div", { className: 'bg-white p-[1px] rounded-full', children: _jsx(Button, { disabled: isUploading, size: "3", radius: 'full', onClick: handleUpload, children: isUploading ? _jsx(BarLoader, {}) : 'Upload' }) }) })] }) }));
};
export default Upload;
