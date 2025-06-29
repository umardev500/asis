import { present } from "@/src/services";
import { useQuery } from "@tanstack/react-query";

export const useGetPresents = (page: number) => {
  return useQuery({
    queryKey: ["presents", page],
    queryFn: () => present.getAll(page),
  });
};
