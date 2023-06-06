import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import DisplayData from "../components/DisplayData";

export default function VisaoGeral({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.displayDataSection}>
        <DisplayData label="Luminosidade" data={99} iconName={"thermometer"} />
        <DisplayData label="Temperatura" data={99} iconName={"sun"} />
        <DisplayData label="Humidade" data={99} iconName={"cloud"} />
      </View>
      <Button
        mode="elevated"
        onPress={() => navigation.navigate("SaudeDasCulturas")}
        buttonColor="#7CD8A4"
        textColor="#000"
        icon={({ color, size }) => {
          return <Feather name={"arrow-right"} color={color} size={size} />;
        }}
        style={{
          borderRadius: 4,
          height: 64,
          justifyContent: "center",
        }}
        contentStyle={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      >
        Ver saúde das culturas
      </Button>
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
