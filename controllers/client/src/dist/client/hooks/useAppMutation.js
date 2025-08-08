"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useAppMutation;
const react_query_1 = require("@tanstack/react-query");
function useAppMutation(queryKey, apiFunc) {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: apiFunc,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        }
    });
}
