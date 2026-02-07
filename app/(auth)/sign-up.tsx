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
            <ThemedText type="nunitoBold" style={{ color: Colors.whiteBlue }}>
              Email
            </ThemedText>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="email@gmail.com"
          />
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold" style={{ color: Colors.whiteBlue }}>
              Password
            </ThemedText>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="password"
            secureTextEntry
          />
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold" style={{ color: Colors.whiteBlue }}>
              Confirm Password
            </ThemedText>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            placeholder="confirm password"
            secureTextEntry
          />

          <View style={{ alignItems: "flex-end" }}>
            <ThemedText type="link" onPress={() => router.push("./sign-in")}>
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
    justifyContent: "space-between",
    backgroundColor: Colors.blue,
    paddingBottom: 100,
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    color: Colors.whiteBlue,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.whiteBlue,
    borderRadius: 30,
    height: 80,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  inputForm: {
    gap: 15,
    marginHorizontal: 10,
    marginTop: 100,
  },
  input: {
    backgroundColor: "#999999",
    borderRadius: 15,
    height: 50,
    padding: 10,
  },
});
