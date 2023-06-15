import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";

export default function ChipMehFace() {
  return (
    <View>
      <Chip
        icon={({ color, size }) => {
          return <Feather name={"meh"} color={"#fff"} size={size} />;
        }}
        onPress={() => {}}
        compact={true}
        style={{
          backgroundColor: "#F3DE2C",
        }}
      >
        Meh
      </Chip>
    </View>
  );
}
