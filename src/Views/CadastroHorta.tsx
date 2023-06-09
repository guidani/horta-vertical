import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB, Text, TextInput } from "react-native-paper";
import { useCadastroStore } from "../stores/useCadastroStore";

// TODO: trabalhar mais essa tela
export default function CadastroHorta({ navigation }: { navigation: any }) {
  const [text, setText] = React.useState("");
  const { nome } = useCadastroStore((state) => state.cadastro);
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">Olá {nome},</Text>
      <Text variant="headlineSmall" style={styles.headerStyle}>
        dê um nome legal para sua horta
      </Text>
      <TextInput
        label="Um nome muito legal"
        maxLength={24}
        value={text}
        style={styles.inputStyle}
        onChangeText={(text) => setText(text)}
      />
      <FAB
        icon="chevron-right"
        style={styles.fab}
        onPress={() => {
          navigation.navigate("Culturas");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FFF4",
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  headerStyle: {
    marginBottom: 24,
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
