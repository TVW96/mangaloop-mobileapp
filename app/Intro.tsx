import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";

export default function Intro() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ThemedText
        type="nunitoBold"
        style={{
          fontSize: 24,
          justifyContent: "flex-start",
          paddingLeft: 10,
          color: "whitesmoke",
        }}
        onPress={() => router.dismissAll()}
      >
        Go Back
      </ThemedText>
      <View style={{ alignItems: "center", gap: 6 }}>
        <ThemedText style={styles.title} type="alfa">
          Are you ready to join the Manga-Loop?
        </ThemedText>
      </View>
      <View style={{ gap: 20 }}>
        <Animated.View entering={FadeInUp.duration(600)} style={styles.button}>
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
                }}
              >
                Sign-In
              </ThemedText>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(150).duration(600)}
          style={styles.button}
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
                  color: "#EFBF04",
                }}
              >
                Sign-Up
              </ThemedText>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10,
    backgroundColor: "#069af3",
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
    borderRadius: 20,
    width: 200,
    height: 50,
    justifyContent: "center",
  },
});
