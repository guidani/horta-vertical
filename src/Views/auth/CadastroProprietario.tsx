import firestore from "@react-native-firebase/firestore";
import React from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import { FAB, Text, TextInput } from "react-native-paper";
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
  function showToast() {
    ToastAndroid.show("Por favor, digite seu nome!", ToastAndroid.SHORT);
  }

  async function searchUser() {
    const documents = await firestore()
      .collection("Users")
      .where("name", "==", text)
      .get();
    if (documents.empty) {
      console.log("Nada encontrado");
      return;
    }
    documents.forEach((d) => {
      d.ref
        .collection("culturas")
        .get()
        .then((c) => {
          if (c.empty) {
            console.log("Nenhuma cultura");
          }
          c.forEach((h) => {
            console.log("H ID", h.id);
            console.log("H DOCS", h.data());
          });
        });
    });
    // .then((documentSnapshot) => {
    //   if (documentSnapshot.empty) {
    //     console.log("Nada encontrado");
    //     return;
    //   }
    //   documentSnapshot.forEach((doc) => {
    //     console.log("ID", doc.id);
    //     console.log("Data: ", doc.data());
    //   });
    // });
  }
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.headerStyle}>
        Cadastro
      </Text>
      <TextInput
        label="Seu nome"
        maxLength={24}
        value={text}
        style={styles.inputStyle}
        onChangeText={(text) => setText(text)}
      />
      <FAB
        icon="chevron-right"
        style={styles.fab}
        onPress={() => {
          if (!text) {
            showToast();
            return;
          }
          update_name(text);
          updateIsAuthenticated();
          searchUser();
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
