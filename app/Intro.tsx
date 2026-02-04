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

export default function Home() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/AppBackground.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={{ alignItems: "center", gap: 6 }}>
          <ThemedText style={styles.title} type="alfaOutline">
            Are you ready to join the Manga-Loop?
          </ThemedText>
        </View>
        <View style={{ gap: 20 }}>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)")}
            style={styles.button}
          >
            <ThemedText
              type="nunito"
              style={{
                textAlign: "center",
                fontSize: 24,
              }}
            >
              Sign-In
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)")}
            style={[styles.button, { backgroundColor: "#184B48" }]}
          >
            <ThemedText
              type="nunito"
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Sign-Up
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    justifyContent: "space-between",
    height: "70%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    color: "white",
    maxWidth: 350,
    lineHeight: 50,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "#A8FFF9",
    borderRadius: 30,
    height: 80,
    justifyContent: "center",
  },
});
