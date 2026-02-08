import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SignOutButton from "@/components/social-auth-buttons/sign-out-button";
import Header from "@/components/profile/header";
import { Colors } from "@/constants/theme";

export default function Home() {
  const router = useRouter();

  const ButtonItem = ({ title }: { title: string }) => (
    <TouchableOpacity
      style={styles.headerBtn}
      onPress={() => router.push(`./${title}`)}
    >
      <ThemedText type="alfa" style={{ color: "white", fontSize: 18 }}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </ThemedText>
    </TouchableOpacity>
  );

  const ProfileHeader = () => {
    return (
      <View style={{ justifyContent: "space-between" }}>
        <View style={styles.profileHeader}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Image
              source={require("@/assets/images/mangaLoop_scribe.png")}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
            <ThemedText type="nunitoBold">TVW96</ThemedText>
            <ThemedText type="nunito">User since Feb 2026</ThemedText>
            <ThemedText type="nunitoBold" style={{ color: Colors.gold }}>
              0
            </ThemedText>
          </View>

          <View style={styles.headerBtnGroup}>
            <ButtonItem title="shelf" />
            <ButtonItem title="shelf" />
            <ButtonItem title="shelf" />
            <ButtonItem title="shelf" />
          </View>
        </View>
        <SignOutButton />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <SafeAreaView style={styles.headerContainer}>
          <ProfileHeader />
        </SafeAreaView>
        <View
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemedText
            style={{
              textAlign: "center",
            }}
          >
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum
          </ThemedText>
        </View>
        <View style={[styles.container, { justifyContent: "flex-end" }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(pages)/book-store")}
          >
            <ThemedText type="alfa" style={{ fontSize: 42 }}>
              Find Manga
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    color: "black",
    maxWidth: 350,
    lineHeight: 50,
    paddingTop: 40,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtnGroup: {
    flexDirection: "column",
    gap: 20,
  },
  headerBtn: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: 42,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  button: {
    backgroundColor: Colors.whiteBlue,
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  headerContainer: {
    backgroundColor: "#184B44",
    borderBottomLeftRadius: 40,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
