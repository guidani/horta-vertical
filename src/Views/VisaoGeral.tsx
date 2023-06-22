import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

import database from "@react-native-firebase/database";
import { StyleSheet, View } from "react-native";
import { Divider, FAB, Text } from "react-native-paper";
import BtnFull from "../components/BtnFull";
import DisplayData from "../components/DisplayData";
import { useCadastroStore } from "../stores/useCadastroStore";

export default function VisaoGeral({ navigation }: { navigation: any }) {
  const [humidadeValor, setHumidadeValor] = useState();
  const { nome, culturas } = useCadastroStore((state) => state.cadastro);
  

  useEffect(() => {
    const onValueChange = database()
      .ref("/humidade")
      .on("value", (snapshot) => {
        
        setHumidadeValor(snapshot.val())
      });

    return () => database().ref("/humidade").off("value", onValueChange);
  }, []);

  if (culturas?.length === 0) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text variant="bodyLarge">
          Para começar você pode apertar no botão abaixo para adicionar as
          culturas.
        </Text>
        <FAB
          onPress={() => {
            navigation.navigate("CadastroCultura");
          }}
          style={styles.fab_save}
          icon={({ color, size }) => {
            return <Feather name={"plus"} color={"#fff"} size={size} />;
          }}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={{ marginVertical: 8 }}>
        Olá, {nome}
      </Text>

      <View style={styles.displayDataSection}>
        <DisplayData label="Luminosidade" data={99} iconName={"thermometer"} />
        <DisplayData label="Temperatura" data={99} iconName={"sun"} />
        <DisplayData label="Humidade" data={humidadeValor} iconName={"cloud"} />
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
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 4,
    backgroundColor: "#F6FFF4",
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
  fab_save: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#328777",
  },
});
