import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import DisplaySaudeCultura from "../components/DisplaySaudeCultura";
import { useCadastroStore } from "../stores/useCadastroStore";

export default function SaudeCulturas({ navigation }: { navigation: any }) {
  const { cadastro } = useCadastroStore();
  return (
    <View style={styles.container}>
      <FlatList
        data={cadastro?.culturas}
        renderItem={({ item }) => (
          <DisplaySaudeCultura
            navigation={navigation}
            itemId={item.id}
            nome={item.nome}
            humidadeMaxima={item.humidadeMaxima}
            humidadeMinima={item.humidadeMinima}
            luminosidadeMaxima={item.luminosidadeMaxima}
            luminosidadeMinima={item.luminosidadeMinima}
            temperaturaMaxima={item.temperaturaMaxima}
            temperaturaMinima={item.temperaturaMinima}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FFF4",
    gap: 4,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
});
