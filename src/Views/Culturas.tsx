import { Feather } from "@expo/vector-icons";
import React from "react";

import { FlatList, StyleSheet, View } from "react-native";
import { FAB, Text } from "react-native-paper";
import BtnFull from "../components/BtnFull";
import { useCadastroStore } from "../stores/useCadastroStore";

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
  const { cadastro } = useCadastroStore();
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Culturas da Horta</Text>
      {cadastro.culturas?.map((cultura, index) => {
        return <Text key={cultura.id}>{cultura.nome}</Text>;
      })}
      <FlatList
        data={cadastro.culturas}
        renderItem={({ item, index }) => (
          <BtnFull
            label={item.nome}
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
    </View>
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
