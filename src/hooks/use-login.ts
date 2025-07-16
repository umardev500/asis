import { useAuthState } from "@/src/hooks/use-auth-state";
import { auth } from "@/src/services";
import { LoginResponse } from "@/src/types";
import { saveToken, saveUserProfile } from "@/src/utils";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const { login: signIn } = useAuthState();

  return useMutation({
    mutationFn: auth.login,
    onSuccess: (resp: LoginResponse) => {
      console.log("success");
      saveToken(resp.token);
      saveUserProfile(resp.profile);
      signIn();
    },
    onError: (err) => {
      console.log("error", err);
    },
  });
}
