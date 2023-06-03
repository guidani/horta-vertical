import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  DefaultTheme,
  FAB,
  PaperProvider,
  TextInput,
} from "react-native-paper";
import {Feather} from '@expo/vector-icons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  const [text, setText] = React.useState("");

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Horta Vertical - SETUP!</Text>
        <TextInput
          label="Email"
          value={text}
          style={styles.inputStyle}
          onChangeText={(text) => setText(text)}
        />
        <FAB
          icon="chevron-right"
          style={styles.fab}
          onPress={() => console.log("Pressed")}
        />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
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
