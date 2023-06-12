import { Feather } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FAB, Text } from "react-native-paper";
import BtnFull from "../components/BtnFull";
import { useCadastroStore } from "../stores/useCadastroStore";

export default function Culturas({ navigation }: { navigation: any }) {
  const { cadastro } = useCadastroStore();
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Culturas da Horta</Text>

      <FlatList
        data={cadastro?.culturas}
        renderItem={({ item }) => (
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
        disabled={cadastro.culturas.length >= 3 ? true : false}
        onPress={() => {
          navigation.navigate("CadastroCultura");
        }}
        style={
          cadastro.culturas.length >= 3
            ? styles.fab_save_disabled
            : styles.fab_save
        }
        icon={({ size }) => {
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
  fab_save_disabled: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#ccc",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6FFF4",
    gap: 4,
    paddingHorizontal: 8,
  },
});
