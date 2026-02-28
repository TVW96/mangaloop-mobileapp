import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { SplashScreenController } from "@/components/splash-screen-controller";
import { useAuthContext } from "@/hooks/use-auth-context";
import AuthProvider from "@/providers/auth-provider";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas, faCoins } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faCoins);

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "index",
};

function RootNavigator() {
  const { isLoggedIn } = useAuthContext();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Intro" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="inventory" options={{ headerShown: false }} />
      <Stack.Screen name="coin" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/new-user" options={{ headerShown: false }} />

      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    NunitoSans: require("../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf"),
    NunitoSansItalic: require("../assets/fonts/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf"),
    NunitoSansSemiBold: require("../assets/fonts/nunito-sans.semibold.ttf"),
    AlfaSlabOne: require("../assets/fonts/AlfaSlabOne-Regular.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <SplashScreenController />
        <RootNavigator />
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
      </AuthProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
