import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("./index")}>
        <Text style={styles.title}>Home</Text>
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
    fontWeight: "bold",
  },
});
