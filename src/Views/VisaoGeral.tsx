import { Feather } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import React, { useEffect, useState } from "react";

import database from "@react-native-firebase/database";
import { StyleSheet, View } from "react-native";
import { Divider, FAB, Text } from "react-native-paper";
import BtnFull from "../components/BtnFull";
import DisplayData from "../components/DisplayData";
import { Cultura } from "../domain/entities/cutura";
import { useCadastroStore } from "../stores/useCadastroStore";

export default function VisaoGeral({ navigation }: { navigation: any }) {
  const [humidadeValor, setHumidadeValor] = useState();
  const [temperaturaValor, setTemperaturaValor] = useState();
  const [luminosidadeValor, setLuminosidadeValor] = useState();
  const { nome, culturas } = useCadastroStore((state) => state.cadastro);
  const { adicionar_cultura } = useCadastroStore();

  useEffect(() => {
    const onHumidadeChange = database()
      .ref("/humidade")
      .on("value", (snapshot) => {
        setHumidadeValor(snapshot.val());
      });

    const onTempChange = database()
      .ref("/temperatura")
      .on("value", (snapshot) => {
        setTemperaturaValor(snapshot.val());
      });

    const onLuminosidadeChange = database()
      .ref("/luminosidade")
      .on("value", (snapshot) => {
        setLuminosidadeValor(snapshot.val());
      });

    return () => {
      database().ref("/humidade").off("value", onHumidadeChange);
      database().ref("/temperatura").off("value", onTempChange);
      database().ref("/luminosidade").off("value", onLuminosidadeChange);
    };
  }, []);

  async function searchUser() {
    const documents = await firestore()
      .collection("Users")
      .where("name", "==", nome)
      .get();
    if (documents.empty) {
      return;
    }
    documents.forEach((d) => {
      d.ref
        .collection("culturas")
        .get()
        .then((c) => {
          if (c.empty) {
          }
          c.forEach((h) => {
            adicionar_cultura(h.data() as Cultura);
          });
        });
    });
  }

  useEffect(() => {
    searchUser();
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
        <DisplayData
          label="Luminosidade (h)"
          data={luminosidadeValor}
          iconName={"thermometer"}
        />
        <DisplayData
          label="Temperatura (°C)"
          data={temperaturaValor}
          iconName={"sun"}
        />
        <DisplayData
          label="Humidade (%)"
          data={humidadeValor}
          iconName={"cloud"}
        />
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
