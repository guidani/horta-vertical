import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import { FAB, Text, TextInput } from "react-native-paper";
import { useCadastroStore } from "../stores/useCadastroStore";
export default function CadastroCultura({ navigation }: { navigation: any }) {
  const { adicionar_cultura } = useCadastroStore();
  const [name, setName] = React.useState<string>("");
  const [lumenMin, setLumenMin] = React.useState<string | undefined>("");
  const [lumenMax, setLumenMax] = React.useState<string | undefined>("");
  const [humidadeMin, setHumidadeMin] = React.useState<string | undefined>("");
  const [humidadeMax, setHumidadeMax] = React.useState<string | undefined>("");
  const [tempMin, setTempMin] = React.useState<string | undefined>("");
  const [tempMax, setTempMax] = React.useState<string | undefined>("");

  React.useEffect(() => {
    // Alterar nos estados
    setLumenMin("0");
    setLumenMax("0");
    setHumidadeMin("0");
    setHumidadeMax("0");
    setTempMin("0");
    setTempMax("0");
    // Salvar os dados no banco
  }, []);
  function showToast() {
    ToastAndroid.show("Dê um nome para a cultura!", ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <Text variant="labelLarge">Nome</Text>
      <TextInput
        label={"Nome da cultura"}
        onChangeText={(text) => setName(text)}
      />
      <View>
        <Text variant="labelLarge">Luminosidade (L)</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <TextInput
            label={"Min"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLumenMin(text)}
          />
          <TextInput
            label={"Máx"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLumenMax(text)}
          />
        </View>
        <Text variant="labelLarge">Humidade (%)</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <TextInput
            label={"Min"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setHumidadeMin(text)}
          />
          <TextInput
            label={"Máx"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setHumidadeMax(text)}
          />
        </View>
        <Text variant="labelLarge">Temperatura (ºC)</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <TextInput
            label={"Min"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setTempMin(text)}
          />
          <TextInput
            label={"Máx"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setTempMax(text)}
          />
        </View>
      </View>

      <FAB
        onPress={() => {
          if (!name) {
            showToast();
            return;
          }
          adicionar_cultura({
            id: Math.random().toString(),
            nome: name,
            humidadeMaxima: humidadeMax,
            humidadeMinima: humidadeMin,
            luminosidadeMaxima: lumenMax,
            luminosidadeMinima: lumenMin,
            temperaturaMaxima: tempMax,
            temperaturaMinima: tempMin,
          });
          navigation.goBack();
        }}
        style={styles.fab}
        icon={({ color, size }) => {
          return <Feather name={"save"} color={color} size={size} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
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
