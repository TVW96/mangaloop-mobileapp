import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "@/components/themed-text";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("./index")}>
        <ThemedText type="alfa" style={styles.title}>
          Manga-Loop
        </ThemedText>
        <FontAwesome name="gear" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 48,
    textAlign: "center",
  },
});
