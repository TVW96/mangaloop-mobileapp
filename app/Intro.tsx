import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "@/components/themed-text";

export default function Intro() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/AppBackground.png")}
      resizeMode="cover"
      style={[
        styles.image,
        { justifyContent: "space-between", paddingTop: 40 },
      ]}
    >
      <ThemedText
        type="nunitoBold"
        style={{ fontSize: 24, justifyContent: "flex-start", paddingLeft: 10 }}
        onPress={() => router.dismissAll()}
      >
        Back
      </ThemedText>
      <View style={styles.container}>
        <View style={{ alignItems: "center", gap: 6 }}>
          <ThemedText style={styles.title} type="alfaOutline">
            Are you ready to join the Manga-Loop?
          </ThemedText>
        </View>
        <View style={{ gap: 20 }}>
          <Animated.View
            entering={FadeInUp.duration(600)}
            style={styles.button}
          >
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Animated.View
                entering={FadeInUp.delay(100).duration(600)}
                style={{ transform: [{ translateY: -2 }] }}
              >
                <ThemedText
                  type="nunitoBold"
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    color: "black",
                  }}
                >
                  Sign-In
                </ThemedText>
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInUp.delay(150).duration(600)}
            style={[
              styles.button,
              { backgroundColor: "rgba(168, 255, 249, 0.23)", height: 50 },
            ]}
          >
            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <Animated.View
                entering={FadeInUp.delay(250).duration(600)}
                style={{ transform: [{ translateY: -2 }] }}
              >
                <ThemedText
                  type="nunitoBold"
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Sign-Up
                </ThemedText>
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  container: {
    justifyContent: "space-between",
    height: "75%",
    paddingVertical: 40,
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
    borderRadius: 100,
    height: 70,
    justifyContent: "center",
  },
});
