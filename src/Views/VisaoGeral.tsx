import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import BtnFull from "../components/BtnFull";
import DisplayData from "../components/DisplayData";
import { useCadastroStore } from "../stores/useCadastroStore";

export default function VisaoGeral({ navigation }: { navigation: any }) {
  const { nome, hortas } = useCadastroStore((state) => state.cadastro);
  const total_de_hortas = hortas?.length;
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Olá, {nome}</Text>
      <Text variant="headlineSmall">Total de hortas, {total_de_hortas}</Text>

      <View style={styles.displayDataSection}>
        <DisplayData label="Luminosidade" data={99} iconName={"thermometer"} />
        <DisplayData label="Temperatura" data={99} iconName={"sun"} />
        <DisplayData label="Humidade" data={99} iconName={"cloud"} />
      </View>
      <Divider style={{ marginVertical: 4 }} />
      <BtnFull
        label="Ver culturas"
        onPress={() => navigation.navigate("Culturas")}
      />
      <BtnFull
        onPress={() => navigation.navigate("SaudeDasCulturas")}
        label="Ver saúde das culturas"
      />
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
