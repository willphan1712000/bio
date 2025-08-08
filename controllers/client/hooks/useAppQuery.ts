import { useQuery } from "@tanstack/react-query";

export default function useAppQuery<T extends () => Promise<any>>(queryKey: string, apiFunc: T) {
    return useQuery<Awaited<ReturnType<T>>>({
        queryKey: [queryKey],
        queryFn: async () => apiFunc(),
        staleTime: 5 * 60 * 1000, // 5 minutes,
        retry: 3
    })
}
