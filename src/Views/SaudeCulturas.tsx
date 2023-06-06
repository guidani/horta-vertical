import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DisplaySaudeCultura from "../components/DisplaySaudeCultura";

export default function SaudeCulturas({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <DisplaySaudeCultura navigation={navigation} itemId={1} />
        <DisplaySaudeCultura navigation={navigation} itemId={2} />
        <DisplaySaudeCultura navigation={navigation} itemId={3} />
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
