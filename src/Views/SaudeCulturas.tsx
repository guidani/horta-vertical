import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, Text } from "react-native-paper";
import DisplaySaudeCultura from "../components/DisplaySaudeCultura";

export default function SaudeCulturas({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.headLineStyle}>
        Saúde Culturas
      </Text>
      <Divider />
      <ScrollView>
        <DisplaySaudeCultura />
        <Divider />
        <DisplaySaudeCultura />
        <Divider />
        <DisplaySaudeCultura />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FFF4",
    gap: 4,
    paddingHorizontal: 8,
  },
  headLineStyle: {
    padding: 8,
    backgroundColor: "#fff",
  },
});
