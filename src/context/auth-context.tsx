import { getToken, removeToken } from "@/src/utils";
import * as SplashScreen from "expo-splash-screen";
import { createContext, ReactNode, useEffect, useState } from "react";

type AuthContextType = {
  loading: boolean;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = async () => {
    await removeToken();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = await getToken();
      if (storedToken) {
        setIsLoggedIn(true);
      }

      setLoading(false);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      SplashScreen.hideAsync();
    };

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
