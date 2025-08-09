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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useAppQuery;
const react_query_1 = require("@tanstack/react-query");
function useAppQuery(queryKey, apiFunc) {
    return (0, react_query_1.useQuery)({
        queryKey: [queryKey],
        queryFn: () => __awaiter(this, void 0, void 0, function* () { return apiFunc(); }),
        staleTime: 5 * 60 * 1000,
        retry: 3
    });
}
