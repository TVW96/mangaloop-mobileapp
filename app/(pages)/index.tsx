import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SignOutButton from "@/components/social-auth-buttons/sign-out-button";

export default function Home() {
  const router = useRouter();

  const ButtonItem = ({ title }: { title: string }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.push(`./${title}`)}
    >
      <ThemedText type="alfa" style={{ color: "white", fontSize: 18 }}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </ThemedText>
    </TouchableOpacity>
  );
  const ProfileHeader = () => {
    return (
      <View>
        <View>
          <ButtonItem title="shelf" />
          <ButtonItem title="shelf" />
          <ButtonItem title="shelf" />
          <ButtonItem title="shelf" />
        </View>
        <SignOutButton />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.headerContainer}>
          <ProfileHeader />
        </SafeAreaView>
        <View style={styles.container}>
          <ThemedText> Test</ThemedText>
        </View>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    color: "black",
    maxWidth: 350,
    lineHeight: 50,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "rgb(0, 0, 0, .5)",
    width: 128,
    height: 24,
    alignItems: "center",
    borderRadius: 5,
    padding: 1,
    margin: 10,
  },
  headerContainer: {
    backgroundColor: "#184B44",
    borderBottomLeftRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
