import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB, Text, TextInput } from "react-native-paper";
export default function EditarCultura({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { itemId } = route.params;
  const [lumenMin, setLumenMin] = React.useState<string | undefined>(undefined);
  const [lumenMax, setLumenMax] = React.useState<string | undefined>(undefined);
  const [humidadeMin, setHumidadeMin] = React.useState<string | undefined>(
    undefined
  );
  const [humidadeMax, setHumidadeMax] = React.useState<string | undefined>(
    undefined
  );
  const [tempMin, setTempMin] = React.useState<string | undefined>(undefined);
  const [tempMax, setTempMax] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    // Carregar os dados do banco
    setLumenMin("0");
    setLumenMax("0");
    setHumidadeMin("0");
    setHumidadeMax("0");
    setTempMin("0");
    setTempMax("0");
    // Alterar nos estados
  }, []);
  return (
    <View style={styles.container}>
      <Text variant="bodySmall">EditarCultura</Text>
      <Text variant="bodyLarge">{itemId}</Text>
      <TextInput label={"Nome"} />
      <View>
        <Text variant="labelLarge">Luminosidade (L)</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <TextInput
            label={"Min"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLumenMin(text)}
            value={lumenMin}
          />
          <TextInput
            label={"Máx"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLumenMax(text)}
            value={lumenMax}
          />
        </View>
        <Text variant="labelLarge">Humidade (%)</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <TextInput
            label={"Min"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setHumidadeMin(text)}
            value={humidadeMin}
          />
          <TextInput
            label={"Máx"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setHumidadeMax(text)}
            value={humidadeMax}
          />
        </View>
        <Text variant="labelLarge">Temperatura (ºC)</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <TextInput
            label={"Min"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setTempMin(text)}
            value={tempMin}
          />
          <TextInput
            label={"Máx"}
            style={{ flex: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setTempMax(text)}
            value={tempMax}
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
