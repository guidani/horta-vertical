import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";

export default function ChipSmileFace() {
  return (
    <View>
      <Chip
        icon={({ color, size }) => {
          return <Feather name={"smile"} color={"#fff"} size={size} />;
        }}
        onPress={() => {}}
        compact={true}
        style={{
          backgroundColor: "#328777",
        }}
      >
        Boa
      </Chip>
    </View>
  );
}
