import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Cebolinha",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Coentro",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Hortelã",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default function Culturas({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="bodySmall">Culturas Lista</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("CadastroCulturas")}>
            <Item title={item.title} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
