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
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient.post('/data/api/user/GETALL.php', {
            username: "Allinclicks",
            limit: 50
        });
        if (!res.ok)
            throw new Error(res.problem);
        const data = res.data;
        if (!data.success)
            throw new Error(data.error);
        return data.data;
    });
}
function deleteUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiClient.post('/data/api/user/DELETE.php', {
            username,
            key: process.env.SYSTEM_SECRET_KEY
        });
        if (!res.ok)
            throw new Error(res.problem);
        const data = res.data;
        if (!data.success)
            throw new Error(data.error);
        return data.success;
    });
}
export default {
    getUsers,
    deleteUser
};
