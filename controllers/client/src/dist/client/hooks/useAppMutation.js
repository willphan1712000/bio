import { useMutation, useQueryClient } from "@tanstack/react-query";
export default function useAppMutation(queryKey, apiFunc) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiFunc,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        }
    });
}
