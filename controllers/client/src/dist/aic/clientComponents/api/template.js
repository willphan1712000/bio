"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiClient_1 = __importDefault(require("../../../client/api/apiClient"));
function uploadTemplate(files) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new FormData();
        formData.append('thumbnail', files.thumbnail);
        formData.append('template', files.template);
        formData.append('annotation', files.annotation);
        const res = yield apiClient_1.default.post('/api/template/manage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    });
}
function getTemplateRecords() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient_1.default.get('/api/template/manage');
        if (!res.ok)
            throw new Error(res.problem);
        const data = res.data;
        if (!data.success)
            throw new Error(data.error);
        const data_sec = data.data;
        if (!data_sec.success)
            throw new Error(data_sec.error);
        return data_sec.data;
    });
}
function getTemplateServerURL() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient_1.default.get('/api/template/manage/url');
        if (!res.ok)
            throw new Error(res.problem);
        const data = res.data;
        if (!data.success)
            throw new Error(data.error);
        return data.data;
    });
}
function updateTemplate(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient_1.default.put('/api/template/manage/' + id);
        if (!res.ok)
            throw new Error(res.problem);
        const data = res.data;
        if (!data.success)
            throw new Error(data.error);
        const data_sec = data.data;
        if (!data_sec.success)
            throw new Error(data_sec.error);
        return data_sec.success;
    });
}
function deleteTemplate(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient_1.default.delete('/api/template/manage/' + id);
        if (!res.ok)
            throw new Error(res.problem);
        const data = res.data;
        if (!data.success)
            throw new Error(data.error);
        const data_sec = data.data;
        if (!data_sec.success)
            throw new Error(data_sec.error);
        return data_sec.success;
    });
}
exports.default = {
    uploadTemplate,
    getTemplateRecords,
    getTemplateServerURL,
    updateTemplate,
    deleteTemplate
};
