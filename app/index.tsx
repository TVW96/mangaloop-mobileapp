import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ThemedText type="alfa" style={styles.title}>
          Welcome to Manga-Loop
        </ThemedText>

        <View style={styles.details}>
          <ThemedText type="nunitoBold" style={{ textAlign: "center" }}>
            MangaLoop is an app that was created with the purpose of lowering
            the carbon footprint of manga fans around the world. With an in-app
            purchasing system we are encouraging the circulation of new, and
            refurbished manga. Users can sell manga directly to the MangaLoop
            company to receive in-app currency known as &apos;LootCoins&apos;.
            LootCoins are used to buy manga on our website. Use of LootCoins are
            encouraged with discount prices, however direct purchase for $USD
            can be done. Please enjoy browsing, buying, selling, trading, and
            make connections.
          </ThemedText>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("./Intro")}
        >
          <ThemedText
            type="nunitoBold"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "whitesmoke",
              fontSize: 24,
            }}
          >
            Continue Onward
          </ThemedText>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#069af3",
    justifyContent: "center",
    gap: 29,
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    color: "white",
  },
  details: {
    padding: 10,
  },
  button: {
    borderRadius: 30,
    height: 70,
    justifyContent: "center",
  },
});
