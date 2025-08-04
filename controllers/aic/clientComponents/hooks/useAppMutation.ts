import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function useAppMutation<T extends (...args: any[]) => Promise<any>>(queryKey: string, apiFunc: T) {
    const queryClient = useQueryClient()
    return useMutation<Awaited<ReturnType<T>>, unknown, Parameters<T>[0]>({
        mutationFn: apiFunc,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] })
        }
    })
}