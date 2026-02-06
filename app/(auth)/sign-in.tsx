import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/lib/supabase";

export default function SignIn() {
  const router = useRouter();
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.replace("/(pages)");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <ThemedText
          type="alfa"
          style={styles.title}
          onPress={() => router.dismissTo("../Intro")}
        >
          Sign-In
        </ThemedText>
        <View style={styles.inputForm}>
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold">Name</ThemedText>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="domonCashew@gmail.com"
          />
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold">Password</ThemedText>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="password"
            secureTextEntry
          />
          <View style={{ alignItems: "flex-end" }}>
            <ThemedText type="link" onPress={() => router.push("./sign-up")}>
              Sign-Up
            </ThemedText>
          </View>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <ThemedText
              type="nunitoBold"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Sign-In
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
    color: "#184B44",
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#184B44",
    borderRadius: 30,
    height: 80,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  inputForm: {
    gap: 15,
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: "#999999",
    borderRadius: 15,
    height: 50,
    padding: 10,
  },
});
