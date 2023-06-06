import { Feather } from "@expo/vector-icons";
import React from "react";
import { Button, Text } from "react-native-paper";

type Props = {
  label: string | undefined;
  onPress: () => void | undefined;
};

export default function BtnFull({ onPress, label }: Props) {
  return (
    <Button
      mode="elevated"
      onPress={onPress}
      buttonColor="#7CD8A4"
      textColor="#000"
      icon={({ color, size }) => {
        return <Feather name={"arrow-right"} color={color} size={size} />;
      }}
      style={{
        borderRadius: 4,
      }}
      contentStyle={{
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text variant="bodyLarge">{label}</Text>
    </Button>
  );
}
