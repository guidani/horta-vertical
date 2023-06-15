import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Chip, Divider, IconButton, Text } from "react-native-paper";

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
        <Text>Atual: 8</Text>
      </View>
      <View>
        <Text variant="titleMedium">Humidade</Text>
        <Text>Min: {humidadeMinima}</Text>
        <Text>Max: {humidadeMaxima}</Text>
        <Text>Atual: 8</Text>
      </View>
      <View>
        <Text variant="titleMedium">Temperatura</Text>
        <Text>Min: {temperaturaMinima}</Text>
        <Text>Max: {temperaturaMaxima}</Text>
        <Text>Atual: 8</Text>
      </View>
      <Divider />
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
