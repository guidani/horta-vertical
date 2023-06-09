import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  FAB,
  Modal,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
export default function EditarCultura({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  // TODO: Criar custom hooks
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

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 8 };

  const theme = useTheme();

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
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>Tem certeza que deseja excluir a Cultura?</Text>
            <Text>{itemId}</Text>
            {/* TODO */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                mode="outlined"
                onPress={() => console.log("Deletado")}
                textColor="#000"
              >
                SIM
              </Button>
              <Button
                mode="contained"
                onPress={() => hideModal()}
                buttonColor={theme.colors.primary}
              >
                NÃO
              </Button>
            </View>
          </Modal>
        </Portal>
      </View>

      <FAB
        onPress={() => {
          console.log("Deletado!!!");
          showModal();
        }}
        style={[styles.fab_del, { backgroundColor: theme.colors.error }]}
        icon={({ color, size }) => {
          return <Feather name={"trash"} color={"#fff"} size={size} />;
        }}
      />
      <FAB
        onPress={() => {
          console.log("Salvo no banco de dados!!!");
          navigation.goBack();
        }}
        style={[styles.fab_save, { backgroundColor: theme.colors.primary }]}
        icon={({ color, size }) => {
          return <Feather name={"save"} color={"#fff"} size={size} />;
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
  },
  fab_del: {
    position: "absolute",
    margin: 16,
    left: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#F6FFF4",
    gap: 4,
    paddingHorizontal: 8,
    paddingTop: 8,
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
