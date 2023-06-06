import { Feather } from "@expo/vector-icons";
import React from "react";

import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { Button, FAB, Text } from "react-native-paper";

const DATA = [
  {
    id: "1",
    title: "Cebolinha",
  },
  {
    id: "2",
    title: "Coentro",
  },
  {
    id: "3",
    title: "Hortelã",
  },
];

export default function Culturas({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineSmall">Culturas da Horta</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Button
            mode="elevated"
            onPress={() =>
              navigation.navigate("EditarCultura", { itemId: item.id })
            }
            buttonColor="#7CD8A4"
            textColor="#000"
            icon={({ color, size }) => {
              return <Feather name={"arrow-right"} color={color} size={size} />;
            }}
            style={{
              borderRadius: 4,
              height: 64,
              justifyContent: "center",
              marginBottom: 4,
            }}
            contentStyle={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Text variant="headlineSmall">{item.title}</Text>
          </Button>
        )}
        keyExtractor={(item) => item.id}
      />
      <FAB
        onPress={() => {
          console.log("Salvo no banco de dados!!!");
          navigation.navigate("CadastroCultura");
        }}
        style={styles.fab_save}
        icon={({ color, size }) => {
          return <Feather name={"plus"} color={"#fff"} size={size} />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fab_save: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#328777",
  },
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
