import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/lib/supabase";
import { Colors } from "@/constants/theme";

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
      <SafeAreaView style={styles.container}>
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
            <ThemedText
              type="nunitoBold"
              style={{ color: "blue" }}
              onPress={() => router.push("./sign-up")}
            >
              Don't have an account?
            </ThemedText>
          </View>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/profile")} // replace with handleSignIn
          >
            <ThemedText
              type="nunitoBold"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
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
    justifyContent: "center",
    backgroundColor: "#069af3",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    color: "white",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 30,
    height: 70,
    justifyContent: "center",
  },
  inputForm: {
    gap: 15,
    margin: 10,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 50,
    padding: 10,
  },
});
