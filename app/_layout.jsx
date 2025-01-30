import { Stack } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="home/next" options={{ title: "Next Page" }} /> */}
        <Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
