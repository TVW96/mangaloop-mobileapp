import { View, Text } from "react-native";
import React from "react";

export default function ItemDetails() {
  const Data = [
    {
      id: 1,
      title: "YU YU Hakusho",
      author: "Yoshiro Togashi",
      price: 9.99,
      img: require("@/assets/images/yuyu.jpg"),
    },
  ];
  return (
    <View>
      <Text>item-details[id]</Text>
    </View>
  );
}
