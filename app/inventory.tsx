import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { ImageBackground } from "expo-image";
import Data from "@/manga_archive";

export default function BookStore() {
  const router = useRouter();

  const ProfileHeader = () => {
    const styles = StyleSheet.create({
      profileHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      headerBtnGroup: {
        flexDirection: "column",
        gap: 5,
        justifyContent: "center",
      },
      headerBtn: {
        height: 22,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
      },
    });

    const ButtonItem = ({ title }: { title: string }) => (
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => router.push(`./${title}`)}
      >
        <ThemedText type="nunitoBold" style={{ color: "white", fontSize: 16 }}>
          Search by {title.charAt(0).toUpperCase() + title.slice(1)}
        </ThemedText>
      </TouchableOpacity>
    );
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
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                onPress={() => router.push("/profile")}
              >
                <Image
                  source={require("@/assets/images/mangaLoop_scribe.png")}
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                />
                <ThemedText type="nunitoBold">TVW96</ThemedText>
              </TouchableOpacity>

              <ThemedText
                onPress={() => router.push("/coin")}
                type="nunitoBold"
                style={{ color: Colors.gold }}
              >
                1200
              </ThemedText>
            </View>
          </View>
          <View style={styles.headerBtnGroup}>
            <ButtonItem title="Author" />
            <ButtonItem title="Series" />
          </View>
        </View>
      </View>
    );
  };

  type Item = {
    id: number;
    title: string;
    author: string;
    price: number;
    img: any;
  };

  // test ID path
  const itemID = 1234;
  const handleItemPress = (id: number) => {
    router.push({
      pathname: "/item-details/[itemID]",
      params: { itemID: itemID },
    });
  };

  const Product = (item: Item) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress(item.id)}>
        <ImageBackground
          source={item.img}
          style={{ width: 150, height: 200, padding: 10 }}
        >
          <ThemedText
            type="nunitoBold"
            style={{ color: "white", backgroundColor: "black" }}
          >
            {item.title}
          </ThemedText>
          <ThemedText
            type="nunitoBold"
            style={{ color: "white", backgroundColor: "black" }}
          >
            {item.author}
          </ThemedText>
          <ThemedText
            type="nunitoBold"
            style={{ color: Colors.gold, backgroundColor: "black" }}
          >
            Coins: {item.price}
          </ThemedText>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const Products: Item[] = Data;

  const ProductsList = () => {
    return (
      <ScrollView>
        <View
          style={{
            gap: 5,
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            padding: 10,
            paddingHorizontal: 30,
          }}
        >
          {Products.map((item, index) => (
            <Product key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <ProfileHeader />
      </View>
      <View style={styles.body}>
        <ProductsList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#069af3",
    borderBottomLeftRadius: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 50,
    width: "100%",
  },
  body: {
    padding: 10,
    overflow: "hidden",
  },
});
