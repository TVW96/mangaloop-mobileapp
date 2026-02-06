// app/auth/callback.tsx
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Linking from "expo-linking";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";

export default function AuthCallback() {
  const url = Linking.useURL();
  const router = useRouter();
  const [status, setStatus] = useState("Waiting for link...");

  useEffect(() => {
    if (!url) return;

    (async () => {
      try {
        setStatus("Processing callback...");

        const { queryParams } = Linking.parse(url);

        if (!queryParams) {
          setStatus("No query params found.");
          return;
        }

        // ✅ Case 1: PKCE / email confirmation (most common)
        if (queryParams.code) {
          const { error } = await supabase.auth.exchangeCodeForSession(
            String(queryParams.code),
          );
          if (error) throw error;

          setStatus("Email confirmed. Session established.");
          router.replace("/(pages)");
          return;
        }

        // ✅ Case 2: token-based link (older flows)
        if (queryParams.access_token && queryParams.refresh_token) {
          const { error } = await supabase.auth.setSession({
            access_token: String(queryParams.access_token),
            refresh_token: String(queryParams.refresh_token),
          });
          if (error) throw error;

          setStatus("Signed in successfully.");
          router.replace("/(pages)");
          return;
        }

        setStatus("No auth data found in link.");
      } catch (e: any) {
        setStatus(`Error: ${e.message ?? String(e)}`);
      }
    })();
  }, [url]);

  return (
    <View style={{ padding: 16 }}>
      <Text>{status}</Text>
    </View>
  );
}
