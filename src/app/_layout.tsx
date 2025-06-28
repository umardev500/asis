import "@/src/styles/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="present/history" options={{ headerShown: false }} />
      <Stack.Screen name="present/take-pic" options={{ headerShown: false }} />
      <Stack.Screen name="present/post" options={{ headerShown: false }} />
    </Stack>
  );
}
