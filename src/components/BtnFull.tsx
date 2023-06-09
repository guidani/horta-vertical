import { Feather } from "@expo/vector-icons";
import React from "react";
import { Button, Text } from "react-native-paper";

type Props = {
  label: string | undefined;
  onPress: () => void | undefined;
};

export default function BtnFull({ onPress, label, ...props }: Props) {
  return (
    <Button
      mode="elevated"
      onPress={onPress}
      icon={({ color, size }) => {
        return <Feather name={"arrow-right"} color={color} size={size} />;
      }}
      style={{
        borderRadius: 4,
        marginBottom: 4,
      }}
      contentStyle={{
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      {...props}
    >
      <Text variant="bodyLarge">{label}</Text>
    </Button>
  );
}
