import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function NenhumaHorta() {
  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">
        Você ainda não tem nenhuma horta cadastrada.
      </Text>
      <Text variant="bodyLarge">
        Cadastre uma horta pressionando o botão abaixo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FFF4",
    paddingHorizontal: 8,
  },
  displayDataSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: 4,
    backgroundColor: "#F6FFF4",
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  inputStyle: {
    width: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
