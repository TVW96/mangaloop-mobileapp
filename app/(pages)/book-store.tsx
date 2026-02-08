import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import SignOutButton from "@/components/social-auth-buttons/sign-out-button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";

export default function BookStore() {
  const router = useRouter();

  const ButtonItem = ({ title }: { title: string }) => (
    <TouchableOpacity
      style={styles.headerBtn}
      onPress={() => router.push(`./${title}`)}
    >
      <ThemedText type="alfa" style={{ color: "white", fontSize: 18 }}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </ThemedText>
    </TouchableOpacity>
  );

  const ProfileHeader = () => {
    return (
      <View style={{ justifyContent: "space-between" }}>
        <View style={styles.profileHeader}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Image
              source={require("@/assets/images/mangaLoop_scribe.png")}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
            <ThemedText type="nunitoBold">TVW96</ThemedText>
            <ThemedText type="nunito">User since Feb 2026</ThemedText>
            <ThemedText type="nunitoBold" style={{ color: Colors.gold }}>
              0
            </ThemedText>
          </View>

          <View style={styles.headerBtnGroup}>
            <SignOutButton />
            <ButtonItem title="shelf" />
            <ButtonItem title="shelf" />
            <ButtonItem title="shelf" />
          </View>
        </View>
      </View>
    );
  };

  const Data = [
    {
      id: 1,
      title: "YU YU Hakusho",
      author: "Yoshiro Togashi",
      price: 9.99,
      img: require("@/assets/images/yuyu.jpg"),
    },
    {
      id: 1,
      title: "Dragon Ball",
      author: "Akira Toriyama",
      price: 9.99,
      img: require("@/assets/images/dragon.jpg"),
    },
    {
      id: 1,
      title: "Dragon Ball",
      author: "Akira Toriyama",
      price: 9.99,
      img: require("@/assets/images/dragon.jpg"),
    },
    {
      id: 1,
      title: "Dragon Ball",
      author: "Akira Toriyama",
      price: 9.99,
      img: require("@/assets/images/dragon.jpg"),
    },
    {
      id: 1,
      title: "Dragon Ball",
      author: "Akira Toriyama",
      price: 9.99,
      img: require("@/assets/images/dragon.jpg"),
    },
  ];

  type Item = {
    title: string;
    author: string;
    price: number;
    img: string;
  };

  const Products: Item[] = Data;
  const Product = (item: Item) => {
    return (
      <ImageBackground
        source={item.img}
        resizeMode="cover"
        style={{
          height: 200,
          width: 150,
          borderRadius: 5,
          overflow: "hidden",
        }}
        imageStyle={{ opacity: 0.8 }}
      >
        <ThemedText type="nunitoBold" style={{ color: Colors.green }}>
          {item.title}
        </ThemedText>
        <ThemedText type="nunitoBold" style={{ color: Colors.blue }}>
          {item.author}
        </ThemedText>
        <ThemedText type="nunitoBold" style={{ color: Colors.gold }}>
          {item.price}
        </ThemedText>
      </ImageBackground>
    );
  };

  const ProductsList = () => {
    return (
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {Products.map((item, index) => (
            <Product key={index} {...item} />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <SafeAreaView style={styles.headerContainer}>
          <ProfileHeader />
        </SafeAreaView>
        <View style={styles.body}>
          <ProductsList />
        </View>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 9,
    paddingHorizontal: 10,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    marginTop: 130,
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    color: "black",
    maxWidth: 350,
    lineHeight: 50,
    paddingTop: 40,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtnGroup: {
    flexDirection: "column",
    gap: 20,
  },
  headerBtn: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: 22,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  headerContainer: {
    backgroundColor: "#184B44",
    borderBottomLeftRadius: 40,
    paddingHorizontal: 20,
  },
});
