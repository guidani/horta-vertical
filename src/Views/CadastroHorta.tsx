import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB, TextInput } from "react-native-paper";

export default function CadastroHorta({ navigation }: { navigation: any }) {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput
        label="Dê um nome legal para sua nova horta"
        value={text}
        style={styles.inputStyle}
        onChangeText={(text) => setText(text)}
      />
      <FAB
        icon="chevron-right"
        style={styles.fab}
        onPress={() => navigation.navigate("VisaoGeral")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
