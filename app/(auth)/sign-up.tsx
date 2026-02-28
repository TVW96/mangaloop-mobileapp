import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/lib/supabase";
import { Colors } from "@/constants/theme";

export default function SignUp() {
  const router = useRouter();
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

  const sendEmailConfirm = async () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "mangaloop://auth/callback",
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    console.log("email sent to " + email);
    router.push({ pathname: "/(auth)/new-user", params: { email } });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ThemedText
          type="alfa"
          style={styles.title}
          onPress={() => router.dismissTo("../Intro")}
        >
          Sign-Up
        </ThemedText>

        <View style={styles.inputForm}>
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold">Email</ThemedText>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="email@gmail.com"
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
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold">Confirm Password</ThemedText>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            placeholder="confirm password"
            secureTextEntry
          />
          <View style={{ alignItems: "flex-end" }}>
            <ThemedText
              type="nunitoBold"
              style={{ color: "blue" }}
              onPress={() => router.push("./sign-in")}
            >
              Already have an account?
            </ThemedText>
          </View>
        </View>

        <View style={{ justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => sendEmailConfirm()}
          >
            <ThemedText
              type="nunitoBold"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Sign-Up
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
