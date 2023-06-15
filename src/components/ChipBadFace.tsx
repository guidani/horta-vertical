import { Feather } from "@expo/vector-icons";
import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

export default function ChipBadFace() {
  return (
    <View>
      <Chip
            icon={({ color, size }) => {
              return <Feather name={"frown"} color={"#fff"} size={size} />;
            }}
            onPress={() => {}}
            compact={true}
            style={{
              backgroundColor: "#FB1607",
            }}
          >
            Meh
          </Chip>
    </View>
  )
}