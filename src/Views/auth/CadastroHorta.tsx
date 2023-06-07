import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCadastroStore } from "../../stores/useCadastroStore";

// TODO: trabalhar mais essa tela
export default function CadastroHorta({ navigation }: { navigation: any }) {
  const [text, setText] = React.useState("");
  const { nome } = useCadastroStore((state) => state.cadastro);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text variant="headlineMedium">Olá, {nome}</Text>
        <Text variant="headlineSmall">Dê um nome legal para sua Horta.</Text>

        <TextInput
          label="Minha horta"
          value={text}
          style={styles.inputStyle}
          onChangeText={(text) => setText(text)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            width: "100%",
            margin: 8,
            bottom: 0,
            borderWidth: 1,
            borderColor: "red",
          }}
        >
          <Button
            mode="outlined"
            onPress={() => {
              console.log("Deletado");
            }}
            textColor="#000"
          >
            Depois
          </Button>
          <Button mode="contained" onPress={() => {}} buttonColor="#328777">
            OK
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  inputStyle: {
    width: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
