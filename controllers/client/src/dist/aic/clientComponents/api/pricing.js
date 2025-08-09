var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import apiClient from "../../../client/api/apiClient";
function post(pricing) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!pricing)
            throw new Error("Pricing is not defined");
        const res = yield apiClient.post('/api/pricing', JSON.stringify(pricing));
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
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient.get('/api/pricing');
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
function update(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient.put('/api/pricing/' + id);
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
export default {
    post,
    get,
    update
};
