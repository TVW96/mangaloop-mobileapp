import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/themed-text";
import SignOutButton from "@/components/social-auth-buttons/sign-out-button";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();

  const ButtonItem = ({ title }: { title: string }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.push(`./${title}`)}
    >
      <ThemedText type="alfa" style={{ color: "white", fontSize: 18 }}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </ThemedText>
    </TouchableOpacity>
  );

  const ProfileHeader = () => {
    return (
      <View>
        <View>
          <ButtonItem title="shelf" />
          <ButtonItem title="shelf" />
          <ButtonItem title="shelf" />
          <ButtonItem title="shelf" />
        </View>
        <SignOutButton />
      </View>
    );
  };

  return <ProfileHeader />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 1,
    padding: 10,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    color: "black",
    maxWidth: 350,
    lineHeight: 50,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "rgb(0, 0, 0, .5)",
    width: 128,
    height: 24,
    alignItems: "center",
    borderRadius: 5,
    padding: 1,
    margin: 10,
  },
  headerContainer: {
    backgroundColor: "#184B44",
    borderBottomLeftRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
