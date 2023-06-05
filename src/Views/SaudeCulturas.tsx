import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";

export default function SaudeCulturas({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Saude Culturas</Text>

      <FAB
        icon="chevron-right"
        style={styles.fab}
        onPress={() => navigation.navigate("CadastroHorta")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
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
