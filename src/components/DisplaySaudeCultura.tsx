import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Chip, Divider, IconButton, Text } from "react-native-paper";

import database from "@react-native-firebase/database";

export default function DisplaySaudeCultura({
  navigation,
  itemId,
  nome,
  luminosidadeMinima,
  luminosidadeMaxima,
  temperaturaMinima,
  temperaturaMaxima,
  humidadeMinima,
  humidadeMaxima,
}: {
  navigation: any;
  itemId: string | number;
  nome: string | undefined;
  luminosidadeMinima?: number | string | undefined;
  luminosidadeMaxima?: number | string | undefined;
  temperaturaMinima?: number | string | undefined;
  temperaturaMaxima?: number | string | undefined;
  humidadeMinima?: number | string | undefined;
  humidadeMaxima?: number | string | undefined;
}) {
  const [humidadeValor, setHumidadeValor] = useState();
  const [temperaturaValor, setTemperaturaValor] = useState();
  const [luminosidadeValor, setLuminosidadeValor] = useState();

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
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text variant="headlineSmall">{nome}</Text>
        <View style={styles.btnInline}>
          <IconButton
            icon={({ color, size }) => {
              return <Feather name={"settings"} color={"#fff"} size={size} />;
            }}
            onPress={() =>
              navigation.navigate("EditarCultura", { itemId: itemId })
            }
            style={{
              backgroundColor: "#328777",
            }}
          />
          <Chip
            icon={({ color, size }) => {
              return <Feather name={"smile"} color={"#fff"} size={size} />;
            }}
            onPress={() => {}}
            compact={true}
            style={{
              backgroundColor: "#328777",
            }}
          >
            Boa
          </Chip>
        </View>
      </View>
      <View>
        <Text variant="titleMedium">Luminosidade</Text>
        <Text>Min: {luminosidadeMinima}</Text>
        <Text>Max: {luminosidadeMaxima}</Text>
        <Text>Atual: {luminosidadeValor}</Text>
      </View>
      <View>
        <Text variant="titleMedium">Humidade</Text>
        <Text>Min: {humidadeMinima}</Text>
        <Text>Max: {humidadeMaxima}</Text>
        <Text>Atual: {humidadeValor}</Text>
      </View>
      <View>
        <Text variant="titleMedium">Temperatura</Text>
        <Text>Min: {temperaturaMinima}</Text>
        <Text>Max: {temperaturaMaxima}</Text>
        <Text>Atual: {temperaturaValor}</Text>
      </View>
      <Divider style={{ marginVertical: 8 }} />
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
  btnInline: {
    display: "flex",
    flexDirection: "row",
  },
});
