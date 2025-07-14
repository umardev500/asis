import { AuthContext } from "@/src/context";
import { useContext } from "react";

export function useAuthState() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
