import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CadastroCultura({ navigation }: { navigation: any }) {
  const [lumenMin, setLumenMin] = React.useState<string>();
  const [lumenMax, setLumenMax] = React.useState<string>();
  const [humidadeMin, setHumidadeMin] = React.useState<string>();
  const [humidadeMax, setHumidadeMax] = React.useState<string>();
  const [tempMin, setTempMin] = React.useState<string>();
  const [tempMax, setTempMax] = React.useState<string>();

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
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <TextInput label={"Nome"} />
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
          console.log("Salvo no banco de dados!!!");
          navigation.goBack();
        }}
        style={styles.fab}
        icon={({ color, size }) => {
          return <Feather name={"save"} color={color} size={size} />;
        }}
      />
    </View>
    </SafeAreaView>
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
