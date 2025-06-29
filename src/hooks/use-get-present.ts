import { present } from "@/src/services";
import { PresentApiResponse } from "@/src/types";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetPresents = () => {
  return useInfiniteQuery<PresentApiResponse, Error>({
    queryKey: ["presents"],
    queryFn: async ({ pageParam = 1 }) => {
      return present.getAll(1);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage?.data?.data.next_page_url
        ? lastPage.data.data.current_page + 1
        : undefined;
    },
  });
};
