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

export default function Profile() {
  const router = useRouter();
  const userID = 1234;

  const ProfileHeader = () => {
    const styles = StyleSheet.create({
      profileHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      },
      headerBtnGroup: {
        flexDirection: "column",
        gap: 5,
      },
      headerBtn: {
        height: 42,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
      },
    });

    const ButtonItem = ({
      title,
      onPress,
    }: {
      title: string;
      onPress?: () => void;
    }) => (
      <TouchableOpacity style={styles.headerBtn} onPress={onPress}>
        <ThemedText type="alfa" style={{ color: "white", fontSize: 16 }}>
          View {title.charAt(0).toUpperCase() + title.slice(1)}
        </ThemedText>
      </TouchableOpacity>
    );

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
            <ButtonItem
              title="shelf"
              onPress={() => router.push(`/inventory`)}
            />
            <ButtonItem title="coin" />
            <ButtonItem title="settings" />
          </View>
          <SignOutButton />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <SafeAreaView style={styles.headerContainer}>
          <ProfileHeader />
        </SafeAreaView>
        <View style={styles.body}>
          <ThemedText
            style={{
              textAlign: "center",
            }}
          >
            Profile details go here.
          </ThemedText>
        </View>
        <View style={[styles.container, { justifyContent: "flex-end" }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/inventory")}
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
    paddingHorizontal: 10,
    paddingTop: 10,
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
  button: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  headerContainer: {
    backgroundColor: "#069af3",
    borderBottomLeftRadius: 40,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
