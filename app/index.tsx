import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/theme";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            flex: 2,
          }}
        >
          <TouchableOpacity onPress={() => router.push("./Intro")}>
            <ThemedText type="alfa" style={styles.title}>
              Manga-Loop
            </ThemedText>
          </TouchableOpacity>
          <FontAwesome name="gear" size={20} color="#000" />
        </View>

        <View style={styles.details}>
          <ThemedText>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem
            ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum
          </ThemedText>
          <ThemedText>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem
            ipsum lorem ipsum
          </ThemedText>
        </View>
        <View style={{ flex: 2, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("./Intro")}
          >
            <ThemedText
              type="nunitoBold"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Continue Onward
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    color: Colors.darkGreen,
  },
  details: {
    backgroundColor: "#D9D9D9",
    flex: 6,
    gap: 20,
    padding: 10,
  },
  button: {
    backgroundColor: Colors.whiteBlue,
    borderRadius: 30,
    height: 80,
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 40,
  },
});
