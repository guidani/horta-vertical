import { Feather } from "@expo/vector-icons";
import React from "react";

import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { FAB, Text } from "react-native-paper";
import BtnFull from "../components/BtnFull";

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
          <BtnFull
            label={item.title}
            onPress={() =>
              navigation.navigate("EditarCultura", { itemId: item.id })
            }
          />
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
});
