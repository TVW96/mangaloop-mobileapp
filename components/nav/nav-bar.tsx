import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function Navigation() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Link href="/(inventory)" style={{ color: "blue" }}>
        Inventory
      </Link>
      <Link href="/(inventory)" style={{ color: "blue" }}>
        Inventory
      </Link>
      <Link href="/(inventory)" style={{ color: "blue" }}>
        Inventory
      </Link>
    </SafeAreaView>
  );
}
