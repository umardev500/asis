import "@/src/styles/global.css";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="present/history" options={{ headerShown: false }} />
        <Stack.Screen
          name="present/take-pic"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="present/post" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
