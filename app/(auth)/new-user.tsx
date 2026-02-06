import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/lib/supabase";

export default function NewUser() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email?: string }>();
  const [resendTimer, setResendTimer] = useState(15);
  const resendEmail = async () => {
    if (resendTimer > 0) return;
    try {
      if (!email) {
        alert("Missing email address.");
        return;
      }

      const { error } = await supabase.auth.resend({
        type: "signup",
        email: String(email),
        options: {
          emailRedirectTo: "mangaloop://auth/callback",
        },
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("email sent");
      setResendTimer(15);
    } catch {
      console.log("failed to send email");
    }
  };

  useEffect(() => {
    if (resendTimer <= 0) return;

    const timerId = setInterval(() => {
      setResendTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [resendTimer]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 4, justifyContent: "space-between" }}>
        <View style={styles.container}>
          <ThemedText
            type="alfa"
            style={{
              fontSize: 48,
              color: "white",
              paddingLeft: 10,
            }}
            onPress={() => router.back()}
          >
            Back
          </ThemedText>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-evenly",
              flex: 1,
            }}
          >
            <View>
              <View>
                <ThemedText
                  type="nunitoBold"
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  email sent
                </ThemedText>
                <ThemedText
                  type="nunito"
                  style={{ maxWidth: 300, color: "white", textAlign: "center" }}
                >
                  Confirm email address to activate your account
                </ThemedText>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <ThemedText
                type="link"
                style={{
                  fontWeight: "bold",
                  fontSize: resendTimer <= 0 ? 18 : 16,
                  lineHeight: 0,
                }}
                onPress={() => resendEmail()}
              >
                press to resend
              </ThemedText>
              <ThemedText
                type="nunitoItalic"
                style={{
                  lineHeight: 0,
                  color: "white",
                }}
              >
                {resendTimer <= 0
                  ? null
                  : `can send again in ${resendTimer} secs`}
              </ThemedText>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.email}>
        <TouchableOpacity style={styles.button}>
          <ThemedText
            type="alfa"
            style={{
              textAlign: "center",
              fontSize: 48,
            }}
            onPress={() => Linking.openURL("https://gmail.com")}
          >
            Go to email
          </ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    backgroundColor: "#184B44",
  },
  email: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#A8FFF9",
    height: 175,
    borderRadius: 45,
    justifyContent: "center",
  },
});
