import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import "@/global.css";

const RootLayout = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="light" backgroundColor="black" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}

export default RootLayout