import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../../stores/useAuthStore";
import { useCadastroStore } from "../../stores/useCadastroStore";

export default function CadastroProprietario({
  navigation,
}: {
  navigation: any;
}) {
  const [text, setText] = React.useState("");
  const { update_name } = useCadastroStore();
  const { isAuthenticated, updateIsAuthenticated } = useAuthStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Cadastro do proprietario</Text>
        <TextInput
          label="Seu nome"
          value={text}
          style={styles.inputStyle}
          onChangeText={(text) => setText(text)}
        />
        <FAB
          icon="chevron-right"
          style={styles.fab}
          onPress={() => {
            update_name(text);
            updateIsAuthenticated();
          }}
          // onPress={() => update_name(text)}
        />
      </View>
    </SafeAreaView>
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
