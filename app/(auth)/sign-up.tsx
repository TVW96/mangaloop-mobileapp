import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const router = useRouter();
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const [form, onChangeForm] = React.useState({
    email,
    password,
    confirmPassword,
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <ThemedText
          type="alfa"
          style={styles.title}
          onPress={() => router.dismissTo("../Intro")}
        >
          Sign-Up
        </ThemedText>
        <View style={styles.inputForm}>
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold">Name</ThemedText>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="coinMafia@gmail.com"
          />
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold">Password</ThemedText>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="coinMafia@gmail.com"
          />
          <View style={{ paddingLeft: 15 }}>
            <ThemedText type="nunitoBold">Confirm Password</ThemedText>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="password"
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
            onPress={() => router.push("./Intro")}
          >
            <ThemedText
              type="nunitoBold"
              style={{
                textAlign: "center",
                fontWeight: "bold",
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
