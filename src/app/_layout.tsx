import { AuthProvider } from "@/src/context";
import { useAuthState } from "@/src/hooks";
import "@/src/styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const { isLoggedIn } = useAuthState();

  return (
    <Stack>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="present/history" options={{ headerShown: false }} />
        <Stack.Screen
          name="present/take-pic"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="present/post" options={{ headerShown: false }} />
        <Stack.Screen name="present/map-pin" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function App() {
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RootLayout />
          </AuthProvider>
        </QueryClientProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}
