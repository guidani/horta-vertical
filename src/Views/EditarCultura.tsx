import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function EditarCultura({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text variant="bodySmall">EditarCultura</Text>
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
  headLineStyle: {
    padding: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  headerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
