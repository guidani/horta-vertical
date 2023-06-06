import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function SaudeCulturas({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text
        variant="headlineSmall"
        style={{
          padding: 8,
          backgroundColor: "#fff",
          borderBottomWidth: 2,
          borderBottomColor: "#ccc",
        }}
      >
        Saúde Culturas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FFF4",
    gap: 4,
    paddingHorizontal: 8,
  },
});
