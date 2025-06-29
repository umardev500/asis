import { present } from "@/src/services";
import { SavePresentPayload, SavePresentResponse } from "@/src/types";
import { useMutation } from "@tanstack/react-query";

export const useSavePresent = () => {
  return useMutation<SavePresentResponse, Error, SavePresentPayload>({
    mutationFn: (payload) => present.save(payload),
  });
};
