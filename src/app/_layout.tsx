import "@/src/styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const queryClient = new QueryClient();

  Alert.alert("Warning", "This is a warning message.");

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="present/history"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="present/take-pic"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="present/post" options={{ headerShown: false }} />
          <Stack.Screen
            name="present/map-pin"
            options={{ headerShown: false }}
          />
        </Stack>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
